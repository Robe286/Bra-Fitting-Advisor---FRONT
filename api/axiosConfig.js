import axios from "axios";
import Cookies from "js.cookie";

const API = axios.create({
  baseURL: 'http://localhost:3001/api/sizes',
  withCredentials: true,
});

API.interceptors.request.use(cofig => {
  const token = Cookies.get('token');
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default API;