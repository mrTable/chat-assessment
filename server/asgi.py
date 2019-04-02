import os
import django
from channels.routing import get_default_application

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "server.settings.production")
django.setup()
application = get_default_application()
