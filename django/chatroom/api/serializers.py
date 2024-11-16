from pprint import pprint

from rest_framework import serializers

from chatroom.models import Chatroom, ChatroomMessages, ChatroomPoints
from django.db.models import Sum
from django.db.models.functions import Coalesce
from lib.utils import get_last_days_date


class ChatroomListSerializer(serializers.ModelSerializer):
    # TODO: show users count for each chatroom
    class Meta:
        model = Chatroom
        fields = "id", "name", "icon", "cover_photo"


class ChatroomDetailsSerializer(serializers.ModelSerializer):
    users = serializers.SerializerMethodField()

    def get_users(self, obj):
        users = obj.users.all().values(
            "id",
            "first_name",
            "last_name",
            "profile__gender",
            "profile__avatar",
        )
        points = (
            obj.points.filter(
                earned_at__gte=get_last_days_date(30),
                user__in=[x["id"] for x in users],
            )
            .values("user")
            .annotate(total_points=Coalesce(Sum("point"), 0))
        )

        for user, point in zip(users, points):
            user["points"] = point["total_points"]

        pprint(list(users), indent=2)
        pprint(list(points), indent=2)
        return users

    class Meta:
        model = Chatroom
        fields = "__all__"


class ChatroomMessagesListSerializer(serializers.ModelSerializer):
    # TODO: pagination for messages
    full_name = serializers.StringRelatedField(
        source="sender.profile.full_name"
    )
    gender = serializers.StringRelatedField(source="sender.profile.gender")
    avatar = serializers.StringRelatedField(source="sender.profile.avatar")

    class Meta:
        model = ChatroomMessages
        exclude = ("chatroom",)


class ChatroomMessagesCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatroomMessages
        exclude = ("sender",)


class ChatroomPointsSerializer(serializers.ModelSerializer):
    class Meta:
        model = ChatroomPoints
        fields = "__all__"
