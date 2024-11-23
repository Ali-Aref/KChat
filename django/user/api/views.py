from rest_framework import viewsets
from rest_framework.exceptions import NotFound
from rest_framework.response import Response

from user.models import Profile

from . import permissions, serializers


class ProfileModelViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsProfileOwner]
    map_serializer_classes = {
        "list": serializers.ProfileListSerializer,
        "retrieve": serializers.ProfileDetailsSerializer,
        "partial_update": serializers.ProfileUpdateSerializer,
    }
    queryset = Profile.objects.filter()
    http_method_names = ["get", "patch", "head"]

    def get_serializer_class(self):
        return self.map_serializer_classes.get(self.action)

    def get_object(self):
        id = self.kwargs.get("pk")
        user = Profile.objects.filter(user__id=id)
        if user.count() > 0:
            return user.first()
        raise NotFound()

    def partial_update(self, request, *args, **kwargs):
        super().partial_update(request, *args, **kwargs)
        # override the default serializer response
        return Response(
            serializers.ProfileDetailsSerializer(
                instance=self.get_object()
            ).data
        )
