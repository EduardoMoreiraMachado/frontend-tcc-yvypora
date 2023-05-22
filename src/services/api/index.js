import axios from 'axios';

// API'S
export const cepAPI = axios.create({
  baseURL: 'https://viacep.com.br/ws/',
});

export const commonsAPI = axios.create({
  baseURL: 'http://costumer-api.westus3.cloudapp.azure.com/api/commons/',
});

export const marketerAPI = axios.create({
  baseURL: 'http://costumer-api.westus3.cloudapp.azure.com/api/fair',
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem('user-logged-token')}`,
    },
  },
});

export const costumerAPI = axios.create({
  baseURL: 'http://costumer-api.westus3.cloudapp.azure.com/api/costumer/',
  headers: {
    common: {
      Authorization: `Bearer ${localStorage.getItem('user-logged-token')}`,
    },
  },
});
