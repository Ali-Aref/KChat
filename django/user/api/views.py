from rest_framework import viewsets

from user.models import Profile

from . import permissions, serializers


class ProfileModelViewSet(viewsets.ModelViewSet):
    permission_classes = [permissions.IsProfileOwner]
    map_serializer_classes = {
        "list": serializers.ProfileListSerializer
    }
    queryset = Profile.objects.filter()

    def get_serializer_class(self):
        return self.map_serializer_classes.get(self.action)
