# -*- coding:utf-8 -*-

from flask import jsonify, Blueprint, request, current_app
from werkzeug.wrappers import Response
from . import utils
from .modeles.repositories import (
    vmSearchTaxonRepository,
    vmObservationsRepository,
    vmObservationsMaillesRepository,
    vmMedias,
    vmCommunesRepository,
)
from .configuration import config

api = Blueprint("api", __name__)


@api.route("/searchTaxon", methods=["GET"])
def searchTaxonAPI():
    session = utils.loadSession()
    search = request.args.get("search", "")
    limit = request.args.get("limit", 50)
    results = vmSearchTaxonRepository.listeTaxonsSearch(session, search, limit)
    session.close()
    return jsonify(results)


@api.route("/searchCommune", methods=["GET"])
def searchCommuneAPI():
    session = utils.loadSession()
    search = request.args.get("search", "")
    limit = request.args.get("limit", 50)
    results = vmCommunesRepository.getCommunesSearch(session, search, limit)
    return jsonify(results)

@api.route("/searchZone/<int:id_zone>", methods=["GET"])
def getBatimentsInfo(id_zone):
    print("passe")
    connection = utils.engine.connect()
    liste_batiments = vmCommunesRepository.getBatimentsFromId(
        connection, id_zone
    )
    connection.close()
    return jsonify(liste_batiments)

@api.route("/coorUniv", methods=["GET"])
def getCoorUniv():
    connection = utils.engine.connect()
    coorUniv = vmCommunesRepository.getTerritoireUniv(
        connection
    )
    connection.close()
    return jsonify(coorUniv)

@api.route("/observationsMailleAndPoint/<int:cd_ref>", methods=["GET"])
def getObservationsMailleAndPointAPI(cd_ref):
    """
        Retourne les observations d'un taxon en point et en maille

        :returns: dict ({'point:<GeoJson>', 'maille': 'GeoJson})
    """
    session = utils.loadSession()
    observations = {
        "point": vmObservationsRepository.searchObservationsChilds(session, cd_ref),
        "maille": vmObservationsMaillesRepository.getObservationsMaillesChilds(
            session, cd_ref
        ),
    }
    session.close()
    return jsonify(observations)


@api.route("/observationsMaille/<int:cd_ref>", methods=["GET"])
def getObservationsMailleAPI(cd_ref, year_min=None, year_max=None):
    """
        Retourne les observations d'un taxon par maille (et le nombre d'observation par maille)

        :returns: GeoJson
    """
    session = utils.loadSession()
    observations = vmObservationsMaillesRepository.getObservationsMaillesChilds(
        session,
        cd_ref,
        year_min=request.args.get("year_min"),
        year_max=request.args.get("year_max"),
    )
    session.close()
    return jsonify(observations)


@api.route("/observationsPoint/<int:cd_ref>", methods=["GET"])
def getObservationsPointAPI(cd_ref):
    connection = utils.engine.connect()
    observations = vmObservationsRepository.searchObservationsChilds(connection, cd_ref)
    connection.close()
    return jsonify(observations)


@api.route("/observations/<insee>/<int:cd_ref>", methods=["GET"])
def getObservationsCommuneTaxonAPI(insee, cd_ref):
    connection = utils.engine.connect()
    observations = vmObservationsRepository.getObservationTaxonCommune(
        connection, insee, cd_ref
    )
    connection.close()
    return jsonify(observations)


@api.route("/observationsMaille/<insee>/<int:cd_ref>", methods=["GET"])
def getObservationsCommuneTaxonMailleAPI(insee, cd_ref):
    connection = utils.engine.connect()
    observations = vmObservationsMaillesRepository.getObservationsTaxonCommuneMaille(
        connection, insee, cd_ref
    )
    connection.close()
    return jsonify(observations)


@api.route("/photoGroup/<group>", methods=["GET"])
def getPhotosGroup(group):
    connection = utils.engine.connect()
    photos = vmMedias.getPhotosGalleryByGroup(
        connection,
        current_app.config["ATTR_MAIN_PHOTO"],
        current_app.config["ATTR_OTHER_PHOTO"],
        group,
    )
    connection.close()
    return jsonify(photos)


@api.route("/photosGallery", methods=["GET"])
def getPhotosGallery():
    connection = utils.engine.connect()
    photos = vmMedias.getPhotosGallery(
        connection,
        current_app.config["ATTR_MAIN_PHOTO"],
        current_app.config["ATTR_OTHER_PHOTO"],
    )
    connection.close()
    return jsonify(photos)


@api.route("/tes", methods=["GET"])
def test():
    connection = utils.engine.connect()
    photos = vmMedias.getPhotosGallery(
        connection,
        current_app.config["ATTR_MAIN_PHOTO"],
        current_app.config["ATTR_OTHER_PHOTO"],
    )
    connection.close()
    return jsonify(photos)

@api.route("/fonge", methods=["GET"])
def fonge():
	connection = utils.engine.connect()
	fonge=vmSearchTaxonRepository.getfonge(connection)
	connection.close()
	return jsonify(fonge)

@api.route("/flore", methods=["GET"])
def flore():
	connection = utils.engine.connect()
	flore=vmSearchTaxonRepository.getflore(connection)
	connection.close()
	return jsonify(flore)

@api.route("/faune", methods=["GET"])
def faune():
	connection = utils.engine.connect()
	faune=vmSearchTaxonRepository.getfaune(connection)
	connection.close()
	return jsonify(faune)

@api.route("/media/<int:cd_ref>",methods=["GET"])
def media(cd_ref):
        connection = utils.engine.connect()
        media=vmSearchTaxonRepository.getmedia(connection,cd_ref)
        connection.close()
        return jsonify(media)
