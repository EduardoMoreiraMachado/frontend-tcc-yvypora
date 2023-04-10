import axios from "axios";
import { io } from "socket.io-client";

// API'S
export const cepAPI = axios.create({
  baseURL: "https://viacep.com.br/ws/",
});

export const commonsAPI = axios.create({
  baseURL: "http://localhost:3333/",
});

export const marketerAPI = axios.create({
  baseURL: "http://localhost:3335/",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("user-logged-token")}`,
    },
  },
});

export const costumerAPI = axios.create({
  baseURL: "http://localhost:3334/api/costumer/",
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem("user-logged-token")}`,
    },
  },
});

// Websocket
export const socket = io("http://localhost:3337", {
  query: {
    token: localStorage.getItem("user-logged-token"),
  },
});

