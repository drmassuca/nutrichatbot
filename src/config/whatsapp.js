// Configurações centralizadas para WhatsApp
export const WHATSAPP_CONFIG = {
  // Número de telefone (formato internacional sem + e espaços)
  phoneNumber: '5511999999999', // Substitua pelo número real
  
  // Mensagens pré-definidas para diferentes contextos
  messages: {
    // Mensagem padrão do botão flutuante
    default: 'Olá! 👋 Gostaria de conhecer o Nutri ChatBot e saber como posso otimizar meus atendimentos nutricionais com IA. Pode me ajudar?',
    
    // Mensagem da página inicial
    home: 'Olá! 👋 Vim através do site e gostaria de conhecer melhor o Nutri ChatBot. Pode me explicar como funciona?',
    
    // Mensagem da página sobre
    about: 'Olá! Acabei de conhecer a história da empresa na página Sobre e fiquei interessado no Nutri ChatBot. Podem me ajudar?',
    
    // Mensagem da página de funcionalidades
    features: 'Olá! Vi as funcionalidades do Nutri ChatBot e gostaria de saber mais detalhes sobre como implementar na minha prática.',
    
    // Mensagem da página de preços
    pricing: 'Olá! Estou interessado nos planos do Nutri ChatBot. Podem me explicar qual seria o melhor para meu consultório?',
    
    // Mensagem da página de benefícios
    benefits: 'Olá! Fiquei impressionado com os benefícios do Nutri ChatBot. Gostaria de agendar uma demonstração.',
    
    // Mensagem da página de contato
    contact: 'Olá! Estou entrando em contato através do site para conhecer melhor o Nutri ChatBot.',
    
    // Mensagem para demonstração
    demo: 'Olá! Gostaria de agendar uma demonstração do Nutri ChatBot para conhecer na prática como funciona.',
    
    // Mensagem para suporte
    support: 'Olá! Preciso de suporte técnico com o Nutri ChatBot. Podem me ajudar?',
    
    // Mensagem para dúvidas técnicas
    technical: 'Olá! Tenho algumas dúvidas técnicas sobre a implementação do Nutri ChatBot. Podem me orientar?'
  },
  
  // Configurações de exibição
  display: {
    // Delay para aparecer o botão (em milissegundos)
    appearDelay: 1000,
    
    // Delay para aparecer o indicador de mensagem (em milissegundos)
    notificationDelay: 3000,
    
    // Delay para aparecer a mensagem de call-to-action (em milissegundos)
    ctaDelay: 2000,
    
    // Duração da animação de call-to-action (em segundos)
    ctaDuration: 4,
    
    // Textos de call-to-action
    ctaTexts: [
      '💬 Tire suas dúvidas agora!',
      '🚀 Agende uma demo gratuita!',
      '⚡ Resposta rápida garantida!',
      '👩‍⚕️ Fale com especialistas!'
    ]
  },
  
  // Configurações de horário de atendimento (opcional)
  businessHours: {
    enabled: false, // Definir como true para ativar verificação de horário
    timezone: 'America/Sao_Paulo',
    hours: {
      monday: { start: '08:00', end: '18:00' },
      tuesday: { start: '08:00', end: '18:00' },
      wednesday: { start: '08:00', end: '18:00' },
      thursday: { start: '08:00', end: '18:00' },
      friday: { start: '08:00', end: '18:00' },
      saturday: { start: '08:00', end: '12:00' },
      sunday: null // Fechado
    },
    offlineMessage: 'Olá! No momento estamos offline, mas deixe sua mensagem que responderemos assim que possível! 😊'
  }
};

// Função para gerar URL do WhatsApp
export const generateWhatsAppUrl = (messageType = 'default', customMessage = null) => {
  const message = customMessage || WHATSAPP_CONFIG.messages[messageType] || WHATSAPP_CONFIG.messages.default;
  const encodedMessage = encodeURIComponent(message);
  return `https://wa.me/${WHATSAPP_CONFIG.phoneNumber}?text=${encodedMessage}`;
};

// Função para verificar se está no horário de atendimento
export const isBusinessHours = () => {
  if (!WHATSAPP_CONFIG.businessHours.enabled) {
    return true; // Se não está configurado, considera como sempre disponível
  }
  
  const now = new Date();
  const day = now.toLocaleLowerCase().slice(0, 3); // 'mon', 'tue', etc.
  const currentTime = now.toTimeString().slice(0, 5); // 'HH:MM'
  
  const dayConfig = WHATSAPP_CONFIG.businessHours.hours[day];
  
  if (!dayConfig) {
    return false; // Dia não configurado (ex: domingo)
  }
  
  return currentTime >= dayConfig.start && currentTime <= dayConfig.end;
};

// Função para obter mensagem baseada no horário
export const getContextualMessage = (messageType = 'default', customMessage = null) => {
  if (customMessage) {
    return customMessage;
  }
  
  if (!isBusinessHours() && WHATSAPP_CONFIG.businessHours.enabled) {
    return WHATSAPP_CONFIG.businessHours.offlineMessage;
  }
  
  return WHATSAPP_CONFIG.messages[messageType] || WHATSAPP_CONFIG.messages.default;
};