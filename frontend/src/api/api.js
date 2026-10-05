import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000/api",
  withCredentials: true,
});

// Authentication APIs
export const signupUser = (userData) => {
  return api.post("/auth/signup", userData);
};

export const loginUser = (userData) => {
  return api.post("/auth/login", userData);
};

export const logoutUser = () => {
  return api.post("/auth/logout");
};

export default api;