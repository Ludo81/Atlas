# -*- coding:utf-8 -*-

# Connexion de l'application à la BDD
# Remplacer user, monpassachanger, IPADRESSE (localhost si la BDD est sur le même serveur que l'application), 
# eventuellement le port de la BDD et le nom de la BDD avec l'utilisateur qui a des droits de lecture sur les vues de l'atlas (user_pg dans settings.ini)
database_connection = "postgresql://geonatatlas:monpassachanger@localhost:5432/geonatureatlas"

#################################
#################################
### Customisation application ###
#################################
#################################

# Nom de la structure
STRUCTURE = "Nom de la structure"

# Nom de l'application
NOM_APPLICATION = "Nom de l application"

# URL de l'application depuis la racine du domaine
# ex "/atlas" pour une URL: http://mon-domaine/atlas OU "" si l'application est accessible à la racine du domaine
URL_APPLICATION = "/atlas"

#AFFICHAGE_RANG_STAT = True
#COLONNES_RANG_STAT = 3
#RANG_STAT = [{'phylum': ["Arthropoda", "Mollusca"]}, {'phylum': ["Chordata"]}, {'regne': ["Plantae"]}]
#RANG_STAT_FR = ['Faune invertébrée', 'Faune vertébrée', 'Flore']

###########################
###### Cartographie #######
###########################

# Configuration des cartes (centre du territoire, couches CARTE et ORTHO, échelle par défaut...)
MAP = {
    'LAT_LONG': [43.561781, 1.469465],
    'FIRST_MAP': {
            'url' : '//{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png',
            'attribution' : '&copy OpenStreetMap',
            'tileName' : 'OSM'
    },
    'SECOND_MAP' : {'url' :'//a.tile.opentopomap.org/{z}/{x}/{y}.png',
            'attribution' : '&copy OpenStreetMap-contributors, SRTM | Style: &copy OpenTopoMap (CC-BY-SA)',
            'tileName' : 'OTM'
    },
    'ZOOM' : 50,
    # Pas du slider sur les annees d'observations: 1 = pas de 1 an sur le slider
    'STEP': 1,
    # Couleur et épaisseur des limites du territoire
    'BORDERS_COLOR': '#000000',
    'BORDERS_WEIGHT': 3,
    'ENABLE_SLIDER': True
}
