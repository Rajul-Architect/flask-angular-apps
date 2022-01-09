from os import environ
import pymysql
import psycopg2

def create_pg_connection():
    user = environ.get('User')
    connection = psycopg2.connect(host=environ.get('Host'),
                                 user=environ.get('User'),
                                 password=environ.get('Password'),
                                 database=environ.get('Database'),
                                 port=environ.get('Database_Port'))
    return connection
