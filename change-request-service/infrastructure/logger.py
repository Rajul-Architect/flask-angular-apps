import logging
# logging.basicConfig(level=logging.INFO)

def log_exception(err_msg):
    kwargs = {'b': err_msg}
    logging.error("Error in CR Service: Message: {b}".format(**kwargs))