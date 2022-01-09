from dal import change_request_dal as dal

dal = dal.ChangeRequestDAL()


class ChangeRequestService:
    def get_all_crs(self, page, records_per_page, requestidsearch, requestownersearch):
        result = dal.get_all_crs(page, records_per_page, requestidsearch, requestownersearch)
        return result

    def create_new_cr(self, data):
        result = dal.create_new_cr(data)
        return result

    def update_cr(self, data):
        result = dal.update_cr(data)
        return result
