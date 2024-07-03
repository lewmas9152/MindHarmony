from django.shortcuts import render
from .views import UserProfile
from django.http import HttpResponse

def profile(request):
    profile = UserProfile.objects.get(user=request.user)
    return HttpResponse(profile.bio)
# Create your views here.
