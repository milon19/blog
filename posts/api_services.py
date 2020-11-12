from urllib.parse import urlparse, urlencode, urlunparse

import requests


class APIServicesMixin:
    root_api = "http://jsonplaceholder.typicode.com/"

    def __make_url(self, api_endpoint, query):
        url_parts = list(urlparse(self.root_api))
        url_parts[2] = '/'.join([str(x) for x in api_endpoint])
        if query:
            url_parts[4] = urlencode(query)
        return urlunparse(url_parts)

    def get_data(self, api_endpoint, query=None):
        url = self.__make_url(api_endpoint, query)
        req = requests.get(url)
        data_json = req.json()
        return data_json
