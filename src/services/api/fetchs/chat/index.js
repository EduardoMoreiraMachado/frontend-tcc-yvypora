import axios from 'axios';

export const getListOfMessages = async (from, to) => {
  const { data } = await axios.get(
    `http://yvypora-backend.eastus.cloudapp.azure.com/no-relational/chat?receiverId=${to}&senderId=${from}`
  );

  const messagesList = data.data;

  messagesList.map((message) => {
   return {
      from: message.senderId,
      to: message.receiverId,
    }
  });
};
