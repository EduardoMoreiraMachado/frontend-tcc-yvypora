import axios from 'axios';

export const getListOfMessages = async (from, to) => {
  const { data } = await axios.get(
    `http://yvypora-backend.eastus.cloudapp.azure.com/no-relational/chat?receiverId=${to}&senderId=${from}`
  );

  const messagesList = data.data;
  const { name } = JSON.parse(localStorage.getItem("user-details"))

  messagesList.map(({ senderName, receiverId, content, createdAt}) => {

   return {
      content, 
      sender: senderName === name ? 'user' : senderName
    }
  });

  return messagesList
};


