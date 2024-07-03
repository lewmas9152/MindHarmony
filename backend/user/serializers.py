from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile
from rest_framework.authtoken.models import Token
from django.db.utils import IntegrityError

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)  # Generate the token here
        return user

class UserProfileSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = UserProfile
        fields = ['user', 'bio', 'profile_picture', 'created_at']
        extra_kwargs = {
            'profile_picture': {'required': False, 'allow_null': True},
        }

    def create(self, validated_data):
        user_data = validated_data.pop('user')
        
        # Check if the user already exists
        try:
            user = User.objects.get(username=user_data['username'])
            profile, created = UserProfile.objects.get_or_create(user=user, defaults=validated_data)
            if not created:
                # Profile already exists, but no need to raise an error if it's for the same user.
                return profile
        except User.DoesNotExist:
            user = User.objects.create_user(**user_data)
            profile = UserProfile.objects.create(user=user, **validated_data)
        
        return profile

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
        if user_data:
            user_serializer = UserSerializer(instance.user, data=user_data)
            if user_serializer.is_valid():
                user_serializer.save()
        return super().update(instance, validated_data)
