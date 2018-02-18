from django.db import models
from items.models import Item
from users.models import Student


class Vote(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
