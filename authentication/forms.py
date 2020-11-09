from django.contrib.auth import get_user_model
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

from django.forms.widgets import PasswordInput, TextInput
from django import forms


class UserLoginForm(AuthenticationForm):
    username = forms.EmailField(widget=TextInput(attrs={
        'class': 'form-control',
        'id': "email",
    }))
    password = forms.CharField(widget=PasswordInput(attrs={'class': 'form-control'}))

    class Meta:
        Model = get_user_model()

