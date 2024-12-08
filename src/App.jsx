/* eslint-disable react/prop-types */
import "./App.css";
import { useState, useCallback } from 'react';

function ChatApp() {
  const [messages, setMessages] = useState([]);

  const sendMessage = useCallback((message) => {
    setMessages(prevMessages => [...prevMessages, message]);
  }, []);

  return (
    <>
      <MessageInput onSend={sendMessage} />
      <ul>
        {messages.map((msg, index) => (
          <li key={index}>{msg}</li>
        ))}
      </ul>
    </>
  );
}

function MessageInput({ onSend }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    onSend(text);
    setText('');
  };

  return (
    <>
      <input value={text} onChange={(e) => setText(e.target.value)} />
      <button onClick={handleSend}>Send</button>
    </>
  );
}

export default ChatApp;
