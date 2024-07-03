from django.shortcuts import render
from .models import UserProfile
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .serializers import UserProfileSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny
from rest_framework.authtoken.models import Token



class RegisterView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny]

    def create(self,request,*args,**kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user_profile = serializer.save()
        token,created = Token.objects.get_or_create(user=user_profile.user)
        return Response({
            'user': UserProfileSerializer(user, context=self.get_serializer_context()).data,
            'token': token.key
        }, status=status.HTTP_201_CREATED)
class ProfileAPIView(APIView):
    def get_object(self,pk):
        try:
            return UserProfile.objects.get(pk=pk)
        except UserProfile.DoesNotExist:
            raise Http404
    
    
    def get(self, request,pk):
        userprofile = self.get_object(pk)
        if isinstance(userprofile, HttpResponse):
            return userprofile
        serializer = UserProfileSerializer(userprofile)
        return Response(serializer.data)

    def put(self,request,pk):
        userprofile = self.get_object(pk)
        if isinstance(userprofile, HttpResponse):
            return userprofile
        serializer = UserProfileSerializer(userprofile, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    
