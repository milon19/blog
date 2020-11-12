from rest_framework.generics import CreateAPIView

from api.serializers import UserRegistrationSerializer


class RegistrationAPIView(CreateAPIView):
    """Create a new user in the system"""
    serializer_class = UserRegistrationSerializer
