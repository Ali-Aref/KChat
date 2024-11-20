from rest_framework import viewsets

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
    http_method_names = ['get', 'patch', 'head']

    def get_serializer_class(self):
        return self.map_serializer_classes.get(self.action)
