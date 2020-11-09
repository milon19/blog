from django.urls import path
from posts.views import post_details

urlpatterns = [
    path('<int:post_id>', post_details, name='posts-details')
]
