import os
from .base import *

SECRET_KEY = os.environ.get('DJANGO_SECRET_KEY', '#@cvaon1tdv@0r&!&itf%+8r^=f8u74z$4hg7)%@hm_em!d@al')

# FIXME who really cares about security
ALLOWED_HOSTS = ['*']
