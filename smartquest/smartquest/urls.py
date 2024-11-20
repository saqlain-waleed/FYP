from django.contrib import admin
from django.urls import path,include
from django.conf import settings
from django.conf.urls.static import static



from comform.views import comformview
from rest_framework import routers

route = routers.DefaultRouter()
route.register("",comformview, basename='comformview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('comform/',include(route.urls))
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)
