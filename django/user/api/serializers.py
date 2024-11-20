from rest_framework import serializers

from lib.utils import dynamic_serializer_fields
from user.models import USER, Profile


class UserSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        dynamic_serializer_fields(self, *args, **kwargs)

    class Meta:
        model = USER
        exclude = ("password", "last_login")


class UserUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = USER
        fields = "first_name", "last_name", "username", "email"


class ProfileListSerializer(serializers.ModelSerializer):
    user = UserSerializer(
        fields=("username", "first_name", "last_name"),
    )

    class Meta:
        model = Profile
        fields = "id", "gender", "avatar", "user"


class ProfileDetailsSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Profile
        fields = "id", "gender", "avatar", "user"


class ProfileUpdateSerializer(serializers.ModelSerializer):
    user = UserSerializer(
        fields=("username", "first_name", "last_name", "email"),
    )

    class Meta:
        model = Profile
        fields = "__all__"

    def update(self, instance, validated_data):
        user_data = validated_data.pop("user", None)
        if user_data:
            user_serializer = UserUpdateSerializer(
                data=user_data,
                instance=instance.user,
                partial=True,
            )
            is_valid_user = user_serializer.is_valid(raise_exception=True)
            if is_valid_user:
                user_serializer.save()
        return super().update(instance, validated_data)
