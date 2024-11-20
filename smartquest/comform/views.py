from django.shortcuts import render
from .models import comform
from .serializers import comformserializer
from rest_framework import viewsets

# Create your views here.
class comformview(viewsets.ModelViewSet):
    queryset= comform.objects.all()
    serializer_class = comformserializer