from django.urls import path
from .views import ProfileAPIView,RegisterView
from rest_framework.authtoken.views import obtain_auth_token

urlpatterns = [
    path('profile/<int:pk>', ProfileAPIView.as_view(), name='profile'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', obtain_auth_token, name='login'),
]
