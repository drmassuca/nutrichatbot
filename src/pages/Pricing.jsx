import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SEO from '../components/seo/SEO';

const Pricing = () => {
  return (
    <>
      <SEO 
        title="Preços do Nutri ChatBot"
        description="Planos do Nutri ChatBot: R$ 49,99/mês com teste gratuito de 7 dias. Invista no futuro da sua prática nutricional."
        url="/precos"
      />
      <Box py={20}>
        <Container maxW="1200px">
          <Heading mb={8} size="2xl" textAlign="center">
            Preços
          </Heading>
          <Text fontSize="xl" textAlign="center" color="gray.600">
            Página em desenvolvimento... 🚧
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Pricing;
