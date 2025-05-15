
import React from 'react';
import { Avatar } from "@/components/ui/avatar";
import { Globe } from "lucide-react";

const TypingIndicator: React.FC = () => {
  return (
    <div className="flex items-start gap-3 animate-fade-in">
      <Avatar className="flex items-center justify-center h-8 w-8 rounded-full bg-afro-burgundy text-white">
        <Globe size={16} />
      </Avatar>
      
      <div className="bg-primary text-primary-foreground rounded-lg p-3">
        <div className="typing-indicator">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default TypingIndicator;
