from rest_framework import viewsets
from rest_framework.exceptions import MethodNotAllowed, NotFound
from rest_framework.viewsets import generics

from django.contrib.auth import get_user_model
from django.db.models import Q
from friend.models import Friend, FriendRequest
from lib.utils import customPagination

from . import serializers

USER = get_user_model()


class FriendRetrieveAPIView(generics.RetrieveAPIView):
    serializer_class = serializers.FriendSerializer

    def get_queryset(self):
        return Friend.objects.filter(user=self.request.user)

    def get_object(self):
        id = self.kwargs.get("pk")
        user = Friend.objects.filter(user__id=id)
        if user.count() > 0:
            return user[0]
        raise NotFound()


class FriendRequestModelViewSet(viewsets.ModelViewSet):
    pagination_class = customPagination()
    serializer_class = serializers.FriendRequestSerializer
    http_method_names = ["get", "post", "head", "patch"]

    def get_queryset(self):
        return FriendRequest.objects.filter(
            Q(from_user=self.request.user) | Q(to_user=self.request.user)
        )

    def retrieve(self, request, *args, **kwargs):
        raise MethodNotAllowed("GET")
