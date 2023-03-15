import axios from "axios";

export const commonsAPI = axios.create({
  baseURL: "https://deploy-commons-api.onrender.com",
});

export const cepAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const marketerAPI = axios.create({
  baseURL: "http://localhost:3335/",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("user-logged-token")}`,
    },
  },
});
