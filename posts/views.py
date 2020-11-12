import requests
from django.shortcuts import render
from django.views.generic import TemplateView

from posts.api_services import APIServicesMixin


# POSTS VIEW ENDPOINT
class PostListView(TemplateView, APIServicesMixin):
    def get(self, request, *args, **kwargs):
        page = request.GET.get('page', 1)
        data = self.get_data(['posts'], query={'_page': page, '_limit': 4})
        context = {
            "posts": data
        }
        return render(request, 'blog-listing.html', context)


# POST DETAILS VIEW ENDPOINT
class PostDetailView(TemplateView, APIServicesMixin):
    def get(self, request, *args, **kwargs):
        post_id = kwargs['post_id']

        post_data = self.get_data(["posts", post_id])
        comments_data = self.get_data(['posts', post_id, 'comments'])

        context = {
            "post": post_data,
            "comments": comments_data,
        }
        return render(request, 'blog-post.html', context)
