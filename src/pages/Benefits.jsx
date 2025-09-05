import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SEO from '../components/seo/SEO';

const Benefits = () => {
  return (
    <>
      <SEO 
        title="Benefícios do Nutri ChatBot"
        description="Conheça os benefícios do Nutri ChatBot: economia de tempo, dados assertivos, modernização da prática nutricional."
        url="/beneficios"
      />
      <Box py={20}>
        <Container maxW="1200px">
          <Heading mb={8} size="2xl" textAlign="center">
            Benefícios
          </Heading>
          <Text fontSize="xl" textAlign="center" color="gray.600">
            Página em desenvolvimento... 🚧
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Benefits;
