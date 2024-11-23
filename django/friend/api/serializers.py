from rest_framework import serializers

from django.db.models import F
from friend.models import Friend, FriendRequest
from user.api.serializers import ProfileListSerializer, UserSerializer


class FriendSerializer(serializers.ModelSerializer):
    friend_list = serializers.SerializerMethodField(read_only=True)

    def get_friend_list(self, object):
        return (
            object.friends.all()
            .values("id", "username", "first_name", "last_name")
            .annotate(
                avatar=F("profile__avatar"),
                gender=F("profile__gender"),
            )
        )

    class Meta:
        model = Friend
        fields = ("friends", "friend_list")
        extra_kwargs = {
            "friends": {"write_only": True},
        }


class FriendRequestSerializer(serializers.ModelSerializer):
    class Meta:
        model = FriendRequest
        fields = "__all__"
