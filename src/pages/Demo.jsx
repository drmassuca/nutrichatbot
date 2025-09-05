import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SEO from '../components/seo/SEO';

const Demo = () => {
  return (
    <>
      <SEO 
        title="Demo Gratuita do Nutri ChatBot"
        description="Teste o Nutri ChatBot gratuitamente por 7 dias. Veja como funciona nossa IA nutricional na prática."
        url="/demo"
      />
      <Box py={20}>
        <Container maxW="1200px">
          <Heading mb={8} size="2xl" textAlign="center">
            Demo Gratuita
          </Heading>
          <Text fontSize="xl" textAlign="center" color="gray.600">
            Página em desenvolvimento... 🚧
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Demo;
