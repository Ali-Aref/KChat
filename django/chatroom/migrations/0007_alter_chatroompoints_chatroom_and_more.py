# Generated by Django 5.1.3 on 2024-11-15 07:03

import django.db.models.deletion
from django.conf import settings
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ("chatroom", "0006_chatroom_users"),
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.AlterField(
            model_name="chatroompoints",
            name="chatroom",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="points",
                to="chatroom.chatroom",
            ),
        ),
        migrations.AlterField(
            model_name="chatroompoints",
            name="user",
            field=models.ForeignKey(
                on_delete=django.db.models.deletion.CASCADE,
                related_name="points",
                to=settings.AUTH_USER_MODEL,
            ),
        ),
    ]
