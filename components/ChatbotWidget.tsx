import React from 'react'
import { useState,useEffect } from 'react';

function ChatbotWidget() {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
      fetch('https://dog.ceo/api/breeds/image/random')
        .then((res) => res.json())
        .then((data) => {
          setImageUrl(data.message);
        });
    }, []);
  
    return (
      <div>
        <img src={imageUrl} alt='a dog' />
      </div>
    );
}

export default ChatbotWidget