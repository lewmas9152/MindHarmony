from django.db import models

# Create your models here.
class Sessions(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    media_url = models.URLField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title