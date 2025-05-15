
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import { generateResponse } from '@/services/chatService';
import { ArrowUp } from 'lucide-react';

interface Message {
  content: string;
  isBot: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm Afro Assistant, here to help you with information about Afro Digital. How can I assist you today?", isBot: true }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { content: input, isBot: false }]);
    setInput('');
    
    // Show typing indicator
    setIsTyping(true);
    
    // Simulate processing time (0.5-1.5 seconds)
    setTimeout(() => {
      const response = generateResponse(input);
      setIsTyping(false);
      setMessages(prev => [...prev, { content: response.message, isBot: true }]);
    }, Math.random() * 1000 + 500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  return (
    <Card className="w-full max-w-md mx-auto h-[600px] flex flex-col">
      <CardHeader className="bg-afro-burgundy text-white rounded-t-lg">
        <CardTitle className="flex items-center justify-center">
          <span className="text-afro-gold">Afro</span> Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 overflow-y-auto p-4 bg-muted/20">
        <div className="space-y-4">
          {messages.map((msg, index) => (
            <ChatMessage key={index} content={msg.content} isBot={msg.isBot} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      <CardFooter className="border-t p-4">
        <div className="flex w-full gap-2">
          <Input
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            className="flex-1"
          />
          <Button 
            onClick={handleSend} 
            size="icon"
            disabled={!input.trim()}
            className="bg-afro-burgundy hover:bg-afro-burgundy/80"
          >
            <ArrowUp className="h-4 w-4" />
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ChatInterface;
