from rest_framework import serializers
from core.models import App


class AppPreviewSerializer(serializers.ModelSerializer):
   class Meta:
       model = App
       fields = [
           'id',
           'name',
           'created_at',
           'description',
           'platform',
       ]


class AppDetailSerializer(serializers.ModelSerializer):
   class Meta:
       model = App
       fields = [
           'name',
           'created_at',
           'description',
           'platform',
       ]