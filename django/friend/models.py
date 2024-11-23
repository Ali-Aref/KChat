from django.db import models
from user.models import USER


# Create your models here.
class Friend(models.Model):
    # Define Friend fields here
    user = models.OneToOneField(
        USER, on_delete=models.CASCADE, related_name="friends_list"
    )
    friends = models.ManyToManyField(USER, blank=True)

    class Meta:
        ordering = ["-pk"]
        verbose_name = "Friend"
        verbose_name_plural = "Friends"

    def __str__(self):
        return self.user.profile.full_name

    def save(self, *args, **kwargs):
        return super().save(*args, **kwargs)

    # Define Friend properties here


class FriendRequest(models.Model):
    class FRIEND_REQUEST_STATUS(models.TextChoices):
        PENDING = "Pending", "Pending"
        ACCEPTED = "Accepted", "Accepted"
        REJECTED = "Rejected", "Rejected"

    # Define FriendRequest fields here
    from_user = models.ForeignKey(
        USER,
        on_delete=models.CASCADE,
        related_name="sent_friend_requests",
    )
    to_user = models.ForeignKey(
        USER,
        on_delete=models.CASCADE,
        related_name="received_friend_requests",
    )
    status = models.CharField(
        max_length=10,
        choices=FRIEND_REQUEST_STATUS,
        default=FRIEND_REQUEST_STATUS.PENDING,
    )
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        ordering = ["-pk"]
        verbose_name = "Friend Request"
        verbose_name_plural = "Friend Requests"

    def __str__(self):
        return f"{self.from_user.username} to {self.to_user.username}"

    def save(self, *args, **kwargs):
        super().save(*args, **kwargs)
        if self.status == self.FRIEND_REQUEST_STATUS.ACCEPTED:
            self.from_user.friends_list.friends.add(self.to_user)
            self.to_user.friends_list.friends.add(self.from_user)
        else:
            self.from_user.friends_list.friends.remove(self.to_user)
            self.to_user.friends_list.friends.remove(self.from_user)

    # Define FriendRequest properties here
