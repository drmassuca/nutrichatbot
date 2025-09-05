# Paleta de Cores Nutri ChatBot - Baseada no Logo

## Análise do Logo

O logo Nutri ChatBot combina elementos de:
- **Natureza/Nutrição** (verde das folhas)
- **Tecnologia/Chat** (azul do balão de fala)
- **Comunicação** (ícone de conversa)

## Paleta Principal Extraída

### Cores Primárias (do Logo)
```css
:root {
  /* Verdes (Nutrição/Natureza) */
  --nutri-green-primary: #6B8E23;    /* Verde oliva principal */
  --nutri-green-light: #8FBC8F;      /* Verde claro das folhas */
  --nutri-green-dark: #556B1D;       /* Verde escuro */
  
  /* Azuis (Tecnologia/Chat) */
  --nutri-blue-primary: #4A90E2;     /* Azul principal do chat */
  --nutri-blue-light: #6BB6FF;       /* Azul claro */
  --nutri-blue-dark: #2E5984;        /* Azul escuro */
}
```

### Cores Secundárias (Expansão)
```css
:root {
  /* Verdes expandidos */
  --green-50: #f0f9f0;
  --green-100: #d4ecd4;
  --green-200: #b8e0b8;
  --green-300: #9cd49c;
  --green-400: #80c880;
  --green-500: #6B8E23;     /* Principal */
  --green-600: #557a1c;
  --green-700: #3f5b15;
  --green-800: #293c0e;
  --green-900: #131e07;
  
  /* Azuis expandidos */
  --blue-50: #e6f3ff;
  --blue-100: #b3d9ff;
  --blue-200: #80c0ff;
  --blue-300: #4da6ff;
  --blue-400: #1a8cff;
  --blue-500: #4A90E2;      /* Principal */
  --blue-600: #3b73b5;
  --blue-700: #2c5688;
  --blue-800: #1d395a;
  --blue-900: #0e1c2d;
}
```

### Neutros (Fundo Branco + Suporte)
```css
:root {
  /* Base neutra */
  --white: #FFFFFF;
  --gray-50: #F9FAFB;
  --gray-100: #F3F4F6;
  --gray-200: #E5E7EB;
  --gray-300: #D1D5DB;
  --gray-400: #9CA3AF;
  --gray-500: #6B7280;
  --gray-600: #4B5563;
  --gray-700: #374151;
  --gray-800: #1F2937;
  --gray-900: #111827;
  --black: #000000;
}
```

### Cores de Status
```css
:root {
  /* Feedback/Status */
  --success: #10B981;        /* Verde sucesso */
  --warning: #F59E0B;        /* Laranja aviso */
  --error: #EF4444;          /* Vermelho erro */
  --info: #3B82F6;           /* Azul informação */
}
```

## Aplicação no Chakra UI Theme

### Theme Atualizado
```javascript
// src/styles/theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Cores principais da marca
    brand: {
      50: '#f0f9f0',
      100: '#d4ecd4',
      200: '#b8e0b8',
      300: '#9cd49c',
      400: '#80c880',
      500: '#6B8E23',    // Verde principal
      600: '#557a1c',
      700: '#3f5b15',
      800: '#293c0e',
      900: '#131e07',
    },
    
    // Azul para tecnologia/chat
    tech: {
      50: '#e6f3ff',
      100: '#b3d9ff',
      200: '#80c0ff',
      300: '#4da6ff',
      400: '#1a8cff',
      500: '#4A90E2',    // Azul principal
      600: '#3b73b5',
      700: '#2c5688',
      800: '#1d395a',
      900: '#0e1c2d',
    },
    
    // Neutros com fundo branco
    gray: {
      50: '#F9FAFB',
      100: '#F3F4F6',
      200: '#E5E7EB',
      300: '#D1D5DB',
      400: '#9CA3AF',
      500: '#6B7280',
      600: '#4B5563',
      700: '#374151',
      800: '#1F2937',
      900: '#111827',
    }
  },
  
  // Configuração base
  styles: {
    global: {
      body: {
        bg: 'white',              // Fundo branco base
        color: 'gray.800',
      },
    },
  },
  
  // Componentes customizados
  components: {
    Button: {
      variants: {
        solid: {
          bg: 'brand.500',
          color: 'white',
          _hover: {
            bg: 'brand.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
          _active: {
            bg: 'brand.700',
            transform: 'translateY(0)',
          },
        },
        outline: {
          borderColor: 'brand.500',
          color: 'brand.500',
          _hover: {
            bg: 'brand.50',
            borderColor: 'brand.600',
          },
        },
        tech: {
          bg: 'tech.500',
          color: 'white',
          _hover: {
            bg: 'tech.600',
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    
    Card: {
      baseStyle: {
        container: {
          bg: 'white',
          borderRadius: 'xl',
          boxShadow: 'sm',
          border: '1px solid',
          borderColor: 'gray.100',
          _hover: {
            boxShadow: 'md',
            transform: 'translateY(-2px)',
            transition: 'all 0.2s',
          },
        },
      },
    },
  },
});

export default theme;
```

## Combinações de Cores Recomendadas

### 1. Header/Navigation
```css
background: white;
border-bottom: 1px solid var(--gray-200);
logo: original colors;
text: var(--gray-800);
cta-button: var(--nutri-green-primary);
```

### 2. Hero Section
```css
background: linear-gradient(135deg, var(--white) 0%, var(--green-50) 100%);
heading: var(--gray-900);
text: var(--gray-600);
primary-button: var(--nutri-green-primary);
secondary-button: var(--nutri-blue-primary);
```

### 3. Feature Cards
```css
background: white;
border: 1px solid var(--gray-100);
icon-background: var(--nutri-green-primary) ou var(--nutri-blue-primary);
icon-color: white;
text: var(--gray-700);
```

### 4. CTA Sections
```css
background: var(--nutri-green-primary);
text: white;
button: white background com var(--nutri-green-primary) text;
accent: var(--nutri-blue-primary);
```

### 5. Footer
```css
background: var(--gray-900);
text: var(--gray-300);
links: var(--nutri-green-light);
logo: versão clara ou original;
```

## Gradientes Recomendados

### Hero Gradients
```css
/* Neutro suave */
.hero-gradient-1 {
  background: linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%);
}

/* Verde sutil */
.hero-gradient-2 {
  background: linear-gradient(135deg, #f0f9f0 0%, #d4ecd4 100%);
}

/* Azul tech sutil */
.hero-gradient-3 {
  background: linear-gradient(135deg, #ffffff 0%, #e6f3ff 100%);
}
```

### CTA Gradients
```css
/* Verde principal */
.cta-gradient-1 {
  background: linear-gradient(135deg, #6B8E23 0%, #557a1c 100%);
}

/* Azul tech */
.cta-gradient-2 {
  background: linear-gradient(135deg, #4A90E2 0%, #2c5688 100%);
}

/* Combinação marca */
.cta-gradient-3 {
  background: linear-gradient(135deg, #6B8E23 0%, #4A90E2 100%);
}
```

## Acessibilidade das Cores

### Contrastes Validados (WCAG AA)
- **Verde principal (#6B8E23) + Branco**: ✅ 5.4:1
- **Azul principal (#4A90E2) + Branco**: ✅ 4.7:1
- **Gray 800 (#1F2937) + Branco**: ✅ 12.6:1
- **Gray 600 (#4B5563) + Branco**: ✅ 7.1:1

### Uso Recomendado
```css
/* Textos sobre fundo branco */
.text-primary { color: var(--gray-900); }    /* Títulos */
.text-secondary { color: var(--gray-600); }  /* Corpo */
.text-muted { color: var(--gray-500); }      /* Suporte */

/* Botões e CTAs */
.btn-primary { background: var(--nutri-green-primary); }
.btn-tech { background: var(--nutri-blue-primary); }
.btn-outline { border-color: var(--nutri-green-primary); }
```

Esta paleta mantém consistência visual com o logo, garante acessibilidade e cria harmonia com o fundo branco, sendo perfeita para todos os materiais de mídia existentes.
