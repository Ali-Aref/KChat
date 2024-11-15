from django.db import models
from django.contrib.auth import get_user_model
from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db.models import F
import datetime

USER = get_user_model()


# media paths
def avatar_path(instance, filename):
    return f"avatars/{filename}"


def cover_photo_path(instance, filename):
    return f"avatars/{filename}"


# Create your models here.
class Profile(models.Model):
    class GenderChoices(models.TextChoices):
        MALE = "Male", "Male"
        FEMALE = "Female", "Female"

    # Define Profile fields here
    user = models.OneToOneField(
        USER, on_delete=models.CASCADE, related_name="profile"
    )
    gender = models.CharField(
        max_length=6, choices=GenderChoices.choices, default=GenderChoices.MALE
    )
    bio = models.TextField(blank=True, null=True)
    avatar = models.ImageField(upload_to=avatar_path, blank=True, null=True)
    cover_photo = models.ImageField(
        upload_to=cover_photo_path, blank=True, null=True
    )
    birth_date = models.DateField(blank=True, null=True)
    # age = models.GeneratedField(
    #     expression=datetime.datetime.now() - F("birth_date"),
    #     output_field=models.PositiveSmallIntegerField(),
    #     db_persist=True
    # )

    class Meta:
        ordering = ["-pk"]
        verbose_name = "Profile"
        verbose_name_plural = "Profiles"

    def __str__(self):
        return super().__str__()

    def save(self, *args, **kwargs):
        return super().save(*args, **kwargs)

    # signals
    @receiver(post_save, sender=USER)
    def create_profile(sender, instance, created, **kwargs):
        if created:
            Profile.objects.create(user=instance)

    # Define Profile properties here
    @property
    def full_name(self):
        return f"{self.user.first_name} {self.user.last_name}".strip()
