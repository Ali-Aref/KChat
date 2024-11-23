from django.db import transaction
from django.db.models.signals import post_save
from django.dispatch import receiver
from user.models import USER

from .models import Friend


@receiver(post_save, sender=USER)
def create_friends(sender, instance, created, **kwargs):
    if created:
        with transaction.atomic():
            Friend.objects.create(
                user=instance,
            )
