
import React from 'react';

const TypingIndicator: React.FC = () => {
  return (
    <div className="chat-message bot-message">
      <div className="typing-indicator">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
