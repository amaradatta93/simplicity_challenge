# Generated by Django 2.0.2 on 2018-02-18 02:08

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('users', '0002_auto_20180218_0103'),
        ('polls', '0001_initial'),
    ]

    operations = [
        migrations.AlterUniqueTogether(
            name='vote',
            unique_together={('student', 'id')},
        ),
    ]
