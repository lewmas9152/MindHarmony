from django.shortcuts import render
from .serialixers import SessionsSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .models import Sessions
from django.http import Http404
from rest_framework.permissions import AllowAny, IsAuthenticated
# Create your views here.

class SessionList(APIView):
    permission_classes = [IsAuthenticated]
    def get(self, request):
        sessions = Sessions.objects.all()
        serializer = SessionsSerializer(sessions, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = SessionsSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
class SessionDetail(APIView):
    permission_classes = [IsAuthenticated]
    def get_object(self, pk):
        try:
            return Sessions.objects.get(pk=pk)
        except Sessions.DoesNotExist:
            raise Http404

    def get(self, request, pk):
        session = self.get_object(pk)
        serializer = SessionsSerializer(session)
        return Response(serializer.data)

    def put(self, request, pk):
        session = self.get_object(pk)
        serializer = SessionsSerializer(session, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    def delete(self, request, pk):
        session = self.get_object(pk)
        session.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
    

