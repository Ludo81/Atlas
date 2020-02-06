# coding: utf-8
from sqlalchemy import (
    Column,
    Integer,
    MetaData,
    String,
    Table
)
from sqlalchemy.ext.declarative import declarative_base
from ...utils import engine


metadata = MetaData()
Base = declarative_base()


class VmSearchTaxon(Base):
    __table__ = Table(
        "vm_search_taxon",
        metadata,
        Column("cd_ref", Integer, primary_key=True, unique=True),
        Column("cd_nom", Integer),
        Column("search_name", String),
        schema="atlas",
        autoload=True,
        autoload_with=engine,
    )

