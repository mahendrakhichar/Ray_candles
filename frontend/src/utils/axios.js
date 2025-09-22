import axios from "axios";

const api = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}/api`, // backend URL
  withCredentials: true, // important if you use cookies/session
});

export default api;
