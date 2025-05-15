
import React from 'react';
import { cn } from "@/lib/utils";
import { Avatar } from "@/components/ui/avatar";
import { Globe, User } from "lucide-react";

export interface ChatMessageProps {
  content: string;
  isBot: boolean;
}

const ChatMessage: React.FC<ChatMessageProps> = ({ content, isBot }) => {
  return (
    <div className={cn(
      "flex items-start gap-3 animate-fade-in",
      isBot ? "" : "flex-row-reverse"
    )}>
      <Avatar className={cn(
        "flex items-center justify-center h-8 w-8 rounded-full",
        isBot ? "bg-afro-burgundy text-white" : "bg-muted text-foreground"
      )}>
        {isBot ? <Globe size={16} /> : <User size={16} />}
      </Avatar>
      
      <div className={cn(
        "rounded-lg p-3 max-w-[80%]",
        isBot 
          ? "bg-primary text-primary-foreground" 
          : "bg-muted text-foreground ml-auto"
      )}>
        {content}
      </div>
    </div>
  );
};

export default ChatMessage;
