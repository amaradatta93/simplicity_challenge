# Generated by Django 2.0.2 on 2018-02-18 22:38

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('polls', '0003_auto_20180218_0213'),
    ]

    operations = [
        migrations.AlterField(
            model_name='vote',
            name='student',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='users.Student', unique=True),
        ),
    ]
