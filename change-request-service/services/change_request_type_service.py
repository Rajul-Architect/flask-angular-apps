from dal import change_request_dal as dal

dal = dal.ChangeRequestDAL()
class ChangeRequestTypeService:
    def get_all_cr_types(self):
        result = dal.get_all_cr_types()
        return result
