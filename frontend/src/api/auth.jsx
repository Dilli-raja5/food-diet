import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api", 
  withCredentials: true,
});

export const register = (userData) => API.post("/auth/register", userData);
export const login = (userData) => API.post("/auth/login", userData);
export const logout = () => API.post("/auth/logout");