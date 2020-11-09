import requests
from django.shortcuts import render
from django.views.generic import TemplateView


# POSTS VIEW ENDPOINT
class PostListView(TemplateView):
    def get(self, request, *args, **kwargs):
        page = request.GET.get('page', 1)
        url = 'http://jsonplaceholder.typicode.com/posts?_page={}&_limit=4'.format(page)
        req = requests.get(url)
        data_json = req.json()

        context = {
            "posts": data_json
        }
        return render(request, 'blog-listing.html', context)


# POST DETAILS VIEW ENDPOINT
class PostDetailView(TemplateView):
    def get(self, request, *args, **kwargs):
        post_id = kwargs['post_id']
        post_url = 'http://jsonplaceholder.typicode.com/posts/{}'.format(post_id)
        comment_url = 'http://jsonplaceholder.typicode.com/posts/{}/comments'.format(post_id)
        req_post = requests.get(post_url)
        req_comment = requests.get(comment_url)

        post = req_post.json()
        comments = req_comment.json()

        context = {
            "post": post,
            "comments": comments,
        }
        return render(request, 'blog-post.html', context)
