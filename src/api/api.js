import axios from "axios";

export const commonsAPI = axios.create({
  baseURL: "http://localhost:3333",
});

export const cepAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});
