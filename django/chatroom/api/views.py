from rest_framework import viewsets, views, response, permissions
from rest_framework.exceptions import MethodNotAllowed
from chatroom.models import Chatroom, ChatroomMessages, ChatroomPoints
from django.db.models import Q
from django.db.models import Sum
from django.utils import timezone
from datetime import timedelta
from lib.utils import customPagination, get_blocked_users_id
from . import serializers


class ChatroomModelViewSet(viewsets.ModelViewSet):
    queryset = Chatroom.objects.filter()
    map_serializer_class = {
        "list": serializers.ChatroomListSerializer,
        "retrieve": serializers.ChatroomDetailsSerializer,
    }

    def get_serializer_class(self):
        return self.map_serializer_class.get(self.action)


class ChatroomMessagesModelViewSet(viewsets.ModelViewSet):
    pagination_class = customPagination()
    http_method_names = ["get", "post", "head", "delete"]
    map_serializer_class = {
        "list": serializers.ChatroomMessagesListSerializer,
        "create": serializers.ChatroomMessagesCreateSerializer,
    }

    def get_serializer_class(self):
        return self.map_serializer_class.get(self.action)

    def get_queryset(self, *args, **kwargs):
        chatroom_id = self.request.query_params.get("chatroom")
        return ChatroomMessages.objects.filter(
            Q(chatroom=chatroom_id)
            & ~Q(sender__in=get_blocked_users_id(self.request.user))
        )

    def perform_create(self, serializer):
        is_valid = serializer.is_valid(raise_exception=True)
        if is_valid:
            return serializer.save(sender=self.request.user)

    def retrieve(self, request, *args, **kwargs):
        raise MethodNotAllowed(method="GET")


class ChatroomPointsModelViewSet(viewsets.ModelViewSet):
    serializer_class = serializers.ChatroomPointsSerializer
    queryset = ChatroomPoints.objects.filter()


class UserPointsAPIView(views.APIView):
    permission_classes = [
        permissions.IsAuthenticated,
    ]

    def get(self, request, format=None):
        user = request.user
        chatroom_id = request.query_params.get("chatroom")
        points = ChatroomPoints.objects.filter(
            Q(user=user)
            & Q(chatroom=chatroom_id)
            & Q(earned_at__gte=timezone.now() - timedelta(days=30))
        ).values("point")
        total_points = points.aggregate(
            total_points=Sum('point')
        )['total_points'] or 0
        return response.Response({"points": total_points})
