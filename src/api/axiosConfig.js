import axios from "axios";
import Cookies from "js-cookie";

const API = axios.create({
  baseURL: 'https://bra-fitting-advisor-back.onrender.com/api/',
  withCredentials: true, // Permite envío de cookies
});

API.interceptors.request.use(config => {
  const token = Cookies.get('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;