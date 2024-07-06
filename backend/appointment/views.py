from rest_framework.response import Response
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

@api_view(["GET"])
def spec_appointment(request, username):
    username = username
    user = User.objects.filter(username=username)
    data = {}
    if user:
        data = Pro
