import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  Image,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { FaWhatsapp, FaRocket, FaClock, FaShieldAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import { FAQSchema } from '../components/seo/StructuredData';
import { generateWhatsAppUrl } from '../config/whatsapp';
import PropTypes from 'prop-types';

const MotionBox = motion(Box);
const MotionStack = motion(VStack);

const FeatureCard = ({ icon, title, description, delay = 0 }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      bg={bg}
      p={6}
      rounded="xl"
      border="1px"
      borderColor={borderColor}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: 'xl',
      }}
      sx={{
        transition: 'all 0.3s ease',
      }}
    >
      <VStack spacing={4}>
        <Icon
          as={icon}
          w={12}
          h={12}
          color="brand.500"
          p={2}
          bg="brand.50"
          rounded="full"
        />
        <Heading size="md" textAlign="center" color="gray.800">
          {title}
        </Heading>
        <Text textAlign="center" color="gray.600" fontSize="sm">
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const Home = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  return (
    <>
      <SEO 
        title="Nutri ChatBot - A sua versão nutricionista virtual, disponível 24h"
        description="Assistente nutricional com IA para WhatsApp que automatiza triagem de pacientes, organiza dados nutricionais e otimiza consultas. Teste grátis por 7 dias."
        keywords="nutricionista, chatbot, whatsapp, triagem pacientes, IA nutricional, automação consulta, prontuário digital"
        url="/"
      />
      <FAQSchema />

      {/* Hero Section */}
      <Box 
        bg={heroBg}
        minH="100vh"
        display="flex"
        alignItems="center"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px" py={{ base: 20, md: 28 }}>
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10} alignItems="center">
            {/* Left Content */}
            <MotionStack
              spacing={6}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                as="h1"
                size={{ base: '2xl', md: '3xl', lg: '4xl' }}
                lineHeight="1.2"
                color="gray.900"
                fontWeight="700"
              >
                A sua versão{' '}
                <Text as="span" color="brand.500">
                  nutricionista virtual
                </Text>
                , disponível 24h
              </Heading>

              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                maxW="500px"
                lineHeight="1.6"
              >
                O Nutri ChatBot é um assistente nutricional inteligente que realiza 
                a triagem completa dos seus pacientes antes da consulta, organiza os 
                dados em um prontuário digital e acompanha a rotina alimentar 24h por dia, 
                direto no WhatsApp.
              </Text>

              <Text 
                fontSize="lg"
                color="brand.600"
                fontWeight="600"
                fontStyle="italic"
              >
                &ldquo;Otimize suas consultas, fidelize seus pacientes e economize tempo com inteligência artificial.&rdquo;
              </Text>

              {/* CTAs */}
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to="/demo"
                  size="lg"
                  colorScheme="brand"
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{ transform: 'translateY(-2px)' }}
                  boxShadow="lg"
                >
                  Experimente grátis por 7 dias
                </Button>
                <Button
                  as="a"
                  href={generateWhatsAppUrl('home')}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant="outline"
                  colorScheme="brand"
                  leftIcon={<FaWhatsapp />}
                  px={8}
                  py={6}
                  fontSize="lg"
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  Agende uma demonstração
                </Button>
              </HStack>

              {/* Trust Indicators */}
              <HStack spacing={6} pt={4}>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                    40min
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Economia por consulta
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                    24h
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Disponibilidade
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                    7 dias
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Teste gratuito
                  </Text>
                </VStack>
              </HStack>
            </MotionStack>

            {/* Right Content - Mockup */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              display="flex"
              justifyContent="center"
            >
              <Image
                src="/img/mockup.webp"
                alt="Nutri ChatBot WhatsApp Interface"
                maxW="400px"
                w="full"
                h="auto"
                borderRadius="20px"
                boxShadow="2xl"
                fallback={
                  <Box
                    w="300px"
                    h="500px"
                    bg="gray.100"
                    borderRadius="20px"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    flexDirection="column"
                    gap={4}
                  >
                    <FaWhatsapp size="60px" color="#25D366" />
                    <Text color="gray.600" textAlign="center" px={4}>
                      Mockup do WhatsApp com Nutri ChatBot em ação
                    </Text>
                  </Box>
                }
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Features Section */}
      <Box py={20} bg="white">
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Section Header */}
            <MotionStack
              spacing={4}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Por que escolher o Nutri ChatBot?
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Uma solução completa que revoluciona a forma como você atende seus pacientes
              </Text>
            </MotionStack>

            {/* Features Grid */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <FeatureCard
                icon={FaRocket}
                title="Automação Inteligente"
                description="Triagem completa automática via WhatsApp com perguntas personalizadas e coleta de dados estruturada"
                delay={0.1}
              />
              <FeatureCard
                icon={FaClock}
                title="Economia de Tempo"
                description="Economize até 40 minutos por consulta com dados já organizados e prontuário digital pronto"
                delay={0.2}
              />
              <FeatureCard
                icon={FaShieldAlt}
                title="Segurança Total"
                description="Dados protegidos, conformidade com LGPD e compatibilidade com normas do CFN"
                delay={0.3}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* How it Works Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Section Header */}
            <MotionStack
              spacing={4}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Como funciona em 3 passos simples
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Fluxo otimizado para máxima eficiência e melhor experiência
              </Text>
            </MotionStack>

            {/* Steps */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {[
                {
                  step: "1",
                  title: "Paciente recebe o link",
                  description: "Envie o link personalizado via WhatsApp, Instagram ou outras mídias sociais",
                },
                {
                  step: "2", 
                  title: "IA realiza a triagem",
                  description: "NutriBot coleta dados, realiza anamnese e organiza informações automaticamente",
                },
                {
                  step: "3",
                  title: "Consulta otimizada",
                  description: "Acesse prontuário completo e foque na orientação nutricional personalizada",
                }
              ].map((item, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  textAlign="center"
                >
                  <VStack spacing={4}>
                    <Box
                      w={16}
                      h={16}
                      bg="brand.500"
                      color="white"
                      borderRadius="full"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontSize="2xl"
                      fontWeight="bold"
                    >
                      {item.step}
                    </Box>
                    <Heading size="lg" color="gray.900">
                      {item.title}
                    </Heading>
                    <Text color="gray.600" maxW="250px">
                      {item.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box 
        py={20}
        bgGradient="linear(135deg, brand.500 0%, tech.500 100%)"
        color="white"
      >
        <Container maxW="1200px">
          <MotionStack
            spacing={8}
            textAlign="center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl">
              Pronto para revolucionar seus atendimentos?
            </Heading>
            <Text fontSize="xl" maxW="600px" mx="auto" opacity={0.9}>
              Junte-se a centenas de nutricionistas que já otimizaram suas consultas com o Nutri ChatBot
            </Text>
            <HStack spacing={4} justify="center" flexWrap="wrap">
              <Button
                as={RouterLink}
                to="/demo"
                size="lg"
                bg="white"
                color="brand.500"
                px={8}
                py={6}
                fontSize="lg"
                _hover={{ 
                  transform: 'translateY(-2px)',
                  bg: 'gray.50'
                }}
                boxShadow="lg"
              >
                Comece seu teste gratuito
              </Button>
              <Button
                as={RouterLink}
                to="/precos"
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                px={8}
                py={6}
                fontSize="lg"
                _hover={{ 
                  transform: 'translateY(-2px)',
                  bg: 'whiteAlpha.200'
                }}
              >
                Ver preços
              </Button>
            </HStack>

            {/* Guarantee */}
            <Text fontSize="sm" opacity={0.8} mt={4}>
              ✅ Teste gratuito por 7 dias • Sem cartão de crédito • Cancele quando quiser
            </Text>
          </MotionStack>
        </Container>
      </Box>
    </>
  );
};

export default Home;
