from flask_restplus import Api
from flask import Flask, jsonify, request
from flask_cors import CORS
import jwt
from os import environ
import infrastructure.logger as logger
from config import routes
import dotenv
import os
import datetime


basedir = os.path.abspath(os.path.dirname(__file__))
dotenv.load_dotenv(os.path.join(basedir, '.env'))

app = Flask(__name__)
cors = CORS(app)
app.config['SECRET_KEY']=environ.get('SECRET_KEY')
api = Api(app, title="Change Request API", description="Endpoints for Change Request CRUD",
          prefix='/api/change-requests', )
routes.initialize_routes(api)


def handle_exception(e):
    logger.log_exception(str(e))
    return {'message': str(e)}, 500


app.handle_user_exception = handle_exception

if __name__ == "__main__":
    app.run(host=environ.get('Host'),port=environ.get('Port'), threaded=True)
