
import React from 'react';
import { cn } from "@/lib/utils";

export interface ChatMessageProps {
  content: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isBot }) => {
  return (
    <div 
      className={cn(
        "chat-message",
        isBot ? "bot-message" : "user-message"
      )}
    >
      {content}
    </div>
  );
};

export default ChatMessage;
