import React, { useState } from 'react';
import './App.css';

function App() {
  const [message, setMessage] = useState('');

  return (
    <div className="chat-container">
      <div className="chat-header">Google Gemini</div>
      <div className="chat-box">
        {!message && <div className="placeholder">code by Uttkarsh</div>}
        {message && <div className="user-message">{message}</div>}
      </div>
      <input
        className="chat-input"
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
    </div>
  );
}

export default App;
