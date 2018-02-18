from django.db import models


class Student(models.Model):
    student = models.CharField(max_length=30)
