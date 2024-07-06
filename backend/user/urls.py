from django.urls import path,include
from .views import ProfileAPIView,RegisterView,LoginView,UserDetailView


urlpatterns = [
    path('profile/<int:pk>', ProfileAPIView.as_view(), name='profile'),
    path('register/', RegisterView.as_view(), name='register'),
    path('login/', LoginView.as_view(), name='login'),
    path('session/', include('sessionsApp.urls')),
    path('userdetail/', UserDetailView.as_view(), name='user'),
]
