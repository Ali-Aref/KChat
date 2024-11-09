from django.contrib import admin
from .models import Chatroom


# Register your models here.
@admin.register(Chatroom)
class ChatroomAdmin(admin.ModelAdmin):
    list_display = "name",
    search_fields = "name",
