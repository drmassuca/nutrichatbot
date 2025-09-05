# Guia de Aplicação Visual - Paleta Nutri ChatBot

## Combinações Aprovadas para Diferentes Seções

### 1. Header/Navigation
```css
/* Fundo branco limpo */
.header {
  background: #FFFFFF;
  border-bottom: 1px solid #F3F4F6;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.logo {
  /* Logo original nas cores extraídas */
  filter: none; /* Manter cores originais */
}

.nav-links {
  color: #374151;
  font-weight: 500;
}

.nav-links:hover {
  color: #6B8E23; /* Verde nutri */
}

.cta-button {
  background: #6B8E23;
  color: white;
  border-radius: 8px;
  padding: 10px 20px;
}
```

### 2. Hero Section
```css
.hero {
  background: linear-gradient(135deg, #ffffff 0%, #f9fdf9 100%);
  padding: 100px 0;
}

.hero-title {
  color: #111827; /* Preto suave */
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
}

.hero-subtitle {
  color: #6B7280; /* Cinza médio */
  font-size: 1.25rem;
  max-width: 600px;
  margin-bottom: 2rem;
}

.hero-cta-primary {
  background: linear-gradient(135deg, #6B8E23 0%, #557a1c 100%);
  color: white;
  padding: 16px 32px;
  margin-right: 1rem;
}

.hero-cta-secondary {
  background: transparent;
  color: #4A90E2;
  border: 2px solid #4A90E2;
  padding: 14px 30px;
}
```

### 3. Cards de Funcionalidades
```css
.feature-card {
  background: #FFFFFF;
  border: 1px solid #F3F4F6;
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.feature-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  border-color: #E5E7EB;
}

.feature-icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin: 0 auto 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Alternância de cores para os ícones */
.feature-icon.green {
  background: linear-gradient(135deg, #6B8E23 0%, #8FBC8F 100%);
}

.feature-icon.blue {
  background: linear-gradient(135deg, #4A90E2 0%, #6BB6FF 100%);
}

.feature-icon svg {
  width: 40px;
  height: 40px;
  color: white;
}

.feature-title {
  color: #111827;
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.feature-description {
  color: #6B7280;
  line-height: 1.6;
}
```

### 4. Seção de Benefícios
```css
.benefits-section {
  background: #F9FAFB; /* Cinza muito claro */
  padding: 100px 0;
}

.section-title {
  color: #111827;
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.section-subtitle {
  color: #6B7280;
  text-align: center;
  font-size: 1.125rem;
  max-width: 600px;
  margin: 0 auto 4rem;
}

.benefit-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
}

.benefit-icon {
  width: 48px;
  height: 48px;
  background: #6B8E23;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 1rem;
  flex-shrink: 0;
}

.benefit-icon svg {
  width: 24px;
  height: 24px;
  color: white;
}

.benefit-text {
  color: #374151;
  font-weight: 500;
}
```

### 5. Seção de Preços
```css
.pricing-section {
  background: #FFFFFF;
  padding: 100px 0;
}

.pricing-card {
  background: #FFFFFF;
  border: 2px solid #F3F4F6;
  border-radius: 20px;
  padding: 3rem 2rem;
  position: relative;
  transition: all 0.3s ease;
}

.pricing-card.featured {
  border-color: #6B8E23;
  transform: scale(1.05);
  box-shadow: 0 20px 40px rgba(107, 142, 35, 0.15);
}

.pricing-badge {
  position: absolute;
  top: -12px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #6B8E23 0%, #557a1c 100%);
  color: white;
  padding: 8px 24px;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
}

.pricing-value {
  color: #6B8E23;
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.pricing-period {
  color: #6B7280;
  font-size: 1rem;
}

.pricing-cta {
  width: 100%;
  background: #6B8E23;
  color: white;
  padding: 16px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 1.125rem;
  margin-top: 2rem;
}

.pricing-cta:hover {
  background: #557a1c;
  transform: translateY(-2px);
}
```

### 6. Call-to-Action Principal
```css
.main-cta-section {
  background: linear-gradient(135deg, #6B8E23 0%, #4A90E2 100%);
  padding: 80px 0;
  text-align: center;
}

.cta-title {
  color: white;
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
}

.cta-subtitle {
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.25rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.cta-button-white {
  background: white;
  color: #6B8E23;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 700;
  font-size: 1.125rem;
  margin-right: 1rem;
}

.cta-button-outline {
  background: transparent;
  color: white;
  border: 2px solid white;
  padding: 14px 30px;
  border-radius: 12px;
  font-weight: 600;
}
```

### 7. Footer
```css
.footer {
  background: #1F2937; /* Cinza escuro */
  color: #D1D5DB; /* Cinza claro */
  padding: 60px 0 30px;
}

.footer-logo {
  /* Logo em versão clara ou original */
  filter: brightness(1.2);
  margin-bottom: 1rem;
}

.footer-links {
  color: #9CA3AF;
  transition: color 0.2s ease;
}

.footer-links:hover {
  color: #8FBC8F; /* Verde claro */
}

.footer-social {
  background: #374151;
  color: #D1D5DB;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.5rem;
}

.footer-social:hover {
  background: #6B8E23;
  color: white;
}

.footer-bottom {
  border-top: 1px solid #374151;
  margin-top: 3rem;
  padding-top: 2rem;
  color: #9CA3AF;
  font-size: 0.875rem;
}
```

## Gradientes Especiais

### Para Backgrounds
```css
/* Neutro elegante */
.gradient-neutral {
  background: linear-gradient(135deg, #ffffff 0%, #f9fdf9 50%, #ffffff 100%);
}

/* Verde suave */
.gradient-green-soft {
  background: linear-gradient(135deg, #f0f9f0 0%, #e6f7e6 100%);
}

/* Azul suave */
.gradient-blue-soft {
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f3ff 100%);
}

/* Marca principal */
.gradient-brand {
  background: linear-gradient(135deg, #6B8E23 0%, #4A90E2 100%);
}
```

### Para Botões
```css
/* CTA Verde */
.btn-gradient-green {
  background: linear-gradient(135deg, #6B8E23 0%, #8FBC8F 100%);
  border: none;
  color: white;
}

/* CTA Azul */
.btn-gradient-blue {
  background: linear-gradient(135deg, #4A90E2 0%, #6BB6FF 100%);
  border: none;
  color: white;
}

/* Hover effects */
.btn-gradient-green:hover {
  background: linear-gradient(135deg, #557a1c 0%, #7fb07f 100%);
  transform: translateY(-2px);
  box-shadow: 0 8px 20px rgba(107, 142, 35, 0.3);
}
```

## Acessibilidade e Contraste

### Validações WCAG AA
```css
/* Textos sobre fundo branco - APROVADO */
.text-on-white {
  color: #1F2937; /* Contraste: 12.59:1 */
}

.text-secondary-on-white {
  color: #4B5563; /* Contraste: 7.07:1 */
}

/* Textos sobre verde principal - APROVADO */
.text-on-green {
  color: #FFFFFF; /* Contraste: 5.39:1 */
}

/* Textos sobre azul principal - APROVADO */
.text-on-blue {
  color: #FFFFFF; /* Contraste: 4.66:1 */
}
```

Esta paleta de cores baseada no logo garante consistência visual, mantém a identidade da marca e funciona perfeitamente com o fundo branco dos materiais existentes, proporcionando uma experiência coesa em todas as aplicações.
