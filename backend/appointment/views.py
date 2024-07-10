from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.decorators import api_view
from .models import Appointment, Professional
from .serializers import ProfessionalSerializer, AppointmentSerializer


@api_view(["GET"])
def all_professional(request):
    professionals = Professional.objects.all()
    data = ProfessionalSerializer(professionals, many=True).data
    return Response(data, status=status.HTTP_200_OK)


@api_view(["GET"])
def spec_professional(request, id):
    try:
        professional = Professional.objects.get(id=id)
        data = ProfessionalSerializer(professional).data
        return Response(data, status=status.HTTP_200_OK)
    except Professional.DoesNotExist:
        return Response({'Error': f'Professional with id {id} does not exist'}, status=status.HTTP_404_NOT_FOUND)
    

@api_view(["POST"])
def post_professional(request):
    data = request.data
    
    serialized = ProfessionalSerializer(data=data, many=True)
    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'Message': 'Invalid JSON request', 'Data': f'{request.data}', 'Errors': serialized.errors}, status=status.HTTP_400_BAD_REQUEST)


@api_view(["GET"])
def spec_appointment(request, username):
    try:
        user = User.objects.get(username=username)
        appointments = Appointment.objects.filter(user=user)
        data = AppointmentSerializer(appointments, many=True).data
        return Response(data, status=status.HTTP_200_OK)
    except User.DoesNotExist:
        return Response({'Message': f'User {username} does not exist'}, status=status.HTTP_404_NOT_FOUND)
    except Appointment.DoesNotExist:
        return Response({'Message': f'User {username} has no appointments'}, status=status.HTTP_404_NOT_FOUND)


@api_view(["POST"])
def post_appointment(request):
    serialized = AppointmentSerializer(data=request.data)
    if serialized.is_valid():
        serialized.save()
        return Response(serialized.data, status=status.HTTP_201_CREATED)
    else:
        return Response({'Message': 'Invalid JSON request', 'Errors': serialized.errors}, status=status.HTTP_400_BAD_REQUEST)
