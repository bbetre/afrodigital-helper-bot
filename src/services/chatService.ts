
interface ChatResponse {
  message: string;
}

const responses = {
  greeting: [
    "Hello! How can I help you today?",
    "Selam! How can I assist you with Afro Digital's services?",
    "Welcome! How can I support your digital needs today?"
  ],
  
  services: {
    web: "We offer professional web design with mobile-responsive layouts. Visit our website for case studies.",
    ai: "We develop AI solutions tailored for African businesses. Our tools help solve local challenges effectively.",
    marketing: "Our digital marketing services boost your online presence with strategies optimized for Ethiopian audiences.",
    software: "We build custom software solutions focused on Ethiopian/African market needs and infrastructure realities."
  },
  
  about: [
    "Afro Digital was founded in 2020 in Ethiopia. We've served over 50 clients with a 95% satisfaction rate.",
    "We're an Ethiopian digital agency focusing on culturally-tailored tech solutions since 2020."
  ],

  contact: "You can reach us at info@afrodigital.et or by phone. Would you like our contact details?",
  
  contactDetails: "Email: info@afrodigital.et | Our team typically works weekdays, but you can email for urgent inquiries.",
  
  fallback: "I recommend contacting info@afrodigital.et for detailed assistance with your question.",
  
  offTopic: "That's beyond our scope—we specialize in digital solutions for African businesses. Is there anything about our services I can help with?"
}

export const generateResponse = (message: string): ChatResponse => {
  const lowerMessage = message.toLowerCase();
  
  // Check for greetings
  if (
    lowerMessage.includes('hi') || 
    lowerMessage.includes('hello') || 
    lowerMessage.includes('hey') ||
    lowerMessage.includes('selam')
  ) {
    return { message: responses.greeting[Math.floor(Math.random() * responses.greeting.length)] };
  }
  
  // Check for services inquiries
  if (
    lowerMessage.includes('web') || 
    lowerMessage.includes('website') || 
    lowerMessage.includes('site')
  ) {
    return { message: responses.services.web };
  }
  
  if (
    lowerMessage.includes('ai') || 
    lowerMessage.includes('artificial') || 
    lowerMessage.includes('intelligence') ||
    lowerMessage.includes('machine learning')
  ) {
    return { message: responses.services.ai };
  }
  
  if (
    lowerMessage.includes('marketing') || 
    lowerMessage.includes('advertis') || 
    lowerMessage.includes('promotion') ||
    lowerMessage.includes('seo')
  ) {
    return { message: responses.services.marketing };
  }
  
  if (
    lowerMessage.includes('software') || 
    lowerMessage.includes('app') || 
    lowerMessage.includes('application') ||
    lowerMessage.includes('development') ||
    lowerMessage.includes('mobile')
  ) {
    return { message: responses.services.software };
  }
  
  // Check for about inquiries
  if (
    lowerMessage.includes('about') || 
    lowerMessage.includes('company') || 
    lowerMessage.includes('who are you') ||
    lowerMessage.includes('afro digital')
  ) {
    return { message: responses.about[Math.floor(Math.random() * responses.about.length)] };
  }
  
  // Check for contact inquiries
  if (
    lowerMessage.includes('contact') || 
    lowerMessage.includes('email') || 
    lowerMessage.includes('phone') ||
    lowerMessage.includes('reach') ||
    lowerMessage.includes('call')
  ) {
    return { message: responses.contactDetails };
  }
  
  // Check for hours/availability
  if (
    lowerMessage.includes('open') || 
    lowerMessage.includes('hours') || 
    lowerMessage.includes('weekend') ||
    lowerMessage.includes('available')
  ) {
    return { message: "Our team typically works weekdays, but you can email info@afrodigital.et for urgent inquiries. አመሰግናለሁ (thank you)!" };
  }
  
  // Check for clearly off-topic queries
  if (
    lowerMessage.includes('joke') || 
    lowerMessage.includes('game') || 
    lowerMessage.includes('weather') ||
    lowerMessage.includes('news') ||
    lowerMessage.includes('restaurant')
  ) {
    return { message: responses.offTopic };
  }
  
  // Check if asking about services generally
  if (
    lowerMessage.includes('service') || 
    lowerMessage.includes('offer') || 
    lowerMessage.includes('provide') ||
    lowerMessage.includes('do you') ||
    lowerMessage.includes('what can')
  ) {
    return { message: "We offer web design, AI solutions, digital marketing, and custom software development focused on Ethiopian/African markets. Which service interests you?" };
  }
  
  // Default fallback
  return { message: responses.fallback };
};
