from rest_framework import serializers
from django.contrib.auth.models import User
from .models import UserProfile
from rest_framework.authtoken.models import Token
from django.db import transaction, IntegrityError
import logging

logger = logging.getLogger(__name__)

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'password']
        extra_kwargs = {'password': {'write_only': True, 'required': True}}

    def create(self, validated_data):
        try:
            with transaction.atomic():
                user = User.objects.create_user(
                    username=validated_data['username'],
                    email=validated_data['email']
                )
                user.set_password(validated_data['password'])
                user.save()
                Token.objects.get_or_create(user=user)  # Generate the token here
                return user
        except IntegrityError as e:
            logger.error(f"Integrity error while creating user: {e}")
            raise serializers.ValidationError({'error': 'A user with this username or email already exists.'})

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
        
        # Create the user
        user_serializer = UserSerializer(data=user_data)
        user_serializer.is_valid(raise_exception=True)
        user = user_serializer.save()

        try:
        # Create the user profile
            with transaction.atomic():
                user_profile = UserProfile.objects.create(user=user, **validated_data)
        except IntegrityError as e:
            logger.error(f"Integrity error while creating user profile: {e}")
            raise serializers.ValidationError({'error': 'User profile already exists'})
        
        return user_profile
        return user_profile

    def update(self, instance, validated_data):
        user_data = validated_data.pop('user', None)
        if user_data:
            user_serializer = UserSerializer(instance.user, data=user_data, partial=True)
            user_serializer.is_valid(raise_exception=True)
            user_serializer.save()

        for attr, value in validated_data.items():
            setattr(instance, attr, value)
        instance.save()

        return instance
