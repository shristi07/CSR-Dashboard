from django.urls import path

from . import views

urlpatterns = [
    path('email', views.geek.send_mail1, name='checkout')
]
