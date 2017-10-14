from django.db import models
from django.utils import timezone


class App(models.Model):
    PLARFORM = {
        ('1', 'iOS'),
        ('2', 'Android')
    }
    name = models.CharField(max_length=50)
    description = models.TextField(max_length=200)
    platform = models.CharField(max_length=2, choices=PLARFORM,
                                      default='1')
    created_at=models.DateTimeField(
        default=timezone.now)

    def __str__(self):
        return self.name