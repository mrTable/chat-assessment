from .base import *
try:
    from .custom import *
except ImportError:
    pass

DEBUG = True
SECRET_KEY = '#@cvaon1tdv@0r&!&itf%+8r^=f8u74z$4hg7)%@hm_em!d@al'
ALLOWED_HOSTS = ['*', ]
CORS_ORIGIN_ALLOW_ALL = True
