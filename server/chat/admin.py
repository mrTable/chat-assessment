from django.contrib import admin
from django.contrib.admin import ModelAdmin
from server.chat.models import Message

admin.site.register(Message, ModelAdmin)
