# -*- coding:utf-8 -*-
from sqlalchemy import desc, func

from ..entities.vmSearchTaxon import VmSearchTaxon

from sqlalchemy.sql import text

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



def getfonge(connection):
        sql="""
           SELECT cd_ref , lb_nom , nom_valide FROM atlas.vm_taxons WHERE group2_inpn = 'Champignons'
        """
        req=connection.execute(text(sql))
        groupList = list()
        for r in req:
           temp = {
               'num': r.cd_ref,
               'nomLatin': r.lb_nom,
               'nomValide': r.nom_valide
           }
           groupList.append(temp)
        return groupList

def getflore(connection):
        sql="""
           SELECT cd_ref , lb_nom , nom_valide FROM atlas.vm_taxons WHERE group2_inpn = 'Angiospermes' OR group2_inpn = 'Fougères' OR group2_inpn = 'Gymnospermes' OR group2_inpn = 'Mousses'
        """
        req=connection.execute(text(sql))
        print(req)
        groupList = list()
        for r in req:
           temp = {
               'num': r.cd_ref,
               'nomLatin': r.lb_nom,
               'nomValide': r.nom_valide
           }
           groupList.append(temp)
        return groupList

def getfaune(connection):
        sql="""
           SELECT cd_ref , lb_nom , nom_valide FROM atlas.vm_taxons WHERE NOT (group2_inpn = 'Angiospermes' AND group2_inpn = 'Fougères' AND group2_inpn = 'Gymnospermes' AND group2_inpn = 'Mousses' AND group2_inpn = 'Champignons')
        """
        req=connection.execute(text(sql))
        print(req)
        groupList = list()
        for r in req:
           temp = {
               'num': r.cd_ref,
               'nomLatin': r.lb_nom,
               'nomValide': r.nom_valide
           }
           groupList.append(temp)
        return groupList

def getmedia(connection,parametre):
         sql="""
            SELECT url FROM taxonomie.t_medias WHERE cd_ref = :thisparametre
         """
         req=connection.execute(text(sql),thisparametre = parametre)
         print(req)
         groupList = list()
         for r in req:
           temp = {
               'url': r.url,
           }
           groupList.append(temp)
         return groupList
