from rest_framework.routers import DefaultRouter

from django.urls import include, path

from . import views as v

router = DefaultRouter()

router.register(
    "friend-requests",
    v.FriendRequestModelViewSet,
    basename="friend-requests",
)

app_name = "friends"
urlpatterns = [
    path("", include(router.urls)),
    path(
        "friends/<int:pk>/",
        v.FriendRetrieveAPIView.as_view(),
        name="friends",
    ),
]
