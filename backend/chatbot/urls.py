from django.urls import path
from .views import gpt_response


urlpatterns = [
    path('', gpt_response)
]
