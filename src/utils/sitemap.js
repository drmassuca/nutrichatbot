// Utility for sitemap generation
// This can be used to programmatically update the sitemap in the future

export const routes = [
  {
    path: '/',
    priority: '1.0',
    changefreq: 'weekly',
    title: 'Home - Nutri ChatBot'
  },
  {
    path: '/sobre',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Sobre - Nutri ChatBot'
  },
  {
    path: '/funcionalidades',
    priority: '0.9',
    changefreq: 'monthly', 
    title: 'Funcionalidades - Nutri ChatBot'
  },
  {
    path: '/beneficios',
    priority: '0.8',
    changefreq: 'monthly',
    title: 'Benefícios - Nutri ChatBot'
  },
  {
    path: '/precos',
    priority: '0.9',
    changefreq: 'weekly',
    title: 'Preços - Nutri ChatBot'
  },
  {
    path: '/contato',
    priority: '0.7',
    changefreq: 'monthly',
    title: 'Contato - Nutri ChatBot'
  }
];

export const generateSitemap = (baseUrl = 'https://nutrichatbot.com.br') => {
  const lastmod = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
  
  const urls = routes.map(route => ({
    loc: `${baseUrl}${route.path}`,
    lastmod,
    changefreq: route.changefreq,
    priority: route.priority
  }));

  return {
    urls,
    xml: generateSitemapXML(urls)
  };
};

export const generateSitemapXML = (urls) => {
  const urlsXML = urls.map(url => `
  <url>
    <loc>${url.loc}</loc>
    <lastmod>${url.lastmod}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${urlsXML}
</urlset>`;
};

// SEO metadata for each route
export const seoMetadata = {
  '/': {
    title: 'Nutri ChatBot - A sua versão nutricionista virtual, disponível 24h',
    description: 'Assistente nutricional com IA para WhatsApp que automatiza triagem de pacientes e otimiza consultas nutricionais.',
    keywords: 'nutricionista, chatbot, whatsapp, triagem, pacientes, IA, assistente nutricional'
  },
  '/sobre': {
    title: 'Sobre - Nutri ChatBot | Revolucionando a Nutrição com IA',
    description: 'Conheça a história e missão do Nutri ChatBot. Como estamos revolucionando o atendimento nutricional com inteligência artificial.',
    keywords: 'sobre nutri chatbot, história, missão, nutrição IA, inovação nutricional'
  },
  '/funcionalidades': {
    title: 'Funcionalidades - Nutri ChatBot | IA Avançada para Nutricionistas',
    description: 'Descubra todas as funcionalidades do Nutri ChatBot: IA conversacional, anamnese automatizada, prontuário digital, análise nutricional.',
    keywords: 'funcionalidades chatbot, IA nutricional, anamnese automatizada, prontuário digital'
  },
  '/beneficios': {
    title: 'Benefícios - Nutri ChatBot | Otimize sua Prática Nutricional',
    description: 'Veja como o Nutri ChatBot pode economizar tempo, aumentar eficiência e melhorar a satisfação dos pacientes.',
    keywords: 'benefícios nutricionista, otimização consultas, eficiência nutricional, satisfação pacientes'
  },
  '/precos': {
    title: 'Preços - Nutri ChatBot | Planos Acessíveis para Nutricionistas',
    description: 'Conheça nossos planos acessíveis. A partir de R$ 49,99/mês. Teste grátis por 7 dias. Cancele quando quiser.',
    keywords: 'preços nutri chatbot, planos nutricionista, R$ 49,99, teste grátis, sem fidelidade'
  },
  '/contato': {
    title: 'Contato - Nutri ChatBot | Fale Conosco via WhatsApp',
    description: 'Entre em contato conosco via WhatsApp, email ou formulário. Tire suas dúvidas e agende uma demonstração gratuita.',
    keywords: 'contato nutri chatbot, suporte, demonstração, whatsapp, atendimento'
  }
};

export default {
  routes,
  generateSitemap,
  generateSitemapXML,
  seoMetadata
};