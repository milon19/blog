from django.urls import path
from authentication.views import UserLoginView, UserLogoutView, register

urlpatterns = [
    path('login/', UserLoginView.as_view(), name="login"),
    path('logout/', UserLogoutView.as_view(), name="logout"),
    path('register/', register),
]
