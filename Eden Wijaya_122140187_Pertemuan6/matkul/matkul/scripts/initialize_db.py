import argparse
import sys

from pyramid.paster import bootstrap, setup_logging
from sqlalchemy.exc import OperationalError

from .. import models


def setup_models(dbsession):
    """
    Add or update models / fixtures in the database.

    """
    matkul1 = models.Matkul(
        kode_mk='IF0001',
        nama_mk='Pemrograman Web',
        sks=3,
        semester=6,
    )
    
    matkul2 = models.Matkul(
        kode_mk='IF0002',
        nama_mk='Basis Data',
        sks=3,
        semester=4,
    )

    dbsession.add(matkul1)
    dbsession.add(matkul2)


def parse_args(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        'config_uri',
        help='Configuration file, e.g., development.ini',
    )
    return parser.parse_args(argv[1:])


def main(argv=sys.argv):
    args = parse_args(argv)
    setup_logging(args.config_uri)
    env = bootstrap(args.config_uri)

    try:
        with env['request'].tm:
            dbsession = env['request'].dbsession
            setup_models(dbsession)
    except OperationalError:
        print()