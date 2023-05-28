import axios from 'axios';

const BASE_API_URL = 'http://yvypora-backend.eastus.cloudapp.azure.com/api';
const LOCAL_API_URL = "http://localhost:8080/api"

// API'S
export const cepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export const commonsAPI = axios.create({
  baseURL: `${BASE_API_URL}/commons/`,
});

export const marketerAPI = axios.create({
  baseURL: `${BASE_API_URL}/fair/`,
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem('user-logged-token')}`,
    },
  },
});

export const costumerAPI = axios.create({
  baseURL: `${BASE_API_URL}/costumer/`,
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem('user-logged-token')}`,
    },
  },
});
