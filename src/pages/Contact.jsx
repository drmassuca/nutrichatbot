import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SEO from '../components/seo/SEO';

const Contact = () => {
  return (
    <>
      <SEO 
        title="Contato - Nutri ChatBot"
        description="Entre em contato com a equipe do Nutri ChatBot. Tire suas dúvidas e solicite uma demonstração personalizada."
        url="/contato"
      />
      <Box py={20}>
        <Container maxW="1200px">
          <Heading mb={8} size="2xl" textAlign="center">
            Contato
          </Heading>
          <Text fontSize="xl" textAlign="center" color="gray.600">
            Página em desenvolvimento... 🚧
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
