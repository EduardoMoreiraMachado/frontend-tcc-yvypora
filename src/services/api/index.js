import axios from 'axios';
import { io } from 'socket.io-client';
import { notify } from '../../utils/notify';

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

// Websocket
export const socket = io('http://costumer-api.westus3.cloudapp.azure.com', {
  query: {
    token: localStorage.getItem('user-logged-token'),
  },
});

socket.on('travel_accepted', async (data) => {
  localStorage.setItem('current_travel', JSON.stringify(data));
  await notify('success', 'Entregador Encontrado!');
});
