# Nutri ChatBot - Site Institucional

Assistente nutricional com IA para WhatsApp que automatiza triagem de pacientes e otimiza consultas nutricionais.

## 🚀 Tecnologias

- **React 18.2.0** - Biblioteca principal
- **Vite 4.5.0** - Build tool e dev server
- **Chakra UI 2.8.2** - Sistema de componentes mobile-first
- **React Router Dom 6.23.1** - Roteamento SPA
- **Framer Motion** - Animações e transições
- **React Helmet Async** - SEO e meta tags
- **React Icons** - Biblioteca de ícones

## 🎨 Design System

### Cores Principais (baseadas no logo)
- **Verde Nutri**: `#6B8E23` - Nutrição/natureza
- **Azul Chat**: `#4A90E2` - Tecnologia/comunicação
- **Fundo**: Branco `#FFFFFF`

### Tipografia
- **Fonte**: Inter (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700

## 📁 Estrutura do Projeto

```
src/
├── components/
│   ├── layout/           # Header, Footer, Layout
│   └── seo/              # SEO e Schema.org
├── pages/                # Páginas principais
├── styles/               # Theme e estilos globais
└── utils/                # Utilitários e Web Vitals
```

## 🛠 Instalação e Execução

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Comandos

```bash
# Instalar dependências
npm install

# Executar em desenvolvimento
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint

# Formatação
npm run format
```

## 📱 Funcionalidades

### SEO Avançado
- ✅ Schema.org structured data
- ✅ Open Graph meta tags
- ✅ Twitter Cards
- ✅ Sitemap automático
- ✅ Meta tags otimizadas

### Performance
- ✅ Mobile-first responsive
- ✅ Core Web Vitals otimizado
- ✅ Lazy loading de imagens
- ✅ PWA configurado
- ✅ Code splitting automático

### Componentes
- ✅ Header responsivo com menu mobile
- ✅ Footer completo com links
- ✅ Cards de funcionalidades
- ✅ Botões touch-friendly
- ✅ Animações com Framer Motion

## 📄 Páginas

1. **Homepage (/)** - Hero + funcionalidades + CTAs
2. **Sobre (/sobre)** - Explicação do produto
3. **Funcionalidades (/funcionalidades)** - Lista detalhada
4. **Benefícios (/beneficios)** - Vantagens para nutricionistas
5. **Preços (/precos)** - Plano R$ 49,99/mês
6. **Demo (/demo)** - Teste gratuito
7. **Contato (/contato)** - Formulário e WhatsApp

## 🎯 CTAs Principais

- **"Experimente grátis por 7 dias"** - Conversão principal
- **"Agende uma demonstração"** - Lead nurturing
- **WhatsApp direto** - Contato imediato

## 🔧 Configurações

### Favicon e PWA
- Todas as configurações de favicon estão no `index.html`
- PWA manifest configurado no `vite.config.js`
- Ícones devem ser colocados em `public/icons/`

### Theme Chakra UI
- Cores da marca configuradas em `src/styles/theme.js`
- Componentes customizados (Button, Card, Heading)
- Breakpoints mobile-first

### Web Vitals
- Tracking configurado em `src/utils/webVitals.js`
- Métricas enviadas para analytics

## 🌐 Deploy

### Recomendado: Vercel
```bash
# Conectar repositório no Vercel
# Build automático a cada push
# Domínio personalizado
```

### Alternativas:
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📊 Métricas Alvo

- **Lighthouse Score**: >90
- **First Contentful Paint**: <2s
- **Largest Contentful Paint**: <4s
- **Cumulative Layout Shift**: <0.1

## 🔐 Conformidade

- **LGPD**: Política de privacidade
- **CFN**: Compatível com Resolução nº 680/2021
- **Acessibilidade**: WCAG AA
- **SEO**: Schema.org + meta tags completas

## 📞 Suporte

- **WhatsApp**: [Configurar número]
- **Email**: [Configurar email]
- **Documentação**: Pasta `doc/` com especificações completas

---

**Desenvolvido com ❤️ para nutricionistas que buscam inovação**
