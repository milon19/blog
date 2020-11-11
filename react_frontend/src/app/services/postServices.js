import axios from "axios";

const apiEndpoint = "https://jsonplaceholder.typicode.com/posts";

function postUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getPosts(page) {
  const postsUrl = `${apiEndpoint}?_page=${page}&_limit=4`;
  return axios.get(postsUrl);
}

export function getPost(postId) {
  return axios.get(postUrl(postId));
}

export function getComments(postId) {
  const commentsUrl = postUrl(postId) + "/comments";

  return axios.get(commentsUrl);
}
