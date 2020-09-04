from django.contrib import admin
from django.urls import include, path

urlpatterns = [
    path('torr/', include('torr.urls')),
 #   path('admin/', admin.site.urls),
]
