from datetime import timedelta

from rest_framework.pagination import PageNumberPagination

from django.utils import timezone
from lib.constants import PAGE_SIZE


def get_last_days_date(count: int) -> timedelta:
    """Returns date of last `count` days"""
    now = timezone.now()
    return now - timedelta(days=count)


def customPagination(page_size: int = PAGE_SIZE):
    """Returns custom pagination class"""
    return type(
        "SubClass", (PageNumberPagination,), {"page_size": page_size}
    )
