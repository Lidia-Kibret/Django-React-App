import axios from "axios";
import { ACCESS_TOKEN } from "./constants";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL, // make sure you have VITE_API_URL in .env
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`; // <-- fixed typo
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;