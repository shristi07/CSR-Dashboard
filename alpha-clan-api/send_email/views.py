from email import message
from django.shortcuts import render
from django.core.mail import send_mail
from django.http.response import HttpResponse
from django.shortcuts import render
from django.views import View
from rest_framework import views, status
from rest_framework.response import Response
from geek.settings import EMAIL_HOST_USER
from django.core.mail import EmailMultiAlternatives, EmailMessage
from django.template import loader


class geek(View):
    def send_mail1(self):
            email='shristi.katiyar@tothenew.com'
            TEMPLATE_NAME='/home/ankit/Downloads/Geek/geek/send_email/email.html'
            config = {
            "template": 'email.html',
            "subject": 'New Request on Pahal Dashboard',
            "body": "Sample body",
            "sender": EMAIL_HOST_USER,
            "receiver": [email,]
            }
            context={}
            html_msg = loader.render_to_string(config.get("template"), context)
                
            msg = EmailMultiAlternatives(config.get('subject'),
                                        config.get('body', ""),
                                        config.get('sender'),
                                        config.get('receiver'),
                                        config.get('Bcc')
                                        )
            msg.attach_alternative(html_msg, "text/html")
            msg.send(fail_silently=True)
            return HttpResponse('hello world')