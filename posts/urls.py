from django.urls import path
from posts.views import PostDetailView

urlpatterns = [
    path('<int:post_id>', PostDetailView.as_view(), name='posts-details')
]
