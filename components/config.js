/* eslint-disable @typescript-eslint/no-unused-vars */
// in config.js
import { createChatBotMessage } from 'react-chatbot-kit';
import ChatbotWidget from './ChatbotWidget';
import { createClientMessage } from 'react-chatbot-kit';

const message = createClientMessage('Hello world!');

const botName = 'Saleh';

const config = {
  initialMessages: [createChatBotMessage(`Salut! Je suis ${botName}`), createChatBotMessage(<div className=''>
    <p className=' font-regular text-black'>
    Hello !
    <br/>
    <br/>

Je m&apos;appelle Saleh, je suis un jeune Expert-Comptable et je suis là pour vous aider.
    </p>
  </div>),
  createChatBotMessage(<div className=''>
    <h1 className='text-black'>Que <strong>recherchez</strong> vous ?</h1>
    <div className='border-2 border-green-700 p-3 text-green-700 rounded-2xl mb-2 mt-4'>
       <ul>
        <li>Je recherche un Expert-Comptable ou Commissaire aux Comptes</li>
       </ul>
    </div>
    <div className=' border-2 border-green-700 p-3 text-green-700 rounded-2xl'>
       <ul>
        <li>Je souhaite en savoir plus sur vos services
        </li>
       </ul>
    </div>

    
  </div>),
  ],
  customComponents : {
    header: () => <div className=' bg-slate-500 p-4 font-semibold text-xl '>Oki expertise</div>,

  },
  widgets:[
    {
      widgetName : "Image",
      widgetFunc : (props) => {<ChatbotWidget {...props}/>}
    }
  ],
  botName: botName,
  customStyles: {

    botMessageBox: {
      backgroundColor: '#a8a4a43f',
      border : "12px",
      borderRadius : "140px"
    },
    chatButton: {
      backgroundColor: '#5ccc9d',
    },
  },
};

export default config;