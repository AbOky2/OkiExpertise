// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';

const botName = 'Saleh';

const config = {
  initialMessages: [createChatBotMessage(`Salut! Je suis ${botName}`)],
  botName: botName,
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;