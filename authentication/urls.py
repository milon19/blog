from django.urls import path
from authentication.views import UserLoginView, register

urlpatterns = [
    path('login/', UserLoginView.as_view(), name="login"),
    path('register/', register),
]
