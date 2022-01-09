from flask import Flask, jsonify, request
import jwt
import os


def token_required(function):
    def decorator(*args, **kwargs):
        token = None
        if 'access-token' in request.headers:
            token = request.headers['access-token']

        if not token:
            return {'message': 'a valid token is missing'}, 401
        try:
            data = jwt.decode(token, os.environ['SECRET_KEY'], algorithms=["HS256"])
        except:
            return {'message': 'token is invalid'}, 401

        return function(*args, **kwargs)
    return decorator
