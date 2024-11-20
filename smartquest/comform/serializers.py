from rest_framework import serializers
from .models import comform

class comformserializer(serializers.ModelSerializer):
    class Meta:
        model=comform
        fields='__all__'