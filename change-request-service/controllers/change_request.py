from flask_restplus import Resource
from services import change_request_service as service
from flask import request
from infrastructure import filters

service = service.ChangeRequestService()


class ChangeRequest(Resource):

    @filters.token_required
    def get(self):
        result = service.get_all_crs(request.args.get('page'),
                                     request.args.get('size'),
                                     request.args.get('searchRequest'),
                                     request.args.get('searchRequestOwner'))
        return result, 200

    @filters.token_required
    def post(self):
        result = service.create_new_cr(request.get_json())
        return result, 200

    @filters.token_required
    def put(self):
        result = service.update_cr(request.get_json())
        return result, 200
