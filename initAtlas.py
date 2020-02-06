import os
import sys
from flask import Flask, render_template
from flask_sqlalchemy import SQLAlchemy

from werkzeug.serving import run_simple

from atlas.configuration import config
from atlas.utils import format_number
from sqlalchemy import create_engine, MetaData, Table
from flask_compress import Compress

from atlas.configuration.config_parser import read_and_validate_conf
from atlas.configuration.config_schema import AtlasConfig, SecretSchemaConf
from atlas.configuration import config

db = SQLAlchemy()
compress = Compress()

APP_DIR = os.path.abspath(os.path.dirname(__file__))


class ReverseProxied(object):
    def __init__(self, app, script_name=None, scheme=None, server=None):
        self.app = app
        self.script_name = script_name
        self.scheme = scheme
        self.server = server

    def __call__(self, environ, start_response):
        script_name = environ.get("HTTP_X_SCRIPT_NAME", "") or self.script_name
        if script_name:
            environ["SCRIPT_NAME"] = script_name
            path_info = environ["PATH_INFO"]
            if path_info.startswith(script_name):
                environ["PATH_INFO"] = path_info[len(script_name) :]
        scheme = environ.get("HTTP_X_SCHEME", "") or self.scheme
        if scheme:
            environ["wsgi.url_scheme"] = scheme
        server = environ.get("HTTP_X_FORWARDED_SERVER", "") or self.server
        if server:
            environ["HTTP_HOST"] = server
        return self.app(environ, start_response)


def create_app():
    """
        renvoie une instance de l'app Flask
    """

    # validation de la configuration
    # configuration publique
    valid_config = read_and_validate_conf(config, AtlasConfig)

    app = Flask(__name__, template_folder=APP_DIR)
    # push the config in app config at 'PUBLIC' key
    app.config.update(valid_config)

    app.debug = valid_config["modeDebug"]
    with app.app_context() as context:
        from atlas.atlasRoutes import main as main_blueprint

        app.register_blueprint(main_blueprint)

        from atlas.atlasAPI import api

        app.register_blueprint(api, url_prefix="/api")
        compress.init_app(app)

        app.wsgi_app = ReverseProxied(
            app.wsgi_app, script_name=valid_config["URL_APPLICATION"]
        )

        @app.context_processor
        def inject_config():
            return dict(configuration=valid_config)

        @app.template_filter("pretty")
        def pretty(val):
            return format_number(val)

    return app


app = create_app()
if __name__ == "__main__":
    # validation de la configuration secrète
    secret_conf = read_and_validate_conf(config, SecretSchemaConf)
    app.run(
        host="0.0.0.0", port=secret_conf["GUNICORN_PORT"], debug=app.config["modeDebug"]
    )

