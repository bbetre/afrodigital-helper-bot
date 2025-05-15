
interface ChatResponse {
  message: string;
}

const responses = {
  greeting: [
    "Selam! How can I help you with Afro Digital's services today?",
    "Hello! Welcome to Afro Digital. How may I assist you?",
    "Greetings! I'm Afro Assistant. What can I help you with today?"
  ],
  
  services: {
    web: "Our Web Development team creates custom websites and web applications designed for speed, security, and conversion. We focus on building solutions that work for the Ethiopian and wider African market conditions.",
    
    mobile: "We develop both native and cross-platform mobile applications optimized for seamless user experiences, even in regions with connectivity challenges.",
    
    uiux: "Our UI/UX Design process centers on creating user-friendly, accessible interfaces that engage your audience while respecting cultural contexts.",
    
    marketing: "Our digital marketing services use data-driven strategies to boost your online visibility with approaches optimized for Ethiopian and African audiences.",
    
    branding: "We offer comprehensive branding services to help your business stand out in the competitive digital landscape with culturally-relevant design elements.",
    
    seo: "Our SEO optimization techniques improve search rankings and increase customer reach, with specific knowledge of local search patterns in Ethiopia."
  },
  
  about: "Afro Digital was founded in 2024, starting as a small team of freelancers and growing into a full-service digital agency. We specialize in web development, design, marketing, and strategy for both startups and enterprises across various industries in Ethiopia and beyond.",
  
  mission: "Our mission is to empower businesses with innovative digital solutions that drive growth and enhance customer experiences in the African context.",
  
  values: "Our core values include: Innovation - embracing new technologies; Excellence - maintaining high standards in all projects; Collaboration - partnering closely with clients; and Integrity - operating with honesty and transparency.",
  
  team: {
    general: "Our team consists of experienced professionals in development, design, and digital marketing.",
    founder: "BetreMariyamn Yosef is our Founder & CEO, with expertise in development and digital strategy.",
    members: "Our key team members include Adonias Alemayhu (Graphics Designer), Biruk Damtew (Development & AI expert), and Nathnael Teklay (Marketing Strategist)."
  },
  
  process: "Our process includes: Discovery - understanding your business goals; Strategy - creating a roadmap; Design & Development - building solutions with regular feedback; and Launch & Support - testing, refining, and providing ongoing optimization.",
  
  quality: "We ensure quality through rigorous testing across devices and platforms, security audits, performance optimization, and ongoing support including updates and analytics.",
  
  contact: "You can reach us at info@afrodigital.et or through our social media channels.",
  
  contactDetails: "Email: info@afrodigital.et | Our team typically works weekdays, but you can email for urgent inquiries. አመሰግናለሁ (thank you)!",
  
  social: "Follow us on Twitter (@afrodigitalet), Instagram (@afrodigital.et), and LinkedIn (company/afro-digitalet).",
  
  location: "We are based in Ethiopia, serving clients locally and across Africa.",
  
  hours: "Our team typically works weekdays, but you can email info@afrodigital.et for urgent inquiries.",
  
  fallback: "I don't have specific information about that. I recommend contacting info@afrodigital.et for detailed assistance with your question.",
  
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
    lowerMessage.includes('mobile') || 
    lowerMessage.includes('app') || 
    lowerMessage.includes('android') ||
    lowerMessage.includes('ios')
  ) {
    return { message: responses.services.mobile };
  }
  
  if (
    lowerMessage.includes('ui') || 
    lowerMessage.includes('ux') || 
    lowerMessage.includes('design') ||
    lowerMessage.includes('interface')
  ) {
    return { message: responses.services.uiux };
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
    lowerMessage.includes('brand') || 
    lowerMessage.includes('logo') || 
    lowerMessage.includes('identity')
  ) {
    return { message: responses.services.branding };
  }
  
  if (
    lowerMessage.includes('seo') || 
    lowerMessage.includes('search') || 
    lowerMessage.includes('rank') ||
    lowerMessage.includes('google')
  ) {
    return { message: responses.services.seo };
  }
  
  // Check for specific information
  if (
    lowerMessage.includes('service') || 
    lowerMessage.includes('offer') || 
    lowerMessage.includes('provide') ||
    lowerMessage.includes('do you') ||
    lowerMessage.includes('what can')
  ) {
    return { message: "We offer web development, mobile apps, UI/UX design, digital marketing, branding, and SEO optimization services. Which specific service would you like to know more about?" };
  }
  
  if (
    lowerMessage.includes('about') || 
    lowerMessage.includes('company') || 
    lowerMessage.includes('who are you') ||
    lowerMessage.includes('afro digital')
  ) {
    return { message: responses.about };
  }
  
  if (
    lowerMessage.includes('mission') || 
    lowerMessage.includes('purpose') || 
    lowerMessage.includes('goal')
  ) {
    return { message: responses.mission };
  }
  
  if (
    lowerMessage.includes('value') || 
    lowerMessage.includes('principle') || 
    lowerMessage.includes('believe')
  ) {
    return { message: responses.values };
  }
  
  if (
    lowerMessage.includes('team') || 
    lowerMessage.includes('staff') || 
    lowerMessage.includes('employee') ||
    lowerMessage.includes('people')
  ) {
    return { message: responses.team.members };
  }
  
  if (
    lowerMessage.includes('founder') || 
    lowerMessage.includes('ceo') || 
    lowerMessage.includes('owner') ||
    lowerMessage.includes('betremariamn')
  ) {
    return { message: responses.team.founder };
  }
  
  if (
    lowerMessage.includes('process') || 
    lowerMessage.includes('approach') || 
    lowerMessage.includes('methodology') ||
    lowerMessage.includes('how you work')
  ) {
    return { message: responses.process };
  }
  
  if (
    lowerMessage.includes('quality') || 
    lowerMessage.includes('testing') || 
    lowerMessage.includes('security') ||
    lowerMessage.includes('support')
  ) {
    return { message: responses.quality };
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
  
  if (
    lowerMessage.includes('social') || 
    lowerMessage.includes('twitter') || 
    lowerMessage.includes('instagram') ||
    lowerMessage.includes('linkedin') ||
    lowerMessage.includes('facebook') ||
    lowerMessage.includes('follow')
  ) {
    return { message: responses.social };
  }
  
  if (
    lowerMessage.includes('location') || 
    lowerMessage.includes('where') || 
    lowerMessage.includes('address') ||
    lowerMessage.includes('office') ||
    lowerMessage.includes('ethiopia')
  ) {
    return { message: responses.location };
  }
  
  // Check for hours/availability
  if (
    lowerMessage.includes('open') || 
    lowerMessage.includes('hours') || 
    lowerMessage.includes('weekend') ||
    lowerMessage.includes('available')
  ) {
    return { message: responses.hours };
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
  
  // Default fallback
  return { message: responses.fallback };
};
