# Generated by Django 3.0.2 on 2020-05-04 17:16

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('treasure', '0013_level_video'),
    ]

    operations = [
        migrations.AlterField(
            model_name='level',
            name='video',
            field=models.FileField(default='video/default.mkv', upload_to='video'),
        ),
    ]
