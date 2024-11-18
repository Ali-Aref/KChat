from rest_framework import serializers

from lib.utils import dynamic_serializer_fields
from user.models import USER, Profile


class UserSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        dynamic_serializer_fields(self, *args, **kwargs)

    class Meta:
        model = USER
        fields = "__all__"
        extra_kwargs = {
            "password": {"write_only": True},
        }


class ProfileListSerializer(serializers.ModelSerializer):
    # START: from here
    # make the crud for profile and user
    user = UserSerializer(
        fields=("username", "first_name", "last_name"),
    )

    class Meta:
        model = Profile
        fields = "__all__"
        extra_kwargs = {
            "user": {"read_only": True},
            "bio": {"write_only": True},
            "cover_photo": {"write_only": True},
            "birth_date": {"write_only": True}
        }
