from rest_framework import serializers

from lib.utils import dynamic_serializer_fields
from user.models import USER, Profile


class UserSerializer(serializers.ModelSerializer):
    def __init__(self, *args, **kwargs):
        dynamic_serializer_fields(self, *args, **kwargs)

    class Meta:
        model = USER
        exclude = ("password", "last_login")


class ProfileListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("gender", "avatar")

    def to_representation(self, instance):
        representation = {}
        user = UserSerializer(
            instance=instance.user,
            fields=("id", "usernname", "first_name", "last_name"),
        ).data
        for key, value in user.items():
            representation[key] = value
        return representation | super().to_representation(instance)


class ProfileDetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Profile
        fields = ("id", "gender", "avatar", "bio", "blocked_users")

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        user = UserSerializer(instance=instance.user).data
        for key, value in user.items():
            representation[key] = value
        return representation


class ProfileUpdateSerializer(serializers.ModelSerializer):
    user = UserSerializer(
        fields=(
            "id",
            "username",
            "first_name",
            "last_name",
            "email",
            "is_active",
        ),
    )

    class Meta:
        model = Profile
        fields = "__all__"

    def update(self, instance, validated_data):
        user_data = validated_data.pop("user", None)
        if user_data:
            user_serializer = UserSerializer(
                data=user_data,
                instance=instance.user,
                partial=True,
            )
            is_valid_user = user_serializer.is_valid(raise_exception=True)
            if is_valid_user:
                user_serializer.save()
        return super().update(instance, validated_data)
