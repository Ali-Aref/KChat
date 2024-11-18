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


def dynamic_serializer_fields(self, *args, **kwargs):
    """Dynamic Fields For Serializers"""

    fields = kwargs.pop("fields", None)
    exclude = kwargs.pop("exclude", None)
    super(self.__class__, self).__init__(*args, **kwargs)
    # setting fields dynamically
    if fields:
        for field_name in set(self.fields) - set(fields):
            self.fields.pop(field_name)
    if exclude:
        for field_name in set(self.fields):
            if field_name in set(exclude):
                self.fields.pop(field_name)
