from flask_restplus import Resource
from services import change_request_type_service as service
from flask import request

service = service.ChangeRequestTypeService()


class ChangeRequestType(Resource):
    def get(self):
        result = service.get_all_cr_types()
        return result, 200
