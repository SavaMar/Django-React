from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from core.models import App
from .serializers import AppPreviewSerializer


@api_view(['GET', 'POST'])
def app_list(request):

    if request.method == 'GET':
        apps = App.objects.all()
        serializer = AppPreviewSerializer(apps, many=True)
        return Response(serializer.data)
    # new object
    elif request.method == 'POST':
        serializer = AppPreviewSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET', 'PUT', 'DELETE'])
def app_detail(request, pk):

    try:
        app = App.objects.get(pk=pk)
    except App.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = AppPreviewSerializer(app)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = AppPreviewSerializer(app, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        app.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
