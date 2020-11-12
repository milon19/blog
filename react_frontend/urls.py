from django.urls import re_path, path
from react_frontend.views import index

urlpatterns = [
    path("", index, name='react'),

]
