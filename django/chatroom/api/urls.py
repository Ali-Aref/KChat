from django.urls import path, include
from rest_framework.routers import DefaultRouter
from . import views as v

router = DefaultRouter()

router.register("chatrooms", v.ChatroomModelViewSet, basename="chatrooms")
router.register("chatroom-messages", v.ChatroomMessagesModelViewSet, basename="chatroom-messages")
router.register("chatroom-points", v.ChatroomPointsModelViewSet, basename="chatroom-points")


app_name = "chatroom"
urlpatterns = [
    path("", include(router.urls)),
    path("user-points/", v.UserPointsAPIView.as_view()),
]
