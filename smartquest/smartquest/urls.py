from django.contrib import admin
from django.urls import path, include ,re_path
from django.conf import settings
from django.conf.urls.static import static
from django.views.generic import TemplateView 



from comform.views import comformview
from rest_framework import routers

route = routers.DefaultRouter()
route.register("",comformview, basename='comformview')

urlpatterns = [
    path('admin/', admin.site.urls),
    path('comform/',include(route.urls)),
    path('auth/',include('djoser.urls')),
    path('auth/',include('djoser.urls.jwt')),
]+static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)

urlpatterns += [re_path('^.*', TemplateView.as_view(template_name='index.html'))]
