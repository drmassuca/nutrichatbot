# Arquitetura e Stack Tecnológica - Nutri ChatBot

## Stack Baseada no Dr. Massuca

### Frontend
- **React 18.2.0** - Biblioteca base
- **Vite 4.5.0** - Build tool e dev server
- **Chakra UI 2.8.2** - Sistema de componentes (Mobile-first)
- **Emotion** - CSS-in-JS styling
- **React Router Dom 6.23.1** - Roteamento SPA
- **React Icons 4.12.0** - Biblioteca de ícones
- **Framer Motion 10.18.0** - Animações e transições
- **React Helmet Async** - SEO e meta tags
- **Schema.org** - Structured data para SEO avançado

### Backend
- **Node.js + Express** - Server e API
- **Anthropic AI SDK** - Integração com Claude AI
- **CORS** - Cross-origin requests
- **dotenv** - Variáveis de ambiente

### SEO e Performance
- **Schema.org markup** - Dados estruturados
- **Sitemap.xml automatizado** - Indexação
- **Mobile-first responsive design** - Prioridade mobile
- **Core Web Vitals otimizado** - Performance
- **Lazy loading** - Carregamento otimizado
- **Image optimization** - WebP/AVIF

### Ferramentas de Desenvolvimento
- **ESLint + Prettier** - Code formatting e quality
- **Vite Plugin React** - Hot reload
- **Vite Plugin PWA** - Progressive Web App
- **Vite Plugin HTML** - Template HTML
- **Vite Plugin Compression** - Otimização

## Estrutura de Arquivos

```
nutrichatbot/
├── src/
│   ├── components/           # Componentes React
│   │   ├── layout/          # Header, Footer, Layout
│   │   ├── sections/        # Seções das páginas
│   │   ├── ui/              # Componentes base
│   │   └── common/          # Componentes reutilizáveis
│   ├── pages/               # Páginas principais
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Features.jsx
│   │   ├── Benefits.jsx
│   │   ├── Pricing.jsx
│   │   ├── Demo.jsx
│   │   └── Contact.jsx
│   ├── hooks/               # Custom React hooks
│   ├── services/            # APIs e integrações
│   ├── utils/               # Funções utilitárias
│   ├── styles/              # Estilos globais
│   ├── assets/              # Imagens e arquivos
│   └── App.jsx              # Componente principal
├── backend/
│   ├── server.js            # Servidor Express
│   ├── routes/              # Rotas da API
│   └── middleware/          # Middlewares
├── public/
│   ├── img/                 # Imagens públicas
│   └── icons/               # Ícones e favicons
└── doc/                     # Documentação
```

## Configurações Principais

### vite.config.js
```javascript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}']
      }
    })
  ],
  build: {
    target: 'es2020',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'react-vendor': ['react', 'react-dom'],
          'chakra-vendor': ['@chakra-ui/react'],
        }
      }
    }
  }
});
```

### package.json
```json
{
  "name": "nutrichatbot-site",
  "version": "1.0.0",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "lint": "eslint \"src/**/*.{js,jsx}\"",
    "lint:fix": "npm run lint -- --fix"
  },
  "dependencies": {
    "@chakra-ui/react": "^2.8.2",
    "@emotion/react": "^11.11.2",
    "@emotion/styled": "^11.11.2",
    "framer-motion": "^10.18.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-helmet-async": "^1.3.0",
    "react-icons": "^4.12.0",
    "react-router-dom": "^6.23.1",
    "web-vitals": "^3.5.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.1.0",
    "eslint": "^8.57.0",
    "eslint-config-prettier": "^10.1.5",
    "eslint-plugin-prettier": "^5.5.1",
    "eslint-plugin-react": "^7.36.0",
    "prettier": "^3.3.2",
    "vite": "^4.5.0",
    "vite-plugin-pwa": "^0.17.5"
  }
}
```

## Tema Chakra UI Personalizado

### theme.js
```javascript
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      50: '#f0f9f0',
      100: '#d4ecd4',
      200: '#b8e0b8',
      300: '#9cd49c',
      400: '#80c880',
      500: '#6B8E23', // Verde principal
      600: '#557a1c',
      700: '#3f5b15',
      800: '#293c0e',
      900: '#131e07',
    },
    blue: {
      50: '#e6f3ff',
      100: '#b3d9ff',
      200: '#80c0ff',
      300: '#4da6ff',
      400: '#1a8cff',
      500: '#4A90E2', // Azul principal
      600: '#3b73b5',
      700: '#2c5688',
      800: '#1d395a',
      900: '#0e1c2d',
    }
  },
  fonts: {
    heading: 'Inter, system-ui, sans-serif',
    body: 'Inter, system-ui, sans-serif',
  },
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.500',
            color: 'white',
          },
        },
      },
    },
  },
});

export default theme;
```

## Componentes Base

### Layout Principal
```jsx
// src/components/layout/Layout.jsx
import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
```

### App Principal
```jsx
// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import theme from './styles/theme';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
// ... outras importações

function App() {
  return (
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/sobre" element={<About />} />
              {/* ... outras rotas */}
            </Routes>
          </Layout>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  );
}

export default App;
```

## SEO e Performance

### Configuração do React Helmet
```jsx
import { Helmet } from 'react-helmet-async';

const SEOComponent = ({ title, description, image }) => (
  <Helmet>
    <title>{title} | Nutri ChatBot</title>
    <meta name="description" content={description} />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
  </Helmet>
);
```

### Web Vitals
```javascript
// src/utils/webVitals.js
import { getCLS, getFID, getFCP, getLCP, getTTFB } from 'web-vitals';

export function reportWebVitals(onPerfEntry) {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    getCLS(onPerfEntry);
    getFID(onPerfEntry);
    getFCP(onPerfEntry);
    getLCP(onPerfEntry);
    getTTFB(onPerfEntry);
  }
}
```

Esta arquitetura replica exatamente a estrutura e tecnologias do Dr. Massuca, garantindo consistência e aproveitamento da experiência já adquirida no projeto anterior.
