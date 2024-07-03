from rest_framework import serializers
from .models import User, UserProfile

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'is_staff']


class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    class Meta:
        model = UserProfile
        fields = ['user', 'bio', 'profile_picture', 'created_at']
        extra_kwargs = {
            'profile_picture': {'required': False, 'allow_null': True},
        }

    def update(self,instance,validated_data):
        user_data = validated_data.pop('user',None)
        if user_data:
            user_serializer = UserSerializer(instance.user,data=user_data)
            if user_serializer.is_valid():
                user_serializer.save()
            
        return super().update(instance,validated_data)