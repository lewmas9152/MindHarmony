from django.shortcuts import render
from .models import UserProfile
from django.http import HttpResponse
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.http import Http404
from .serializers import UserProfileSerializer
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate



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
            'user': UserProfileSerializer(user_profile, context=self.get_serializer_context()).data,
            'token': token.key
        }, status=status.HTTP_201_CREATED)
    

class LoginView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        username = request.data.get('username')
        password = request.data.get('password')
        user = authenticate(username=username, password=password)

        if user is not None:
            token, created = Token.objects.get_or_create(user=user)
            user_profile = UserProfile.objects.get(user=user)
            return Response({
                'token': token.key,
                'user': UserProfileSerializer(user_profile).data
            }, status=status.HTTP_200_OK)
        else:
            return Response({"error": "Invalid credentials"}, status=status.HTTP_400_BAD_REQUEST)
class ProfileAPIView(APIView):
    permission_classes = [IsAuthenticated]
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

    
