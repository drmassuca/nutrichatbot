import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Icon,
  useColorModeValue,
  Button,
  Image,
  Divider,
  List,
  ListItem,
  ListIcon,
  Badge,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaWhatsapp, 
  FaRobot, 
  FaClipboardList, 
  FaChartLine, 
  FaUserMd,
  FaShieldAlt,
  FaCheck,
  FaMobile,
  FaDatabase,
  FaFileAlt,
  FaBell,
  FaSync,
  FaHeartbeat
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import PropTypes from 'prop-types';

const MotionBox = motion(Box);
const MotionStack = motion(VStack);

const FeatureCard = ({ icon, title, description, features, delay = 0, isHighlight = false }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const highlightBg = useColorModeValue('brand.50', 'brand.900');
  const highlightBorder = useColorModeValue('brand.200', 'brand.600');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      bg={isHighlight ? highlightBg : bg}
      p={8}
      rounded="xl"
      border="2px"
      borderColor={isHighlight ? highlightBorder : borderColor}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '2xl',
      }}
      sx={{
        transition: 'all 0.3s ease',
      }}
      position="relative"
    >
      {isHighlight && (
        <Badge
          position="absolute"
          top="-10px"
          left="50%"
          transform="translateX(-50%)"
          colorScheme="brand"
          px={4}
          py={1}
          borderRadius="full"
        >
          Mais Popular
        </Badge>
      )}
      
      <VStack spacing={6} align="start">
        <HStack>
          <Icon
            as={icon}
            w={12}
            h={12}
            color={isHighlight ? "brand.600" : "brand.500"}
            p={2}
            bg={isHighlight ? "brand.100" : "brand.50"}
            rounded="full"
          />
          <Heading size="lg" color="gray.800">
            {title}
          </Heading>
        </HStack>
        
        <Text color="gray.600" fontSize="md" lineHeight="1.6">
          {description}
        </Text>
        
        <List spacing={2} w="full">
          {features.map((feature, index) => (
            <ListItem key={index} fontSize="sm" color="gray.700">
              <ListIcon as={FaCheck} color="brand.500" />
              {feature}
            </ListItem>
          ))}
        </List>
      </VStack>
    </MotionBox>
  );
};

FeatureCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
  isHighlight: PropTypes.bool,
};

const ProcessStep = ({ number, title, description, details, delay = 0 }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
    >
      <HStack spacing={6} align="start">
        <Box
          w={12}
          h={12}
          bg="brand.500"
          color="white"
          borderRadius="full"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="xl"
          fontWeight="bold"
          flexShrink={0}
        >
          {number}
        </Box>
        <VStack spacing={3} align="start" flex={1}>
          <Heading size="md" color="gray.800">
            {title}
          </Heading>
          <Text color="gray.600" fontSize="md">
            {description}
          </Text>
          <List spacing={1}>
            {details.map((detail, index) => (
              <ListItem key={index} fontSize="sm" color="gray.500">
                <ListIcon as={FaCheck} color="brand.400" />
                {detail}
              </ListItem>
            ))}
          </List>
        </VStack>
      </HStack>
    </MotionBox>
  );
};

ProcessStep.propTypes = {
  number: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  details: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
};

const Funcionalidades = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  const features = [
    {
      icon: FaRobot,
      title: "IA Conversacional Avançada",
      description: "Chatbot inteligente que simula uma conversa natural com o paciente, coletando dados de forma humanizada e eficiente.",
      features: [
        "Perguntas contextuais e adaptativas",
        "Reconhecimento de padrões alimentares",
        "Análise de respostas em tempo real",
        "Sugestões automáticas personalizadas"
      ],
      isHighlight: true
    },
    {
      icon: FaClipboardList,
      title: "Anamnese Automatizada",
      description: "Coleta completa do histórico de saúde, hábitos alimentares e objetivos do paciente antes da consulta.",
      features: [
        "Formulário dinâmico personalizado",
        "Histórico médico estruturado", 
        "Avaliação de sintomas e alergias",
        "Registro de medicamentos e suplementos"
      ]
    },
    {
      icon: FaDatabase,
      title: "Prontuário Digital Completo",
      description: "Organização automática dos dados coletados em prontuário digital compatível com normas do CFN.",
      features: [
        "Estrutura compatível com CFN",
        "Exportação em PDF e Excel",
        "Histórico de evolução do paciente",
        "Backup automático em nuvem"
      ]
    },
    {
      icon: FaChartLine,
      title: "Análise Nutricional Inteligente",
      description: "Avaliação automática dos dados coletados com sugestões baseadas em evidências científicas.",
      features: [
        "Cálculo automático de necessidades",
        "Análise de padrões alimentares",
        "Identificação de deficiências",
        "Relatórios visuais interativos"
      ]
    },
    {
      icon: FaBell,
      title: "Acompanhamento 24h",
      description: "Monitoramento contínuo da rotina alimentar do paciente com notificações e lembretes personalizados.",
      features: [
        "Diário alimentar automático",
        "Lembretes de refeições",
        "Controle de hidratação",
        "Notificações de progresso"
      ]
    },
    {
      icon: FaShieldAlt,
      title: "Segurança e Conformidade",
      description: "Proteção total dos dados com conformidade LGPD e normas de segurança médica.",
      features: [
        "Criptografia end-to-end",
        "Conformidade com LGPD",
        "Backup seguro dos dados",
        "Auditoria de acesso"
      ]
    }
  ];

  const processSteps = [
    {
      number: "1",
      title: "Configuração Inicial",
      description: "Configure o chatbot com suas preferências e especialidades nutricionais.",
      details: [
        "Personalização das perguntas por especialidade",
        "Configuração de horários de atendimento",
        "Definição de fluxos específicos",
        "Integração com agenda existente"
      ]
    },
    {
      number: "2", 
      title: "Distribuição do Link",
      description: "Compartilhe o link personalizado do seu chatbot através dos seus canais de comunicação.",
      details: [
        "Link único para cada nutricionista",
        "QR Code para facilitar acesso",
        "Integração com redes sociais",
        "Monitoramento de origem dos pacientes"
      ]
    },
    {
      number: "3",
      title: "Triagem Automatizada",
      description: "O chatbot realiza a anamnese completa e organiza os dados automaticamente.",
      details: [
        "Conversa natural via WhatsApp",
        "Coleta de dados estruturada",
        "Validação automática de informações",
        "Agendamento integrado da consulta"
      ]
    },
    {
      number: "4",
      title: "Consulta Otimizada",
      description: "Acesse o prontuário completo e foque na orientação nutricional personalizada.",
      details: [
        "Dados organizados e prontos para análise",
        "Economia de 40 minutos por consulta",
        "Foco na orientação terapêutica",
        "Maior satisfação do paciente"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Funcionalidades - Nutri ChatBot | IA Avançada para Nutricionistas"
        description="Descubra todas as funcionalidades do Nutri ChatBot: IA conversacional, anamnese automatizada, prontuário digital, análise nutricional e acompanhamento 24h."
        keywords="chatbot nutricionista, IA nutricional, anamnese automatizada, prontuário digital, triagem pacientes, WhatsApp nutrição"
        url="/funcionalidades"
      />

      {/* Hero Section */}
      <Box 
        bg={heroBg}
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={12} alignItems="center">
            {/* Left Content */}
            <MotionStack
              spacing={6}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                as="h1"
                size={{ base: '2xl', md: '3xl' }}
                lineHeight="1.2"
                color="gray.900"
                fontWeight="700"
              >
                Funcionalidades que{' '}
                <Text as="span" color="brand.500">
                  revolucionam
                </Text>{' '}
                sua prática nutricional
              </Heading>

              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                lineHeight="1.6"
              >
                Uma suíte completa de ferramentas alimentadas por inteligência artificial 
                para automatizar, organizar e otimizar todos os aspectos do seu atendimento nutricional.
              </Text>

              <HStack spacing={6} flexWrap="wrap">
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                    6+
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Funcionalidades principais
                  </Text>
                </VStack>
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
                    24/7
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Disponibilidade
                  </Text>
                </VStack>
              </HStack>

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
                Experimente todas as funcionalidades
              </Button>
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
                alt="Interface do Nutri ChatBot mostrando funcionalidades"
                maxW="400px"
                w="full"
                h="auto"
                borderRadius="20px"
                boxShadow="2xl"
              />
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Main Features Section */}
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
                Funcionalidades Principais
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Tecnologia de ponta aplicada à nutrição para profissionais que buscam excelência
              </Text>
            </MotionStack>

            {/* Features Grid */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  features={feature.features}
                  isHighlight={feature.isHighlight}
                  delay={index * 0.1}
                />
              ))}
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
                Como as Funcionalidades Trabalham Juntas
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="700px">
                Um fluxo integrado e otimizado que conecta todas as funcionalidades 
                para máxima eficiência no seu atendimento
              </Text>
            </MotionStack>

            {/* Process Steps */}
            <VStack spacing={12} w="full" maxW="800px">
              {processSteps.map((step, index) => (
                <Box key={index} w="full">
                  <ProcessStep
                    number={step.number}
                    title={step.title}
                    description={step.description}
                    details={step.details}
                    delay={index * 0.2}
                  />
                  {index < processSteps.length - 1 && (
                    <Divider mt={6} borderColor="gray.300" />
                  )}
                </Box>
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* Technical Specs Section */}
      <Box py={20} bg="white">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            {/* Left Content */}
            <MotionStack
              spacing={6}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="xl" color="gray.900">
                Especificações Técnicas
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Tecnologia robusta e confiável para suportar sua prática profissional
              </Text>
              
              <VStack spacing={4} align="start">
                <HStack>
                  <Icon as={FaMobile} color="brand.500" />
                  <Text><strong>Plataforma:</strong> WhatsApp Business API</Text>
                </HStack>
                <HStack>
                  <Icon as={FaDatabase} color="brand.500" />
                  <Text><strong>Armazenamento:</strong> Cloud seguro com backup automático</Text>
                </HStack>
                <HStack>
                  <Icon as={FaSync} color="brand.500" />
                  <Text><strong>Sincronização:</strong> Tempo real entre dispositivos</Text>
                </HStack>
                <HStack>
                  <Icon as={FaFileAlt} color="brand.500" />
                  <Text><strong>Exportação:</strong> PDF, Excel, integração com sistemas</Text>
                </HStack>
                <HStack>
                  <Icon as={FaHeartbeat} color="brand.500" />
                  <Text><strong>Uptime:</strong> 99.9% de disponibilidade garantida</Text>
                </HStack>
              </VStack>
            </MotionStack>

            {/* Right Content */}
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              bg="brand.50"
              p={8}
              borderRadius="xl"
            >
              <VStack spacing={6}>
                <Heading size="lg" color="brand.700" textAlign="center">
                  Conformidade e Segurança
                </Heading>
                
                <SimpleGrid columns={2} spacing={4} w="full">
                  <VStack spacing={2}>
                    <Icon as={FaShieldAlt} w={8} h={8} color="brand.500" />
                    <Text fontSize="sm" textAlign="center" fontWeight="600">
                      LGPD Compliant
                    </Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaUserMd} w={8} h={8} color="brand.500" />
                    <Text fontSize="sm" textAlign="center" fontWeight="600">
                      Normas CFN
                    </Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaDatabase} w={8} h={8} color="brand.500" />
                    <Text fontSize="sm" textAlign="center" fontWeight="600">
                      Criptografia SSL
                    </Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Icon as={FaFileAlt} w={8} h={8} color="brand.500" />
                    <Text fontSize="sm" textAlign="center" fontWeight="600">
                      Backup Automático
                    </Text>
                  </VStack>
                </SimpleGrid>
                
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Todos os dados são protegidos com os mais altos padrões de segurança 
                  da indústria e em conformidade com a legislação brasileira.
                </Text>
              </VStack>
            </MotionBox>
          </SimpleGrid>
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
              Pronto para experimentar todas essas funcionalidades?
            </Heading>
            <Text fontSize="xl" maxW="600px" mx="auto" opacity={0.9}>
              Teste todas as funcionalidades do Nutri ChatBot por 7 dias gratuitamente 
              e veja como elas podem transformar sua prática nutricional.
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
                as="a"
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                variant="outline"
                borderColor="white"
                color="white"
                leftIcon={<FaWhatsapp />}
                px={8}
                py={6}
                fontSize="lg"
                _hover={{ 
                  transform: 'translateY(-2px)',
                  bg: 'whiteAlpha.200'
                }}
              >
                Fale com especialista
              </Button>
            </HStack>

            {/* Guarantee */}
            <Text fontSize="sm" opacity={0.8} mt={4}>
              ✅ Acesso completo por 7 dias • Sem cartão de crédito • Suporte incluído
            </Text>
          </MotionStack>
        </Container>
      </Box>
    </>
  );
};

export default Funcionalidades;