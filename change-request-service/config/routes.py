from controllers import change_request, change_request_type, login


def initialize_routes(api):
    api.add_resource(change_request.ChangeRequest, '/cr', methods=['GET', 'PUT', 'POST'])
    api.add_resource(change_request_type.ChangeRequestType, '/crtype')
    api.add_resource(login.Login, '/login')
