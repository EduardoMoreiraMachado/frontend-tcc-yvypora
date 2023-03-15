import axios from "axios";

export const commonsAPI = axios.create({
  baseURL: "https://deploy-commons-api.onrender.com",
});

export const cepAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const marketerAPI = axios.create({
  baseURL: "https://marketer-api.onrender.com",
  headers: {
    Authorization: `Bearer ${localStorage.getItem("user-logged-token")}`,
  },
});
