from django.conf.urls import url

from server.chat import consumers

websocket_urlpatterns = [
    url(r'^ws/chat/$', consumers.ChatConsumer),
]
