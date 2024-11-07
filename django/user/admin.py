from django.contrib import admin
from .models import Profile


# Register your models here.
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = "full_name", "gender", "birth_date", "age"
    search_fields = "user__first_name", "user__last_name", "user__username"
    list_filter = "user__is_active", "gender", "age"

    def full_name(self, obj):
        return (
            f"{obj.user.first_name} {obj.user.last_name}" or obj.user.username
        )
