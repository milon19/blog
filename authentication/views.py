from django.contrib.auth.views import LoginView, LogoutView
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.messages.views import SuccessMessageMixin
from authentication.forms import UserLoginForm, UserRegisterForm

from authentication.models import User


# LOGIN VIEW ENDPOINT
class UserLoginView(SuccessMessageMixin, LoginView):
    redirect_authenticated_user = True
    template_name = 'login.html'
    authentication_form = UserLoginForm


# LOGOUT VIEW ENDPOINT
class UserLogoutView(LogoutView):
    template_name = 'logout.html'


# REGISTRATION VIEW ENDPOINT
class UserRegisterView(CreateView):
    form_class = UserRegisterForm
    success_url = reverse_lazy('login')
    template_name = 'register.html'