from django.db import models
from items.models import Item
from users.models import Student


class Vote(models.Model):
    student = models.ForeignKey(Student, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)

    def as_dict(self):
        return {
            'id': self.pk,
            'student_id': self.student.pk,
            'item_id': self.item.pk
        }

    class Meta:
        unique_together = ('student', 'item')
