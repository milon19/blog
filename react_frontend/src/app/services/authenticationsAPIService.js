import axios from "axios";

const apiEndpoint = "https://grayspaceit-blog.herokuapp.com/api/";

export function postLogin(values) {
  return axios.post(apiEndpoint + "token/", values);
}

export function verifyToken(token) {
  return axios.post(apiEndpoint + "token/verify/", token);
}

export function postRegistration(values) {
  return axios.post(apiEndpoint + "registration/", values);
}
