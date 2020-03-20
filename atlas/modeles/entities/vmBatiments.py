# coding: utf-8
from sqlalchemy import Boolean, Column, Date, DateTime, Integer, MetaData, String, Table, Text
from geoalchemy2.types import Geometry
from sqlalchemy.sql.sqltypes import NullType
from sqlalchemy.orm import mapper
from sqlalchemy.ext.declarative import declarative_base
from ...utils import engine

metadata = MetaData()
Base = declarative_base()

class VmBatiments(Base):
    __table__ = Table(
    'batiments', metadata,
    Column('id', Integer,primary_key=True, unique=True),
    Column('the_geom', Geometry(u'MULTIPOLYGON', 2154), index=True),
    Column('osm_id', String(10)),
    Column('code', Integer),
    Column('fclass', String(28)),
    Column('name', String(100)),
    Column('type', String(20)),
    Column('zone_bats', Integer),
    schema='atlas', autoload=True, autoload_with=engine
)
