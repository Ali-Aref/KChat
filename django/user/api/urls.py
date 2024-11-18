from rest_framework.routers import DefaultRouter

from django.urls import include, path

from . import views as v

router = DefaultRouter()
router.register("profile", v.ProfileModelViewSet, basename="profile")

app_name = "user-api"
urlpatterns = [
    path("", include(router.urls)),
]
