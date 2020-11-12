from django.contrib import messages
from django.contrib.auth.views import LoginView, LogoutView
from django.urls import reverse_lazy
from django.views.generic import CreateView
from django.contrib.messages.views import SuccessMessageMixin
from authentication.forms import UserLoginForm, UserRegisterForm


# LOGIN VIEW ENDPOINT
class UserLoginView(SuccessMessageMixin, LoginView):
    redirect_authenticated_user = True
    template_name = 'login.html'
    authentication_form = UserLoginForm
    success_message = "You have successfully logged in."


# LOGOUT VIEW ENDPOINT
class UserLogoutView(LogoutView):
    next_page = "/"

    def dispatch(self, request, *args, **kwargs):
        if request.user.is_authenticated:
            messages.info(request, "You have successfully logged out.")
        return super().dispatch(request, *args, **kwargs)


# REGISTRATION VIEW ENDPOINT
class UserRegisterView(SuccessMessageMixin, CreateView):
    form_class = UserRegisterForm
    success_url = reverse_lazy('login')
    template_name = 'register.html'
    success_message = "Registration complete. Please login."
