
import React from 'react';
import ChatInterface from '@/components/ChatInterface';
import { Twitter, Instagram, Linkedin } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-white to-muted/30">
      <div className="w-full max-w-6xl px-4 mx-auto py-8">
        <header className="mb-8 text-center">
          <div className="flex items-center justify-center mb-3">
            <div className="bg-afro-burgundy h-12 w-12 rounded-full flex items-center justify-center text-white text-xl font-bold mr-3">
              AD
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-2 text-afro-burgundy">
            <span className="text-afro-gold">Afro</span> Digital Assistant
          </h1>
          <p className="text-muted-foreground max-w-md mx-auto">
            Your virtual helper for information about web development, mobile apps, 
            UI/UX design, and digital marketing services in Ethiopia and beyond.
          </p>
        </header>
        
        <div className="mb-8">
          <ChatInterface />
        </div>
        
        <footer className="text-center text-sm text-muted-foreground mt-12 border-t border-muted pt-6">
          <div className="flex justify-center space-x-4 mb-4">
            <a href="https://twitter.com/afrodigitalet" target="_blank" rel="noopener noreferrer" className="text-afro-burgundy hover:text-afro-gold transition-colors">
              <Twitter size={20} />
            </a>
            <a href="https://www.instagram.com/afrodigital.et/" target="_blank" rel="noopener noreferrer" className="text-afro-burgundy hover:text-afro-gold transition-colors">
              <Instagram size={20} />
            </a>
            <a href="https://www.linkedin.com/company/afro-digitalet/" target="_blank" rel="noopener noreferrer" className="text-afro-burgundy hover:text-afro-gold transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
          <p>© 2024 Afro Digital. Founded in Ethiopia.</p>
          <p className="mt-1">
            <a href="https://www.afrodigital.et/" target="_blank" rel="noopener noreferrer" className="text-afro-burgundy hover:text-afro-gold transition-colors">
              Visit our website
            </a> | 
            <a href="mailto:info@afrodigital.et" className="text-afro-burgundy hover:text-afro-gold transition-colors ml-2">
              Contact us
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
