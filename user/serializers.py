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
        user = User.objects.create_user(
            username=validated_data['username'],
            email=validated_data['email']
        )
        user.set_password(validated_data['password'])
        user.save()
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
        
        # Create or update the user
        user, created = User.objects.get_or_create(username=user_data['username'], defaults=user_data)
        if not created:
            # If user already exists, update the user details if needed
            for attr, value in user_data.items():
                setattr(user, attr, value)
            user.set_password(user_data['password'])  # Explicitly set the password
            user.save()

        # Create or update the user profile
        profile, created = UserProfile.objects.get_or_create(user=user, defaults=validated_data)
        if not created:
            for attr, value in validated_data.items():
                setattr(profile, attr, value)
            profile.save()
        
        return profile

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
        if user_data:
            user_serializer = UserSerializer(instance.user, data=user_data)
            if user_serializer.is_valid():
                user_serializer.save()
        return super().update(instance, validated_data)
