import { Box, Container, Heading, Text } from '@chakra-ui/react';
import SEO from '../components/seo/SEO';

const Features = () => {
  return (
    <>
      <SEO 
        title="Funcionalidades do Nutri ChatBot"
        description="Descubra todas as funcionalidades do Nutri ChatBot: triagem automatizada, prontuário digital, feedback de refeições e muito mais."
        url="/funcionalidades"
      />
      <Box py={20}>
        <Container maxW="1200px">
          <Heading mb={8} size="2xl" textAlign="center">
            Funcionalidades
          </Heading>
          <Text fontSize="xl" textAlign="center" color="gray.600">
            Página em desenvolvimento... 🚧
          </Text>
        </Container>
      </Box>
    </>
  );
};

export default Features;
