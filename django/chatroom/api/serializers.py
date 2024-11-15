from chatroom.models import Chatroom, ChatroomMessages, ChatroomPoints
from rest_framework import serializers


class ChatroomListSerializer(serializers.ModelSerializer):
    # TODO: show users count for each chatroom
    class Meta:
        model = Chatroom
        fields = "id", "name", "icon", "cover_photo"


class ChatroomDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Chatroom
        fields = "__all__"


class ChatroomMessagesListSerializer(serializers.ModelSerializer):
    # TODO: pagination for messages
    full_name = serializers.StringRelatedField(
        source="sender.profile.full_name"
    )
    gender = serializers.StringRelatedField(
        source="sender.profile.gender"
    )
    avatar = serializers.StringRelatedField(
        source="sender.profile.avatar"
    )

    class Meta:
        model = ChatroomMessages
        exclude = "chatroom",


class ChatroomMessagesCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatroomMessages
        exclude = "sender",


class ChatroomPointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatroomPoints
        fields = "__all__"
