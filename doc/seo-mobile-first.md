# SEO Avançado e Mobile-First - Nutri ChatBot

## Schema.org Structured Data

### Implementação Base
```jsx
// src/components/seo/StructuredData.jsx
import { Helmet } from 'react-helmet-async';

const StructuredData = ({ type, data }) => {
  const generateSchema = () => {
    const baseSchema = {
      '@context': 'https://schema.org',
      '@type': type,
      ...data
    };
    return JSON.stringify(baseSchema, null, 2);
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {generateSchema()}
      </script>
    </Helmet>
  );
};
```

### Schemas Específicos para Nutri ChatBot

#### 1. SoftwareApplication Schema
```jsx
const NutriChatBotAppSchema = () => (
  <StructuredData 
    type="SoftwareApplication"
    data={{
      name: "Nutri ChatBot",
      applicationCategory: "HealthApplication",
      description: "Assistente nutricional com IA para WhatsApp que automatiza triagem de pacientes e organiza dados nutricionais",
      operatingSystem: "Web, iOS, Android",
      url: "https://nutrichatbot.com.br",
      downloadUrl: "https://nutrichatbot.com.br/demo",
      screenshot: "https://nutrichatbot.com.br/images/app-screenshot.jpg",
      offers: {
        '@type': 'Offer',
        price: '49.99',
        priceCurrency: 'BRL',
        priceValidUntil: '2025-12-31',
        availability: 'https://schema.org/InStock',
        url: 'https://nutrichatbot.com.br/precos'
      },
      author: {
        '@type': 'Organization',
        name: 'Nutri ChatBot',
        url: 'https://nutrichatbot.com.br'
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '4.8',
        reviewCount: '127'
      },
      featureList: [
        "Triagem automatizada de pacientes",
        "Avaliação nutricional via WhatsApp",
        "Prontuário digital inteligente",
        "Feedback automático de refeições",
        "Relatórios de acompanhamento",
        "Integração CRM"
      ]
    }}
  />
);
```

#### 2. Organization Schema
```jsx
const OrganizationSchema = () => (
  <StructuredData 
    type="Organization"
    data={{
      name: "Nutri ChatBot",
      url: "https://nutrichatbot.com.br",
      logo: "https://nutrichatbot.com.br/images/logo.png",
      description: "Plataforma de IA para nutricionistas",
      foundingDate: "2024",
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+55-11-99999-9999',
        contactType: 'customer service',
        availableLanguage: 'Portuguese'
      },
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'BR',
        addressLocality: 'São Paulo',
        addressRegion: 'SP'
      },
      sameAs: [
        "https://www.instagram.com/nutrichatbot",
        "https://www.linkedin.com/company/nutrichatbot"
      ]
    }}
  />
);
```

#### 3. Service Schema
```jsx
const ServiceSchema = () => (
  <StructuredData 
    type="Service"
    data={{
      name: "Automação de Triagem Nutricional",
      description: "Serviço de automação para consultas nutricionais via WhatsApp com IA",
      provider: {
        '@type': 'Organization',
        name: 'Nutri ChatBot'
      },
      serviceType: "Health Technology",
      offers: {
        '@type': 'Offer',
        price: '49.99',
        priceCurrency: 'BRL',
        description: 'Plano mensal com todas as funcionalidades'
      },
      areaServed: {
        '@type': 'Country',
        name: 'Brasil'
      },
      audience: {
        '@type': 'Audience',
        audienceType: 'Nutricionistas'
      }
    }}
  />
);
```

#### 4. FAQ Schema
```jsx
const FAQSchema = () => (
  <StructuredData 
    type="FAQPage"
    data={{
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Como funciona o Nutri ChatBot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O Nutri ChatBot automatiza a triagem de pacientes via WhatsApp, coletando dados nutricionais e organizando em prontuários digitais para otimizar consultas.'
          }
        },
        {
          '@type': 'Question',
          name: 'Quanto custa o Nutri ChatBot?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O plano custa R$ 49,99/mês ou R$ 599,88/ano, com teste gratuito de 7 dias.'
          }
        },
        {
          '@type': 'Question',
          name: 'É compatível com as normas do CFN?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim, o Nutri ChatBot é totalmente compatível com a Resolução nº 680/2021 do CFN para e-Nutrição.'
          }
        }
      ]
    }}
  />
);
```

## Mobile-First Design System

### Breakpoints Otimizados
```jsx
// src/styles/theme.js
const breakpoints = {
  base: '0px',      // 320px+ (mobile first)
  sm: '480px',      // small mobile
  md: '768px',      // tablet
  lg: '1024px',     // desktop
  xl: '1280px',     // large desktop
  '2xl': '1536px'   // extra large
};

const responsiveConfig = {
  // Container responsivo
  container: {
    base: '100%',
    sm: '480px',
    md: '768px',
    lg: '1024px',
    xl: '1200px'
  },
  
  // Spacing mobile-first
  spacing: {
    base: { px: 4, py: 6 },
    md: { px: 6, py: 8 },
    lg: { px: 8, py: 12 }
  },
  
  // Typography responsiva
  typography: {
    h1: {
      base: { fontSize: '28px', lineHeight: '36px' },
      md: { fontSize: '36px', lineHeight: '44px' },
      lg: { fontSize: '48px', lineHeight: '56px' }
    },
    body: {
      base: { fontSize: '16px', lineHeight: '24px' },
      md: { fontSize: '18px', lineHeight: '28px' }
    }
  }
};
```

### Components Mobile-First

#### Touch-Friendly Buttons
```jsx
// src/components/ui/TouchButton.jsx
import { Button } from '@chakra-ui/react';

const TouchButton = ({ children, ...props }) => {
  return (
    <Button
      minH={{ base: '48px', md: '44px' }}  // Maior no mobile
      minW={{ base: '48px', md: '44px' }}
      px={{ base: 6, md: 4 }}
      fontSize={{ base: 'md', md: 'sm' }}
      {...props}
    >
      {children}
    </Button>
  );
};
```

#### Responsive Grid
```jsx
// src/components/layout/ResponsiveGrid.jsx
import { Grid } from '@chakra-ui/react';

const ResponsiveGrid = ({ children, ...props }) => {
  return (
    <Grid
      templateColumns={{
        base: 'repeat(1, 1fr)',      // 1 coluna mobile
        md: 'repeat(2, 1fr)',        // 2 colunas tablet
        lg: 'repeat(3, 1fr)',        // 3 colunas desktop
        xl: 'repeat(4, 1fr)'         // 4 colunas large
      }}
      gap={{ base: 4, md: 6, lg: 8 }}
      {...props}
    >
      {children}
    </Grid>
  );
};
```

#### Mobile Navigation
```jsx
// src/components/layout/MobileNavigation.jsx
import { 
  Drawer, 
  DrawerOverlay, 
  DrawerContent,
  DrawerBody,
  VStack,
  IconButton,
  useDisclosure
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

const MobileNavigation = ({ menuItems }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  return (
    <>
      <IconButton
        aria-label="Abrir menu"
        icon={<HamburgerIcon />}
        onClick={onOpen}
        display={{ base: 'flex', md: 'none' }}
        size="lg"
        variant="ghost"
        minH="48px"
        minW="48px"
      />
      
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerBody p={0}>
            <VStack spacing={0} align="stretch">
              {menuItems.map((item, index) => (
                <TouchButton
                  key={index}
                  variant="ghost"
                  justifyContent="flex-start"
                  borderRadius={0}
                  h="56px"
                  onClick={() => {
                    item.onClick();
                    onClose();
                  }}
                >
                  {item.label}
                </TouchButton>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};
```

## Performance e Core Web Vitals

### Image Optimization
```jsx
// src/components/ui/OptimizedImage.jsx
import { Box, Image } from '@chakra-ui/react';
import { useState, useRef } from 'react';

const OptimizedImage = ({ 
  src, 
  alt, 
  sizes = "(max-width: 768px) 100vw, 50vw",
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef();

  // Intersection Observer para lazy loading
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (imgRef.current) observer.observe(imgRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <Box ref={imgRef} position="relative" overflow="hidden" {...props}>
      {isInView && (
        <picture>
          <source 
            media="(max-width: 767px)" 
            srcSet={`${src}-mobile.webp`} 
            type="image/webp" 
          />
          <source 
            media="(min-width: 768px)" 
            srcSet={`${src}-desktop.webp`} 
            type="image/webp" 
          />
          <Image
            src={`${src}.jpg`}
            alt={alt}
            loading="lazy"
            decoding="async"
            sizes={sizes}
            onLoad={() => setIsLoaded(true)}
            opacity={isLoaded ? 1 : 0}
            transition="opacity 0.3s"
          />
        </picture>
      )}
    </Box>
  );
};
```

### Critical CSS
```jsx
// src/utils/criticalCSS.js
export const injectCriticalCSS = () => {
  const criticalCSS = `
    /* Above-the-fold critical styles */
    body { 
      font-family: 'Inter', system-ui, sans-serif;
      margin: 0;
      padding: 0;
    }
    
    .hero-section {
      min-height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    /* Mobile-first button */
    .cta-button {
      min-height: 48px;
      padding: 12px 24px;
      background: #6B8E23;
      color: white;
      border: none;
      border-radius: 8px;
      font-weight: 600;
    }
    
    @media (min-width: 768px) {
      .cta-button {
        min-height: 44px;
        padding: 10px 20px;
      }
    }
  `;
  
  const style = document.createElement('style');
  style.textContent = criticalCSS;
  document.head.appendChild(style);
};
```

## Sitemap e Robots Automatizados

### Geração de Sitemap
```jsx
// scripts/generate-sitemap.js
import fs from 'fs';
import path from 'path';

const baseUrl = 'https://nutrichatbot.com.br';
const routes = [
  { path: '/', priority: '1.0', changefreq: 'weekly' },
  { path: '/sobre', priority: '0.9', changefreq: 'monthly' },
  { path: '/funcionalidades', priority: '0.9', changefreq: 'monthly' },
  { path: '/beneficios', priority: '0.8', changefreq: 'monthly' },
  { path: '/precos', priority: '0.9', changefreq: 'weekly' },
  { path: '/demo', priority: '0.8', changefreq: 'weekly' },
  { path: '/contato', priority: '0.7', changefreq: 'monthly' },
  { path: '/blog', priority: '0.6', changefreq: 'daily' }
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`).join('')}
</urlset>`;
  
  fs.writeFileSync(path.join(process.cwd(), 'public/sitemap.xml'), sitemap);
  console.log('✅ Sitemap gerado com sucesso!');
};

generateSitemap();
```

### Robots.txt Otimizado
```txt
# public/robots.txt
User-agent: *
Allow: /

# Otimizações de performance
User-agent: *
Disallow: /admin/
Disallow: /api/
Disallow: /backend/
Disallow: /*.json$
Disallow: /*?*

# Diretrizes para bots específicos
User-agent: Googlebot
Allow: /
Crawl-delay: 1

User-agent: Bingbot
Allow: /
Crawl-delay: 2

# Sitemap
Sitemap: https://nutrichatbot.com.br/sitemap.xml

# Performance
Host: https://nutrichatbot.com.br
```

## Métricas e Monitoramento

### Web Vitals Tracking
```jsx
// src/utils/analytics.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export const trackWebVitals = () => {
  const vitalsData = {};
  
  getCLS((metric) => {
    vitalsData.cls = metric.value;
    sendToAnalytics('CLS', metric);
  });
  
  getFID((metric) => {
    vitalsData.fid = metric.value;
    sendToAnalytics('FID', metric);
  });
  
  getFCP((metric) => {
    vitalsData.fcp = metric.value;
    sendToAnalytics('FCP', metric);
  });
  
  getLCP((metric) => {
    vitalsData.lcp = metric.value;
    sendToAnalytics('LCP', metric);
  });
  
  getTTFB((metric) => {
    vitalsData.ttfb = metric.value;
    sendToAnalytics('TTFB', metric);
  });
  
  return vitalsData;
};

const sendToAnalytics = (metricName, metric) => {
  // Google Analytics 4
  if (typeof gtag !== 'undefined') {
    gtag('event', metricName, {
      value: Math.round(metric.value),
      metric_id: metric.id,
      metric_delta: metric.delta,
    });
  }
  
  // Console para desenvolvimento
  console.log(`${metricName}:`, metric.value);
};
```

Esta implementação garante SEO de alto nível com Schema.org e performance otimizada mobile-first, seguindo as melhores práticas atuais para visibilidade e experiência do usuário.
