from infrastructure import connectors


class UserDAL:
    def get_user(self, creds):
        connection = connectors.create_pg_connection()
        try:
            cursor = connection.cursor()
            query = 'SELECT * FROM "CR"."User" Where "UserName" = %s and "Password" = %s'
            cursor.execute(query, (creds['username'], creds['password']))
            connection.commit()
            return cursor.fetchall()
        except Exception as e:
            raise e
        finally:
            cursor.close()
            connection.close()
