# -*- coding:utf-8 -*-
from sqlalchemy import desc, func

from ..entities.vmSearchTaxon import VmSearchTaxon


def listeTaxons(session):
    """
        revoie un tableau de dict :
        label = nom latin et nom francais concatene, value = cd_ref

        TODO Fonction inutile à supprimer !!!
    """
    req = session.query(VmSearchTaxon.search_name, VmSearchTaxon.cd_ref).all()
    taxonList = list()
    for r in req:
        temp = {"label": r[0], "value": r[1]}
        taxonList.append(temp)
    return taxonList


def listeTaxonsSearch(session, search, limit=50):
    """
        Recherche dans la VmSearchTaxon en ilike
        Utilisé pour l'autocomplétion de la recherche de taxon

        :query SQLA_Session session
        :query str search : chaine de charactere pour la recherche
        :query int limit: limite des résultats

        **Returns:**

            list: retourne un tableau {'label':'str': 'value': 'int'}
            label = search_name
            value = cd_ref
    """

    req = session.query(
        VmSearchTaxon.search_name,
        VmSearchTaxon.cd_ref,
        func.similarity(VmSearchTaxon.search_name, search).label("idx_trgm"),
    ).distinct()

    search = search.replace(" ", "%")
    req = (
        req.filter(VmSearchTaxon.search_name.ilike("%" + search + "%"))
        .order_by(desc("idx_trgm"))
        .order_by(VmSearchTaxon.cd_ref == VmSearchTaxon.cd_nom)
        .limit(limit)
    )
    data = req.all()

    return [{"label": d[0], "value": d[1]} for d in data]
