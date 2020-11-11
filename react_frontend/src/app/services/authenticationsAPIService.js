import axios from "axios";

const apiEndpoint = "http://127.0.0.1:8000/api/";

export function postLogin(values) {
  return axios.post(apiEndpoint + "token/", values);
}

export function verifyToken(token) {
  return axios.post(apiEndpoint + "token/verify/", token);
}

export function postRegistration(values) {
  return axios.post(apiEndpoint + "registration/", values);
}
