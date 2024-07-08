from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from .models import Appointment, Professional
from .serializers import ProfessionalSerializer, AppointmentSerializer


@api_view(["GET"])
def all_professional(request):
    profesionals = Professional.objects.all()
    data = {}
    if profesionals:
        data = ProfessionalSerializer(profesionals, many=True).data
    return Response(data)


@api_view(["GET"])
def spec_professional(request, id):
    prof_id = id
    professional = Professional.objects.filter(prof_id=prof_id)
    data = {}
    if professional:
        data = ProfessionalSerializer(professional).data
        return Response(data)
    else:
        return Response({'Error': f'Professional with id {prof_id} does not exist'})
    
@api_view(["POST"])
def post_professional(request):
    print(request.data)
    professionals = request.data
    print(f'Professionals: {professionals}')
    
    serialized = ProfessionalSerializer(data=professionals)
    print(f'Serialized: {serialized}')
    
    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data, status=status.HTTP_201_CREATED)
    else:
        print(f'Errors: {serialized.errors}')
        return Response({'Message': 'Invalid JSON request', 'Errors': serialized.errors}, status=status.HTTP_400_BAD_REQUEST)

@api_view(["GET"])
def spec_appointment(request, username):
    username = username
    user = User.objects.filter(username=username)
    data = {}
    if user:
        appointment = Appointment.objects.filter(user=user)
        if appointment:
            data = AppointmentSerializer(appointment).data
            return Response(data)
        else:
            return Response({'Message': f'User {username} has no appointments'})
    else:
        return Response({'Message': f'User {username} does not exist'})

@api_view(["POST"])
def post_appointment(request):
    appointment = request.data
    serialized = AppointmentSerializer(data=appointment)

    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data)
    else:
        return Response({'Message': 'Invalid json request'})
