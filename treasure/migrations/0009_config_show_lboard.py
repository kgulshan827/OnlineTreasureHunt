# Generated by Django 2.1.4 on 2020-02-06 12:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('treasure', '0008_level_hint'),
    ]

    operations = [
        migrations.AddField(
            model_name='config',
            name='show_lboard',
            field=models.BooleanField(default=False),
        ),
    ]
