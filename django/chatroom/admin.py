from django.contrib import admin
from .models import Chatroom, ChatroomMessages, ChatroomPoints


# Register your models here.
@admin.register(Chatroom)
class ChatroomAdmin(admin.ModelAdmin):
    list_display = "name",
    search_fields = "name",


@admin.register(ChatroomMessages)
class ChatroomMessagesAdmin(admin.ModelAdmin):
    list_display = "username", "chatroom", "message", "created_at",
    search_fields = "sender__username", "message",

    def username(self, obj):
        return obj.sender.username


@admin.register(ChatroomPoints)
class ChatroomPointsAdmin(admin.ModelAdmin):
    list_display = "username", "point", "chatroom_name", "earned_at",
    search_fields = "user__username", "user__first_name", "user__last_name",
    list_filter = "earned_at", "chatroom__name",

    def chatroom_name(self, obj):
        return obj.chatroom.name

    def username(self, obj):
        return obj.user.username
