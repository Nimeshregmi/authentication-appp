# Generated by Django 4.2.7 on 2023-11-27 08:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('user', '0001_initial'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='useraccount',
            name='groups',
        ),
        migrations.RemoveField(
            model_name='useraccount',
            name='user_permissions',
        ),
        migrations.AlterField(
            model_name='useraccount',
            name='date_of_birth',
            field=models.DateField(null=True),
        ),
    ]
