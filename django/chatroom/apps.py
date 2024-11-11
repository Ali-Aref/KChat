from django.apps import AppConfig


class ChatroomConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'chatroom'

    def ready(self):
        from . import signals
