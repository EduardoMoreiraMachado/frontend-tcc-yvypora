import { io } from 'socket.io-client';
import { notify } from '../../utils/notify';
// Websocket
export const socket = io('http://yvypora-backend.eastus.cloudapp.azure.com', {
  query: {
    token: localStorage.getItem('user-logged-token'),
  },
});

socket.on('travel_accepted', async (data) => {
  localStorage.setItem('current_travel', JSON.stringify(data));
  await notify('success', 'Entregador Encontrado!');
});