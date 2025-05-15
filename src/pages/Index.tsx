
import React from 'react';
import ChatInterface from '@/components/ChatInterface';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-white to-muted/50">
      <div className="w-full max-w-4xl px-4">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2 text-afro-burgundy">
            <span className="text-afro-gold">Afro</span> Digital Assistant
          </h1>
          <p className="text-muted-foreground">
            Your virtual helper for Afro Digital services
          </p>
        </header>
        
        <div className="mb-8">
          <ChatInterface />
        </div>
        
        <footer className="text-center text-sm text-muted-foreground mt-8">
          <p>© 2024 Afro Digital. Based in Ethiopia.</p>
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
