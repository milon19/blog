from django.contrib.auth.views import LoginView, LogoutView
from django.contrib.messages.views import SuccessMessageMixin
from django.http import Http404
from django.shortcuts import render
from authentication.forms import UserLoginForm


# LOGIN VIEW ENDPOINT
class UserLoginView(SuccessMessageMixin, LoginView):
    redirect_authenticated_user = True
    template_name = 'login.html'
    authentication_form = UserLoginForm


# LOGOUT VIEW ENDPOINT
class UserLogoutView(LogoutView):
    template_name = 'logout.html'


def register(request):
    return render(request, 'register.html')