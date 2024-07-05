from rest_framework import serializers
from .models import Sessions

class SessionsSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sessions
        fields = ['id', 'title', 'description', 'media_url', 'created_at']
        extra_kwargs = {'created_at': {'read_only': True}}