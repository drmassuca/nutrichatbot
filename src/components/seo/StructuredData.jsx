import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

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

StructuredData.propTypes = {
  type: PropTypes.string.isRequired,
  data: PropTypes.object.isRequired
};

// Schema específico para o Nutri ChatBot
export const NutriChatBotAppSchema = () => (
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

export const OrganizationSchema = () => (
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

export const ServiceSchema = () => (
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

export const FAQSchema = () => (
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
        },
        {
          '@type': 'Question',
          name: 'Preciso de conhecimento técnico para usar?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Não! O Nutri ChatBot foi desenvolvido para ser simples e intuitivo. Oferecemos suporte completo na configuração inicial.'
          }
        },
        {
          '@type': 'Question',
          name: 'Como funciona o teste gratuito?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Você pode testar todas as funcionalidades por 7 dias sem custo. Não é necessário cartão de crédito para começar.'
          }
        }
      ]
    }}
  />
);

export default StructuredData;
