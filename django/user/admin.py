from django.contrib import admin
from .models import Profile


# Register your models here.
@admin.register(Profile)
class ProfileAdmin(admin.ModelAdmin):
    list_display = "gender", "birth_date", "age"
    search_fields = "user__first_name", "user__last_name"
    list_filter = "gender", "user__is_active"

    def age(self, obj):
        return obj.birth_date if not obj.birth_date else "21"

    age.short_description = "Age"
