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
from rest_framework.decorators import authentication_classes, permission_classes,api_view
from rest_framework.authentication import SessionAuthentication, TokenAuthentication
from django.contrib.auth.models import User
import logging

logger = logging.getLogger(__name__)

@api_view(['GET'])
@authentication_classes([TokenAuthentication, SessionAuthentication])
@permission_classes([IsAuthenticated])
def UserDetails(request):
    user = request.user
    user_profile = UserProfile.objects.get(user=user)
    if user_profile is None:
        return Response({"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED)
    serializer = UserProfileSerializer(user_profile)
    return Response(serializer.data, status=status.HTTP_200_OK)
    

   

class UserDetailView(APIView):
    permission_classes = [IsAuthenticated]
    def get(self,request):
        user = request.user
        user_profile = UserProfile.objects.get(user=user)
        serializer = UserProfileSerializer(user_profile)
        return Response(serializer.data)
class RegisterView(generics.CreateAPIView):
    queryset = UserProfile.objects.all()
    serializer_class = UserProfileSerializer
    permission_classes = [AllowAny]

    def create(self,request,*args,**kwargs):
        logger.info(f"Registration attempt with data: {request.data}")
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

        try:
            user = User.objects.get(username=username)
            if not user.is_active:
                return Response({
                    "error": "User account is inactive"
                }, status = status.HTTP_400_BAD_REQUEST)
            if not user.check_password(password):
                return Response({
                    "error": "Invalid credentials"
                }, status = status.HTTP_400_BAD_REQUEST)
        except User.DoesNotExist:
            return Response({
                "error": "User does not exist"
            }, status = status.HTTP_400_BAD_REQUEST)
    
        
        token, created = Token.objects.get_or_create(user=user)
        user_profile = UserProfile.objects.get(user=user)
        return Response({
            'token': token.key,
            'user': UserProfileSerializer(user_profile).data
        }, status=status.HTTP_200_OK)
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
    

class logoutView(APIView):
    authentication_classes =  [TokenAuthentication, SessionAuthentication]
    permission_classes = [IsAuthenticated]

    def post(self,request):
        request.user.auth_token.delete()
        return Response(status=status.HTTP_200_OK)

    
