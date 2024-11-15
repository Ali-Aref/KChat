from django.db.models.signals import post_save
from django.dispatch import receiver
from django.db import transaction
from django.db.models import F
from .models import ChatroomPoints, ChatroomMessages


@receiver(post_save, sender=ChatroomMessages)
def update_chatroom_points(sender, instance, created, **kwargs):
    if created:
        with transaction.atomic():
            # chatroom_points, _ = ChatroomPoints.objects.get_or_create(
            #     chatroom=instance.chatroom,
            #     user=instance.sender,
            #     defaults={"points": 0}
            # )
            # chatroom_points.points = F("points") + 1
            # chatroom_points.save()
            ChatroomPoints.objects.create(
                chatroom=instance.chatroom,
                user=instance.sender,
            )
