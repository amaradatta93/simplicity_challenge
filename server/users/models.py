from django.db import models


class Student(models.Model):
    name = models.CharField(max_length=30)

    def as_dict(self):
        return {
            'name': self.name,
            'id': self.pk
        }
