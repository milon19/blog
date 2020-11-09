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
def post_details(request, post_id):
    print(post_id)
    return render(request, 'blog-post.html')