from django.urls import path
from .views import SessionList, SessionDetail

urlpatterns = [
    path('sessions/', SessionList.as_view()),
    path('sessions/<int:pk>/', SessionDetail.as_view()),
]