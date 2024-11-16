from datetime import timedelta

from django.utils import timezone


def get_last_days_date(count: int) -> timedelta:
    """Returns date of last `count` days"""
    now = timezone.now()
    return now - timedelta(days=count)
