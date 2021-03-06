# Generated by Django 3.0.2 on 2020-05-05 08:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('treasure', '0016_auto_20200504_2333'),
    ]

    operations = [
        migrations.AddField(
            model_name='level',
            name='display_audio',
            field=models.BooleanField(default=True),
        ),
        migrations.AddField(
            model_name='level',
            name='display_video',
            field=models.BooleanField(default=True),
        ),
        migrations.AlterField(
            model_name='level',
            name='video',
            field=models.FileField(default='video/default.mp4', upload_to='video'),
        ),
    ]
