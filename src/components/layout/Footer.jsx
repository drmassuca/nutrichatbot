import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  VisuallyHidden,
  chakra,
  useColorModeValue,
  Image,
  HStack,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded="full"
      w={10}
      h={10}
      cursor="pointer"
      as="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      display="inline-flex"
      alignItems="center"
      justifyContent="center"
      transition="background 0.3s ease"
      _hover={{
        bg: 'brand.500',
        color: 'white',
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

SocialButton.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

const Footer = () => {
  const bg = useColorModeValue('gray.50', 'gray.900');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box bg={bg} borderTop="1px" borderColor={borderColor}>
      <Container as={Stack} maxW="1200px" py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 1fr' }}
          spacing={8}
        >
          {/* Logo e Descrição */}
          <Stack spacing={6}>
            <Box>
              <Image
                src="/images/logoicon.webp"
                alt="Nutri ChatBot"
                h="40px"
                w="auto"
                fallback={
                  <Text fontSize="lg" fontWeight="bold" color="brand.500">
                    Nutri ChatBot
                  </Text>
                }
              />
            </Box>
            <Text fontSize="sm" color="gray.600" maxW="300px">
              A sua versão nutricionista virtual, disponível 24h. 
              Automatize a triagem de pacientes e otimize suas consultas com IA.
            </Text>
            <Stack direction="row" spacing={6}>
              <SocialButton label="Instagram" href="https://instagram.com/nutrichatbot">
                <FaInstagram />
              </SocialButton>
              <SocialButton label="LinkedIn" href="https://linkedin.com/company/nutrichatbot">
                <FaLinkedin />
              </SocialButton>
              <SocialButton label="WhatsApp" href="https://wa.me/5511999999999">
                <FaWhatsapp />
              </SocialButton>
            </Stack>
          </Stack>

          {/* Produto */}
          <Stack align="flex-start">
            <Text fontWeight="600" fontSize="md" mb={2}>
              Produto
            </Text>
            <Link as={RouterLink} to="/funcionalidades" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Funcionalidades
            </Link>
            <Link as={RouterLink} to="/beneficios" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Benefícios
            </Link>
            <Link as={RouterLink} to="/precos" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Preços
            </Link>
            <Link as={RouterLink} to="/demo" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Demo Gratuita
            </Link>
          </Stack>

          {/* Empresa */}
          <Stack align="flex-start">
            <Text fontWeight="600" fontSize="md" mb={2}>
              Empresa
            </Text>
            <Link as={RouterLink} to="/sobre" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Sobre Nós
            </Link>
            <Link as={RouterLink} to="/contato" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Contato
            </Link>
            <Link href="/blog" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Blog
            </Link>
            <Link href="/carreiras" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Carreiras
            </Link>
          </Stack>

          {/* Suporte */}
          <Stack align="flex-start">
            <Text fontWeight="600" fontSize="md" mb={2}>
              Suporte
            </Text>
            <Link href="/ajuda" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Central de Ajuda
            </Link>
            <Link href="/termos" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Termos de Uso
            </Link>
            <Link href="/privacidade" fontSize="sm" color="gray.600" _hover={{ color: 'brand.500' }}>
              Privacidade
            </Link>
            <Link 
              href="https://wa.me/5511999999999" 
              fontSize="sm" 
              color="gray.600" 
              _hover={{ color: 'brand.500' }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Suporte WhatsApp
            </Link>
          </Stack>
        </SimpleGrid>

        <Divider my={6} />

        {/* Bottom Section */}
        <VStack spacing={4}>
          {/* Compliance CFN */}
          <Text fontSize="xs" color="gray.500" textAlign="center" maxW="600px">
            O Nutri ChatBot é compatível com a prática de e-Nutrição regulamentada pelo CFN 
            (Resolução nº 680/2021). Desenvolvido para nutricionistas que buscam modernizar 
            e otimizar seus atendimentos.
          </Text>

          {/* Copyright */}
          <HStack
            justify="space-between"
            w="full"
            flexDirection={{ base: 'column', md: 'row' }}
            gap={{ base: 2, md: 0 }}
          >
            <Text fontSize="sm" color="gray.600">
              © 2025 Futuro Local. Todos os direitos reservados.
            </Text>
            <HStack spacing={4} fontSize="sm">
              <Text color="gray.500">
                Feito com ❤️ para nutricionistas
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Footer;
