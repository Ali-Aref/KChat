from django.contrib import admin

from .models import Friend, FriendRequest


# Register your models here.
@admin.register(Friend)
class FriendAdmin(admin.ModelAdmin):
    list_display = ("full_name",)
    search_fields = (
        "user__username",
        "user__email",
        "user__first_name",
        "user__last_name",
    )
    list_filter = ("user__profile__gender",)

    def full_name(self, obj):
        return obj.user.profile.full_name


@admin.register(FriendRequest)
class FriendRequestAdmin(admin.ModelAdmin):
    list_display = "friend_request", "status", "created_at"
    search_fields = "from_user__username", "to_user__username"
    list_filter = ("created_at",)

    def friend_request(self, obj):
        return f"{obj.from_user.username} to {obj.to_user.username}"
