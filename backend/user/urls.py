from django.urls import path,include
from .views import ProfileAPIView,RegisterView,LoginView,UserDetails


urlpatterns = [
    path('profile/<int:pk>', ProfileAPIView.as_view(), name='profile'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('session/', include('sessionsApp.urls')),
    path('user-details/', UserDetails, name='user'),
]