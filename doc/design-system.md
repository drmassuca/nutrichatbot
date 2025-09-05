# Design System - Nutri ChatBot

## Paleta de Cores (Baseada no Logo)

### Cores Principais da Marca
- **Verde Nutri**: #6B8E23 (Verde oliva das folhas)
- **Azul Chat**: #4A90E2 (Azul do balão de fala)
- **Verde Claro**: #8FBC8F (Tons naturais)
- **Azul Escuro**: #2E5984 (Profundidade tech)

### Cores Neutras (Fundo Branco)
- **Branco**: #FFFFFF (Base principal)
- **Cinza Claro**: #F7FAFC
- **Cinza Médio**: #A0AEC0
- **Cinza Escuro**: #2D3748
- **Preto**: #1A202C

### Cores de Status
- **Sucesso**: #10B981 (Verde harmônico)
- **Aviso**: #F59E0B (Laranja)
- **Erro**: #EF4444 (Vermelho)
- **Info**: #3B82F6 (Azul informação)

## Tipografia

### Fonte Principal
- **Família**: 'Inter', 'Segoe UI', 'Roboto', sans-serif
- **Pesos**: 300 (Light), 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)

### Escala Tipográfica
- **H1**: 48px / 3rem - Bold
- **H2**: 36px / 2.25rem - SemiBold
- **H3**: 30px / 1.875rem - SemiBold
- **H4**: 24px / 1.5rem - Medium
- **H5**: 20px / 1.25rem - Medium
- **H6**: 18px / 1.125rem - Medium
- **Body Large**: 18px / 1.125rem - Regular
- **Body**: 16px / 1rem - Regular
- **Body Small**: 14px / 0.875rem - Regular
- **Caption**: 12px / 0.75rem - Regular

## Componentes

### Botões

#### Botão Primário (Verde Nutri)
```css
background: #6B8E23;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;
transition: all 0.2s ease;

hover: background: #557a1c;
       transform: translateY(-2px);
       box-shadow: 0 4px 12px rgba(107, 142, 35, 0.3);
```

#### Botão Secundário (Azul Chat)
```css
background: #4A90E2;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 8px;
font-weight: 600;

hover: background: #3b73b5;
       transform: translateY(-2px);
```

#### Botão Outline
```css
background: transparent;
color: #6B8E23;
border: 2px solid #6B8E23;
padding: 10px 22px;
border-radius: 8px;
font-weight: 600;

hover: background: #6B8E23; 
       color: #FFFFFF;
       transform: translateY(-1px);
```

#### Botão WhatsApp
```css
background: #25D366;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 25px;
font-weight: 600;

hover: background: #1FAD4E;
```

### Cards

#### Card Base (Fundo Branco)
```css
background: #FFFFFF;
border-radius: 12px;
box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
border: 1px solid #F3F4F6;
padding: 24px;
transition: all 0.2s ease;

hover: transform: translateY(-4px);
       box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
```

#### Card de Funcionalidade
```css
text-align: center;
padding: 32px 24px;
background: white;

.icon {
  width: 64px;
  height: 64px;
  margin: 0 auto 16px;
  background: linear-gradient(135deg, #6B8E23, #4A90E2);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon svg {
  color: white;
  width: 32px;
  height: 32px;
}
```

### Formulários

#### Input Field
```css
border: 2px solid #E2E8F0;
border-radius: 8px;
padding: 12px 16px;
font-size: 16px;
transition: border-color 0.2s ease;

focus: border-color: #6B8E23;
        outline: none;
        box-shadow: 0 0 0 3px rgba(107, 142, 35, 0.1);
```

#### Label
```css
font-weight: 500;
margin-bottom: 8px;
color: #2D3748;
```

### Layout

#### Hero Section (Fundo Branco + Gradiente Sutil)
```css
background: linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%);
padding: 80px 0;
min-height: 100vh;
display: flex;
align-items: center;

.hero-title {
  color: #1F2937;
  font-size: clamp(28px, 5vw, 48px);
  font-weight: 700;
  line-height: 1.2;
}

.hero-subtitle {
  color: #4B5563;
  font-size: clamp(16px, 3vw, 20px);
  margin: 24px 0 40px;
  max-width: 600px;
}
```

#### Section com Fundo Colorido
```css
/* Verde para CTAs */
.cta-section {
  background: linear-gradient(135deg, #6B8E23 0%, #557a1c 100%);
  color: white;
  padding: 80px 0;
}

/* Azul para features tech */
.tech-section {
  background: linear-gradient(135deg, #4A90E2 0%, #2c5688 100%);
  color: white;
  padding: 60px 0;
}

/* Neutro para conteúdo */
.content-section {
  background: #FFFFFF;
  padding: 80px 0;
  border-bottom: 1px solid #F3F4F6;
}
```

#### Grid System
- 12 colunas
- Gap: 24px
- Breakpoints:
  - Mobile: < 768px
  - Tablet: 768px - 1024px
  - Desktop: > 1024px

## Ícones

### Estilo
- **Biblioteca**: Lucide React ou Heroicons
- **Estilo**: Outline com peso 2px
- **Tamanhos**: 16px, 20px, 24px, 32px, 48px

### Ícones Principais
- WhatsApp: Logo oficial
- Nutrição: Folha/Maçã
- Dashboard: Gráfico de barras
- Tempo: Relógio
- Segurança: Escudo
- Responsivo: Dispositivos

## Espaçamento

### Sistema 8px
- **xs**: 4px
- **sm**: 8px
- **md**: 16px
- **lg**: 24px
- **xl**: 32px
- **2xl**: 48px
- **3xl**: 64px
- **4xl**: 96px

## Animações

### Transições Base
```css
transition-duration: 0.2s;
transition-timing-function: ease-in-out;
```

### Micro-interações
- Hover em botões: scale(1.02)
- Cards: translateY(-4px)
- Links: underline animation
- Loading: spin animation

### Animações de Entrada
- Fade in: opacity 0 → 1
- Slide up: translateY(20px) → 0
- Scale in: scale(0.95) → 1

## Acessibilidade

### Contraste
- Texto principal: 4.5:1 mínimo
- Texto grande: 3:1 mínimo
- Elementos interativos: 3:1 mínimo

### Focus States
- Outline visível em todos os elementos interativos
- Cor do focus: #6B8E23
- Espessura: 2px

### Estados de Componentes
- Default
- Hover
- Focus
- Active
- Disabled

## Responsive Design

### Breakpoints
```css
/* Mobile First */
.container {
  width: 100%;
  padding: 0 16px;
}

/* Tablet */
@media (min-width: 768px) {
  .container {
    padding: 0 32px;
  }
}

/* Desktop */
@media (min-width: 1024px) {
  .container {
    max-width: 1200px;
    padding: 0 48px;
  }
}
```

### Comportamento Mobile
- Menu hambúrguer
- Botões touch-friendly (44px mínimo)
- Scroll horizontal evitado
- Imagens otimizadas
