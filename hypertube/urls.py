from django.contrib import admin
from django.urls import include, path


urlpatterns = [
    path('stream', include('torr.urls')),
    path('date', include('torr.urls')),
 #   path('admin/', admin.site.urls),
]
