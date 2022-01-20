from flask_restplus import Resource
from flask import request
import datetime
import os
import jwt
from dal import user
from infrastructure import filters

dal = user.UserDAL()


class Login(Resource):
    @filters.token_required
    def get(self):
        return 200

    def post(self):
        result = dal.get_user(request.get_json())
        if len(result) > 0:
            token = jwt.encode(
                {'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=45)},
                os.environ['SECRET_KEY'], "HS256")
            #encoded_jwt = token.decode('UTF-8')
            return {'token': token, 'firstName': result[0][2], 'lastName': result[0][3]}, 200
        else:
            return "Login is required", 401
