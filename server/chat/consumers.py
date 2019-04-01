import json
from json import JSONDecodeError

from asgiref.sync import async_to_sync
from channels.generic.websocket import WebsocketConsumer
from django.core.exceptions import ValidationError

from server.chat.models import Message

FETCH_MESSAGES = 'fetch_messages'
ADD_MESSAGE = 'add_message'
PREVIOUS_MESSAGES = 'previous_messages'
NEW_MESSAGE = 'new_message'


class ChatConsumer(WebsocketConsumer):

    # TODO expand to support multiple chat rooms
    groups = ['chat']

    def broadcast(self, message):
        async_to_sync(self.channel_layer.group_send)(
            self.groups[0],
            {
                'type': NEW_MESSAGE,
                'message': message.get_serialized(),
            })

    def new_message(self, event):
        self.send(text_data=json.dumps(event))

    def fetch_messages(self):
        data = {
            'type': PREVIOUS_MESSAGES,
            'messages': [message.get_serialized() for message in Message.objects.all()],
        }
        self.send(text_data=json.dumps(data))

    # TODO error logging
    def receive(self, text_data=None, bytes_data=None):
        try:
            data = json.loads(text_data)
        except JSONDecodeError:
            return

        event_type = data.get('type')
        if event_type == FETCH_MESSAGES:
            self.fetch_messages()
        elif event_type == ADD_MESSAGE:
            try:
                message = Message.objects.create(
                    username=data.get('username'),
                    content=data.get('message'))
                self.broadcast(message)
            except ValidationError:
                pass
