from django.db import models


# media path
def chatroom_icon_path(instance, filename):
    return f"chatroom/logo_{filename}"


def chatroom_cover_photo_path(instance, filename):
    return f"chatroom/logo_{filename}"


# Create your models here.
class Chatroom(models.Model):
    # Define Chatroom fields here
    name = models.CharField(max_length=50)
    icon = models.ImageField(upload_to=chatroom_icon_path)
    cover_photo = models.ImageField(upload_to=chatroom_cover_photo_path)
    description = models.TextField()

    class Meta:
        ordering = ["-pk"]
        verbose_name = "Chatroom"
        verbose_name_plural = "Chatrooms"

    def __str__(self):
        return super().__str__()

    def save(self, *args, **kwargs):
        return super().save(*args, **kwargs)

    # Define Chatroom properties here
