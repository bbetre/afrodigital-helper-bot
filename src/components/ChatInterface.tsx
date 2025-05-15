
import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import ChatMessage from './ChatMessage';
import TypingIndicator from './TypingIndicator';
import { generateResponse } from '@/services/chatService';
import { ArrowUp, Globe, Twitter, Instagram, Linkedin } from 'lucide-react';

interface Message {
  content: string;
  isBot: boolean;
}

const ChatInterface: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { content: "Hello! I'm Afro Assistant, here to help you with information about Afro Digital services. Ask me about our team, services, or how we can help your business grow!", isBot: true }
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
  
  const handleQuickQuestion = (question: string) => {
    setInput(question);
    setTimeout(() => {
      handleSend();
    }, 100);
  };

  return (
    <Card className="w-full max-w-3xl mx-auto h-[600px] flex flex-col shadow-lg border-afro-burgundy/20">
      <CardHeader className="bg-afro-burgundy text-white rounded-t-lg p-4">
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Globe size={20} className="text-afro-gold" />
            <span><span className="text-afro-gold">Afro</span> Assistant</span>
          </div>
          <div className="flex gap-2">
            <a href="https://twitter.com/afrodigitalet" target="_blank" rel="noopener noreferrer" className="text-white hover:text-afro-gold transition-colors">
              <Twitter size={16} />
            </a>
            <a href="https://www.instagram.com/afrodigital.et/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-afro-gold transition-colors">
              <Instagram size={16} />
            </a>
            <a href="https://www.linkedin.com/company/afro-digitalet/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-afro-gold transition-colors">
              <Linkedin size={16} />
            </a>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="flex-1 overflow-y-auto p-4 bg-muted/10">
        <div className="space-y-4 pb-2">
          {messages.map((msg, index) => (
            <ChatMessage key={index} content={msg.content} isBot={msg.isBot} />
          ))}
          {isTyping && <TypingIndicator />}
          <div ref={messagesEndRef} />
        </div>
      </CardContent>
      
      <div className="px-4 py-2 bg-muted/5 border-t border-border/50">
        <div className="flex flex-wrap gap-2 text-xs mb-2">
          <Button 
            variant="outline" 
            size="sm" 
            className="h-7 rounded-full text-xs bg-muted/20 hover:bg-afro-burgundy hover:text-white"
            onClick={() => handleQuickQuestion("Tell me about your services")}
          >
            Our services
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-7 rounded-full text-xs bg-muted/20 hover:bg-afro-burgundy hover:text-white"
            onClick={() => handleQuickQuestion("Who is the founder?")}
          >
            Our team
          </Button>
          <Button 
            variant="outline" 
            size="sm" 
            className="h-7 rounded-full text-xs bg-muted/20 hover:bg-afro-burgundy hover:text-white"
            onClick={() => handleQuickQuestion("How to contact you?")}
          >
            Contact
          </Button>
        </div>
      </div>
      
      <CardFooter className="border-t p-3">
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
