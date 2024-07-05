from django.db import models
from django.contrib.auth.models import User
from datetime import date, datetime


class Professional(models.Model):
    name = models.TextField()
    specialization = models.CharField(max_length=200)
    bio = models.TextField()
    profile = models.ImageField(default='default.jpeg', upload_to='profile_pictures/')
    created_at = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.specialization


STATUS_CHOICES = (
    ('pending', 'pending'),
    ('confirmed', 'confirmed'),
    ('cancelled', 'cancelled'),
)

class Appointment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    professional = models.ForeignKey(Professional, on_delete=models.CASCADE)
    created_at = models.DateField(auto_now_add=True)
    appointment_date = models.DateField(default=datetime.now)
    status = models.CharField(
        max_length=30,
        choices=STATUS_CHOICES,
        default='pending'
    )

    def __str__(self):
        return self.status
