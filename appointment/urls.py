from django.urls import path
from . import views

urlpatterns = [
    path('<str:username>', views.spec_appointment),
    path('', views.post_appointment),
    path('profession/', views.all_professional),
    path('post/profession/', views.post_appointment),
    path('profession/<int:id>', views.spec_professional),
]
