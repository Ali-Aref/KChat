from django.db import models
from user.models import USER


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
        return self.name

    def save(self, *args, **kwargs):
        return super().save(*args, **kwargs)

    # Define Chatroom properties here


class ChatroomMessages(models.Model):
    # Define ChatroomMessages fields here
    chatroom = models.ForeignKey(Chatroom, on_delete=models.CASCADE)
    message = models.TextField()
    sender = models.ForeignKey(USER, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-pk"]
        verbose_name = "Chatroom Messages"
        verbose_name_plural = "Chatroom Messages"

    def __str__(self):
        return self.message


class ChatroomPoints(models.Model):
    # Define ChatroomPoints fields here
    chatroom = models.ForeignKey(Chatroom, on_delete=models.CASCADE)
    user = models.ForeignKey(USER, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)

    class Meta:
        ordering = ["-pk"]
        verbose_name = "Chatroom Points"
        verbose_name_plural = "Chatroom Points"

    def __str__(self):
        return f"{self.user.username} - {self.points}"
