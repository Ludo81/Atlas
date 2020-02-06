# -*- coding:utf-8 -*-


from flask import current_app
from .. import utils


from sqlalchemy.sql import text


def _format_media(r):
    """
    Return a dict from request of the t_media table
    """
    return {
        "id_media": r.id_media,
        "cd_ref": r.cd_ref,
        "path": utils.findPath(r),
        "title": deleteNone(r.titre),
        "author": deleteNone(r.auteur),
        "description": deleteNone(r.desc_media),
        "id_type": r.id_type,
        "date": str(r.date_media),
        "licence": r.licence,
        "source": r.source,
    }


def deleteNone(r):
    if r is None:
        return ""
    else:
        return r


def getFirstPhoto(connection, cd_ref, id):
    sql = """
        SELECT *
        FROM atlas.vm_medias
        WHERE (
                cd_ref IN (
                    SELECT * FROM atlas.find_all_taxons_childs(:thiscdref)
                )
                OR cd_ref = :thiscdref
            )
                AND id_type=:thisid
        LIMIT 1
    """
    req = connection.execute(text(sql), thiscdref=cd_ref, thisid=id)
    for r in req:
        return _format_media(r)


def getPhotoCarousel(connection, cd_ref, id):
    sql = """
        SELECT *
        FROM atlas.vm_medias
        WHERE (
                cd_ref IN (
                    SELECT * FROM atlas.find_all_taxons_childs(:thiscdref)
                )
                OR cd_ref = :thiscdref
            )
            AND id_type= :thisid
    """
    req = connection.execute(text(sql), thiscdref=cd_ref, thisid=id)

    return [_format_media(r) for r in req]


def switchMedia(row):
    goodPath = str()
    if row.chemin is None and row.url is None:
        return None
    elif row.chemin is not None and row.chemin != "":
        goodPath = row.chemin
    else:
        goodPath = row.url

    if goodPath == "" or goodPath is None:
        return None

    return {
        current_app.config["ATTR_AUDIO"]: goodPath,
        current_app.config["ATTR_VIDEO_HEBERGEE"]: goodPath,
        current_app.config[
            "ATTR_YOUTUBE"
        ]: "<iframe width='100%' height='315' src='https://www.youtube.com/embed/"  # noqa
        + row.url
        + "' frameborder='0' allowfullscreen></iframe>",
        current_app.config[
            "ATTR_DAILYMOTION"
        ]: "<iframe frameborder='0' width='100%' height='315' src='//www.dailymotion.com/embed/video/"  # noqa
        + row.url
        + "' allowfullscreen></iframe>",
        current_app.config[
            "ATTR_VIMEO"
        ]: "<iframe src='https://player.vimeo.com/video/"  # noqa
        + row.url
        + "?color=ffffff&title=0&byline=0&portrait=0' width='640' height='360'\
        frameborder='0' webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>",  # noqa
    }


def getVideo_and_audio(connection, cd_ref, id5, id6, id7, id8, id9):
    sql = """
        SELECT *
        FROM atlas.vm_medias
        WHERE id_type in (:id5, :id6, :id7, :id8, :id9) AND cd_ref = :thiscdref
        ORDER BY date_media DESC
    """
    req = connection.execute(
        text(sql), thiscdref=cd_ref, id5=id5, id6=id6, id7=id7, id8=id8, id9=id9
    )
    tabMedias = {"audio": list(), "video": list()}
    for r in req:
        if switchMedia(r) is not None:
            path = switchMedia(r)
            temp = {
                "id_type": r.id_type,
                "path": path[r.id_type],
                "title": r.titre,
                "author": deleteNone(r.auteur),
                "description": deleteNone(r.desc_media),
                "id_media": r.id_media,
                "source": r.source,
                "licence": r.licence,
            }
            if r.id_type == current_app.config["ATTR_AUDIO"]:
                tabMedias["audio"].append(temp)
            else:
                tabMedias["video"].append(temp)
    return tabMedias


def getLinks_and_articles(connection, cd_ref, id3, id4):
    sql = """
        SELECT *
        FROM atlas.vm_medias
        WHERE id_type in (:id3, :id4) AND cd_ref = :thiscdref
        ORDER BY date_media DESC
    """
    req = connection.execute(text(sql), thiscdref=cd_ref, id3=id3, id4=id4)
    return [_format_media(r) for r in req]


def getPhotosGallery(connection, id1, id2):
    sql = """
        SELECT m.*, t.nom_vern, t.lb_nom, t.nb_obs
        FROM atlas.vm_medias m
        JOIN atlas.vm_taxons t ON t.cd_ref = m.cd_ref
        WHERE m.id_type IN (:thisID1, :thisID2)
        ORDER BY RANDOM()
    """
    req = connection.execute(text(sql), thisID1=id1, thisID2=id2)
    tab_photos = []
    for r in req:
        if r.nom_vern is not None:
            nom_verna = r.nom_vern.split(",")
            taxonName = nom_verna[0] + " | " + r.lb_nom
        else:
            taxonName = r.lb_nom

        photo = _format_media(r)
        photo["name"] = taxonName
        photo["nb_obs"] = r.nb_obs
        tab_photos.append(photo)
    return tab_photos


def getPhotosGalleryByGroup(connection, id1, id2, INPNgroup):
    sql = """
        SELECT m.*, t.nom_vern, t.lb_nom, t.nb_obs
        FROM atlas.vm_medias m
        JOIN atlas.vm_taxons t ON t.cd_ref = m.cd_ref
        WHERE m.id_type IN  (:thisID1, :thisID2) AND t.group2_inpn = :thisGroup
        ORDER BY RANDOM()"""
    req = connection.execute(text(sql), thisID1=id1, thisID2=id2, thisGroup=INPNgroup)
    tab_photos = []
    for r in req:
        photo = _format_media(r)
        if r.nom_vern is not None:
            nom_verna = r.nom_vern.split(",")
            taxon_name = nom_verna[0] + " | " + r.lb_nom
        else:
            taxon_name = r.lb_nom
        photo["name"] = taxon_name
        photo["nb_obs"] = r.nb_obs
        tab_photos.append(photo)
    return tab_photos

