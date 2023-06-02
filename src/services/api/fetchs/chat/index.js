import axios from 'axios';

export const getListOfMessages = async (from, to) => {
  console.log(from, to);
  const { data } = await axios.get(
    `http://yvypora-backend.eastus.cloudapp.azure.com/no-relational/chat?receiverId=${to}&senderId=${from}`
  );

  const messagesList = data.data;
  const { name } = JSON.parse(localStorage.getItem('user-details'));

  const _messagesList = []

  messagesList.forEach(({ senderName, receiverId, content, createdAt }) => {
    const sender = senderName === name ? 'user' : senderName;
    console.log("sender", sender);
    _messagesList.push({
      content,
      sender,
    });
  });
  return _messagesList;
};
