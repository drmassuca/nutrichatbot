import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    // Cores principais da marca (baseadas no logo)
    brand: {
      50: '#f0f9f0',
      100: '#d4ecd4',
      200: '#b8e0b8',
      300: '#9cd49c',
      400: '#80c880',
      500: '#6B8E23',    // Verde principal do logo
      600: '#557a1c',
      700: '#3f5b15',
      800: '#293c0e',
      900: '#131e07',
    },
    
    // Azul para tecnologia/chat (do logo)
    tech: {
      50: '#e6f3ff',
      100: '#b3d9ff',
      200: '#80c0ff',
      300: '#4da6ff',
      400: '#1a8cff',
      500: '#4A90E2',    // Azul principal do logo
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
  
  fonts: {
    heading: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    body: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  },
  
  fontSizes: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    '2xl': '1.5rem',
    '3xl': '1.875rem',
    '4xl': '2.25rem',
    '5xl': '3rem',
    '6xl': '3.75rem',
    '7xl': '4.5rem',
    '8xl': '6rem',
    '9xl': '8rem',
  },
  
  breakpoints: {
    base: '0px',      // Mobile first
    sm: '480px',      // Small mobile
    md: '768px',      // Tablet
    lg: '1024px',     // Desktop
    xl: '1280px',     // Large desktop
    '2xl': '1536px'   // Extra large
  },
  
  // Configuração base
  styles: {
    global: {
      body: {
        bg: 'white',
        color: 'gray.800',
        fontFeatureSettings: '"kern" 1',
        textRendering: 'optimizeLegibility',
        WebkitFontSmoothing: 'antialiased',
        MozOsxFontSmoothing: 'grayscale',
      },
      '*': {
        boxSizing: 'border-box',
      },
      'html': {
        scrollBehavior: 'smooth',
      },
    },
  },
  
  // Componentes customizados
  components: {
    Button: {
      baseStyle: {
        fontWeight: '600',
        borderRadius: 'lg',
        _focus: {
          boxShadow: '0 0 0 3px rgba(107, 142, 35, 0.1)',
        },
      },
      sizes: {
        sm: {
          h: '32px',
          minW: '32px',
          px: 3,
          fontSize: 'sm',
        },
        md: {
          h: '40px',
          minW: '40px',
          px: 4,
          fontSize: 'md',
        },
        lg: {
          h: '48px',
          minW: '48px',
          px: 6,
          fontSize: 'lg',
        },
        xl: {
          h: '56px',
          minW: '56px',
          px: 8,
          fontSize: 'xl',
        },
      },
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
          borderWidth: '2px',
          _hover: {
            bg: 'brand.50',
            borderColor: 'brand.600',
            transform: 'translateY(-1px)',
          },
        },
        tech: {
          bg: 'tech.500',
          color: 'white',
          _hover: {
            bg: 'tech.600',
            transform: 'translateY(-2px)',
            boxShadow: 'lg',
          },
        },
        ghost: {
          color: 'gray.600',
          _hover: {
            bg: 'gray.50',
            color: 'gray.800',
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
          overflow: 'hidden',
          transition: 'all 0.2s',
          _hover: {
            boxShadow: 'md',
            transform: 'translateY(-2px)',
            borderColor: 'gray.200',
          },
        },
      },
    },
    
    Heading: {
      baseStyle: {
        fontWeight: '700',
        lineHeight: '1.2',
      },
      sizes: {
        '4xl': {
          fontSize: ['2xl', '3xl', '4xl'],
        },
        '3xl': {
          fontSize: ['xl', '2xl', '3xl'],
        },
        '2xl': {
          fontSize: ['lg', 'xl', '2xl'],
        },
        'xl': {
          fontSize: ['md', 'lg', 'xl'],
        },
      },
    },
    
    Text: {
      baseStyle: {
        lineHeight: '1.6',
      },
    },
    
    Container: {
      baseStyle: {
        maxW: '1200px',
        px: { base: 4, sm: 6, md: 8 },
      },
    },
  },
});

export default theme;
