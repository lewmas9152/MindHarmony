from django.urls import path
from . import views

urlpatterns = [
    path('/<string: username>', views.appointment),
    path('profession/', views.all_professional),
    path('profession/<int:id>', views.spec_professional),
]
