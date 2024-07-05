from rest_framework import serializers
from .models import Professional, Appointment


class ProfessionalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Professional
        fields = [
            'user',
            'specialization',
            'bio',
            'profile',
            'created_at',
        ]


class AppointmentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Appointment
        fields = [
            'user',
            'professional',
            'created_at',
            'appointment_date',
            'status'
        ]