import uuid
from infrastructure import connectors

class ChangeRequestDAL:
    def create_new_cr(self, change_request):
        connection = connectors.create_pg_connection()
        try:
            cursor = connection.cursor()
            query = 'Insert Into "CR"."CR_Master"("Request_ID", "Type", "Date", "Description", "Status", "Submitted_By") values(%s,%s,%s,%s,%s,%s)'
            cursor.execute(query, (str(uuid.uuid4()), change_request["type"], "NOW()", change_request["description"], "Submitted", change_request['submittedBy']))
            connection.commit()
            results = {'recCount': cursor.rowcount}
            return results
        except Exception as e:
            raise e
        finally:
            cursor.close()
            connection.close()


    def get_all_crs(self, page, records_per_page, requestidsearch, requestownersearch):
        connection = connectors.create_pg_connection()
        try:
            cursor = connection.cursor()
            query = 'Select count(*) OVER() AS "Total", "Request_ID", "Type", "Description", "Status", TO_CHAR("Date", \'YYYY-MM-DD HH:MM:SS\') AS "Date", "Submitted_By" from "CR"."CR_Master" '
            if requestidsearch != '' or requestownersearch != '':
                query += ' WHERE '
            if requestidsearch != '':
                query += '"Request_ID" like \'%' + requestidsearch + '%\''
            if requestownersearch != '':
                query += (' AND ' if requestidsearch != '' else '') + '"Submitted_By" like \'%' + requestownersearch + '%\''
            query += ' ORDER BY "Date" DESC Limit '+ str(records_per_page)  + ' OFFSET ' + str((int(page) - 1) * int(records_per_page))
            cursor.execute(query)
            connection.commit()
            results = cursor.fetchall()
            records = []
            for record in results:
                records.append({
                'total': record[0],
                'id': record[1],
                'type': record[2],
                'description': record[3],
                'status': record[4],
                'date': record[5],
                'submittedBy': record[6]})
            return records
        except Exception as e:
            raise e
        finally:
            cursor.close()
            connection.close()

    def update_cr(self, request):
        connection = connectors.create_pg_connection()
        try:
            cursor = connection.cursor()
            query = 'Update "CR"."CR_Master" set "Status"=%s, "Date"=%s Where "Request_ID"=%s'
            cursor.execute(query, (request["status"], "NOW()",request["id"]))
            connection.commit()
            results = {'recCount': cursor.rowcount}
            return results
        except Exception as e:
            raise e
        finally:
            cursor.close()
            connection.close()

    def get_all_cr_types(self):
        connection = connectors.create_pg_connection()
        try:
            cursor = connection.cursor()
            query = 'Select "CR_Type_ID", "CR_Type_Name" from "CR"."CR_Type_Master"'
            cursor.execute(query)
            connection.commit()
            results = cursor.fetchall()
            return results
        except Exception as e:
            raise e
        finally:
            cursor.close()
            connection.close()
