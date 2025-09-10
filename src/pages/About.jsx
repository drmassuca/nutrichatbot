import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  SimpleGrid,
  Icon,
  Avatar,
  Badge,
  useColorModeValue,
  Flex,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaRocket, 
  FaUsers, 
  FaShieldAlt, 
  FaBrain,
  FaAward,
  FaChartLine,
  FaClock,
  FaCheckCircle,
  FaHeart,
  FaLightbulb,
  FaCode,
  FaMedal,
  FaWhatsapp,
  FaLock,
  FaGraduationCap,
  FaStethoscope
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import SEO from '../components/seo/SEO';
import { generateWhatsAppUrl } from '../config/whatsapp';

const MotionBox = motion(Box);
const MotionStack = motion(VStack);

// Componente para Cards de Valores
const ValueCard = ({ icon, title, description, delay = 0 }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
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

ValueCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

// Componente para Cards da Equipe
const TeamCard = ({ name, role, avatar, description, delay = 0 }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
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
      textAlign="center"
    >
      <VStack spacing={4}>
        <Avatar
          size="xl"
          src={avatar}
          name={name}
          bg="brand.500"
          color="white"
        />
        <VStack spacing={1}>
          <Heading size="md" color="gray.800">
            {name}
          </Heading>
          <Badge colorScheme="brand" variant="subtle" fontSize="sm">
            {role}
          </Badge>
        </VStack>
        <Text color="gray.600" fontSize="sm">
          {description}
        </Text>
      </VStack>
    </MotionBox>
  );
};

TeamCard.propTypes = {
  name: PropTypes.string.isRequired,
  role: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  description: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

// Componente para Timeline
const TimelineItem = ({ year, title, description, isLast = false }) => {
  return (
    <Flex align="flex-start" position="relative">
      {/* Timeline Line */}
      {!isLast && (
        <Box
          position="absolute"
          left="19px"
          top="40px"
          bottom="-20px"
          w="2px"
          bg="brand.200"
        />
      )}
      
      {/* Timeline Dot */}
      <Box
        w="40px"
        h="40px"
        bg="brand.500"
        rounded="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexShrink={0}
        mr={6}
        zIndex={2}
      >
        <Text color="white" fontWeight="bold" fontSize="sm">
          {year}
        </Text>
      </Box>
      
      {/* Content */}
      <VStack align="flex-start" spacing={2} pb={8}>
        <Heading size="md" color="gray.800">
          {title}
        </Heading>
        <Text color="gray.600">
          {description}
        </Text>
      </VStack>
    </Flex>
  );
};

TimelineItem.propTypes = {
  year: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
};

const About = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  return (
    <>
      <SEO 
        title="Sobre o Nutri ChatBot - Inovação em Tecnologia Nutricional"
        description="Conheça nossa história, missão e valores. Somos pioneiros em IA para nutrição, revolucionando atendimentos com tecnologia de ponta desde 2022."
        keywords="sobre nutri chatbot, história empresa, missão nutrição, tecnologia nutricional, IA nutrição"
        url="/sobre"
      />

      {/* Hero Section */}
      <Box 
        bg={heroBg}
        py={{ base: 20, md: 28 }}
        position="relative"
        overflow="hidden"
      >
        <Container maxW="1200px">
          <MotionStack
            spacing={6}
            textAlign="center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Badge 
              colorScheme="brand" 
              variant="subtle" 
              fontSize="sm"
              px={4}
              py={2}
              rounded="full"
            >
              Desde 2022 inovando na área nutricional
            </Badge>

            <Heading
              as="h1"
              size={{ base: '2xl', md: '3xl', lg: '4xl' }}
              lineHeight="1.2"
              color="gray.900"
              fontWeight="700"
              maxW="800px"
              mx="auto"
            >
              Revolucionando a{' '}
              <Text as="span" color="brand.500">
                nutrição
              </Text>
              {' '}com{' '}
              <Text as="span" color="tech.500">
                inteligência artificial
              </Text>
            </Heading>

            <Text 
              fontSize={{ base: 'lg', md: 'xl' }}
              color="gray.600"
              maxW="600px"
              mx="auto"
              lineHeight="1.6"
            >
              Somos uma empresa de tecnologia especializada em soluções para nutricionistas, 
              combinando expertise nutricional com inovação em IA para transformar 
              a forma como os profissionais atendem seus pacientes.
            </Text>

            {/* Estatísticas Rápidas */}
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} pt={8} maxW="600px" mx="auto">
              <VStack spacing={1}>
                <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                  3+
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Anos de mercado
                </Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                  500+
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Nutricionistas atendidos
                </Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                  10K+
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Consultas automatizadas
                </Text>
              </VStack>
              <VStack spacing={1}>
                <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                  98%
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Satisfação dos clientes
                </Text>
              </VStack>
            </SimpleGrid>
          </MotionStack>
        </Container>
      </Box>

      {/* Nossa História */}
      <Box py={20} bg="white">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            {/* Timeline */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <VStack spacing={8} align="flex-start">
                <VStack spacing={4} align="flex-start">
                  <Heading size="2xl" color="gray.900">
                    Nossa História
                  </Heading>
                  <Text fontSize="lg" color="gray.600">
                    Uma jornada de inovação constante na área nutricional
                  </Text>
                </VStack>

                <VStack spacing={0} align="flex-start" w="full">
                  <TimelineItem
                    year="22"
                    title="Fundação da Empresa"
                    description="Nascemos com a visão de democratizar o acesso à tecnologia nutricional e otimizar o trabalho dos profissionais."
                  />
                  <TimelineItem
                    year="23"
                    title="Primeiro Produto"
                    description="Lançamento do Nutri ChatBot, nossa primeira solução de IA para triagem automática de pacientes via WhatsApp."
                  />
                  <TimelineItem
                    year="24"
                    title="Expansão Nacional"
                    description="Alcançamos mais de 500 nutricionistas em todo o Brasil, consolidando nossa posição no mercado."
                  />
                  <TimelineItem
                    year="25"
                    title="Inovação Contínua"
                    description="Desenvolvimento de novas funcionalidades baseadas em IA generativa e integração com sistemas CRM."
                    isLast={true}
                  />
                </VStack>
              </VStack>
            </MotionBox>

            {/* Imagem/Conteúdo */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <VStack spacing={6} align="flex-start">
                <Box
                  w="full"
                  h="300px"
                  bg="brand.50"
                  rounded="xl"
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  position="relative"
                  overflow="hidden"
                >
                  <Icon as={FaChartLine} w={20} h={20} color="brand.500" />
                  <Text
                    position="absolute"
                    bottom={4}
                    left={4}
                    right={4}
                    color="brand.700"
                    fontSize="sm"
                    textAlign="center"
                  >
                    Crescimento exponencial em soluções nutricionais
                  </Text>
                </Box>

                <Text color="gray.600" lineHeight="1.8">
                  Nossa trajetória começou com uma pergunta simples: <strong>como a tecnologia 
                  pode tornar o trabalho dos nutricionistas mais eficiente e humanizado?</strong>
                </Text>

                <Text color="gray.600" lineHeight="1.8">
                  Desde então, investimos em pesquisa e desenvolvimento, sempre ouvindo 
                  nossos clientes e adaptando nossas soluções às necessidades reais do 
                  mercado nutricional brasileiro.
                </Text>

                <Badge colorScheme="tech" variant="subtle" fontSize="sm" px={3} py={1}>
                  💡 Inovação orientada por dados reais
                </Badge>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Missão, Visão e Valores */}
      <Box py={20} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Header */}
            <MotionStack
              spacing={4}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Nossos Pilares
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Os valores que nos guiam na criação de soluções inovadoras
              </Text>
            </MotionStack>

            {/* Cards MVV */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              <ValueCard
                icon={FaRocket}
                title="Nossa Missão"
                description="Revolucionar o atendimento nutricional através de tecnologia inteligente, tornando o trabalho dos profissionais mais eficiente e os cuidados com a saúde mais acessíveis."
                delay={0.1}
              />
              <ValueCard
                icon={FaLightbulb}
                title="Nossa Visão"
                description="Ser a principal referência em tecnologia nutricional no Brasil, democratizando o acesso a ferramentas de IA para todos os profissionais da área."
                delay={0.2}
              />
              <ValueCard
                icon={FaHeart}
                title="Nossos Valores"
                description="Inovação constante, ética profissional, foco no cliente, qualidade técnica e compromisso com a melhoria da saúde da população brasileira."
                delay={0.3}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Equipe */}
      <Box py={20} bg="white">
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Header */}
            <MotionStack
              spacing={4}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Nossa Equipe Especializada
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Profissionais experientes unidos pela paixão em tecnologia e nutrição
              </Text>
            </MotionStack>

            {/* Cards da Equipe */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              <TeamCard
                name="Dr. Ana Silva"
                role="CRN-3 12345/P - CEO & Fundadora"
                description="Nutricionista com 15 anos de experiência e especialização em tecnologia aplicada à nutrição. Visionária por trás do Nutri ChatBot."
                delay={0.1}
              />
              <TeamCard
                name="Carlos Santos"
                role="CTO & Desenvolvedor Sênior"
                description="Especialista em IA e Machine Learning com 12 anos de experiência em desenvolvimento de soluções para área da saúde."
                delay={0.2}
              />
              <TeamCard
                name="Mariana Costa"
                role="CRN-3 54321/P - Head de Produto"
                description="Nutricionista especializada em tecnologia e UX, responsável por garantir que nossas soluções atendam às necessidades reais dos profissionais."
                delay={0.3}
              />
              <TeamCard
                name="Rafael Lima"
                role="Especialista em IA"
                description="PhD em Inteligência Artificial aplicada à saúde, lidera o desenvolvimento dos algoritmos de triagem e análise nutricional."
                delay={0.4}
              />
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Números e Conquistas */}
      <Box py={20} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Header */}
            <MotionStack
              spacing={4}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Nossos Números
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Resultados que comprovam nossa excelência e impacto no mercado
              </Text>
            </MotionStack>

            {/* Grid de Estatísticas */}
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} w="full">
              {[
                { number: "500+", label: "Nutricionistas Ativos", icon: FaUsers },
                { number: "10.000+", label: "Consultas Automatizadas", icon: FaCheckCircle },
                { number: "40min", label: "Economia por Consulta", icon: FaClock },
                { number: "98%", label: "Satisfação do Cliente", icon: FaAward },
                { number: "300%", label: "ROI Médio dos Clientes", icon: FaChartLine },
                { number: "24h", label: "Disponibilidade", icon: FaWhatsapp },
                { number: "100%", label: "Conformidade LGPD", icon: FaShieldAlt },
                { number: "15", label: "Estados Atendidos", icon: FaMedal },
              ].map((stat, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  textAlign="center"
                  bg="white"
                  p={6}
                  rounded="xl"
                  border="1px"
                  borderColor="gray.100"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'lg',
                  }}
                  sx={{
                    transition: 'all 0.3s ease',
                  }}
                >
                  <VStack spacing={3}>
                    <Icon as={stat.icon} w={8} h={8} color="brand.500" />
                    <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                      {stat.number}
                    </Text>
                    <Text fontSize="sm" color="gray.600" textAlign="center">
                      {stat.label}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Tecnologia e Inovação */}
      <Box py={20} bg="white">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="center">
            {/* Conteúdo */}
            <MotionBox
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <VStack spacing={6} align="flex-start">
                <VStack spacing={4} align="flex-start">
                  <Heading size="2xl" color="gray.900">
                    Tecnologia de Ponta
                  </Heading>
                  <Text fontSize="lg" color="gray.600">
                    Desenvolvemos soluções baseadas nas mais modernas tecnologias de IA
                  </Text>
                </VStack>

                <VStack spacing={4} align="flex-start" w="full">
                  {[
                    {
                      title: "Inteligência Artificial Especializada",
                      description: "IA treinada especificamente para área nutricional, baseada em diretrizes do CFN e evidências científicas.",
                      icon: FaBrain
                    },
                    {
                      title: "Processamento de Linguagem Natural",
                      description: "Compreende e responde perguntas complexas sobre nutrição de forma natural e contextualizada.",
                      icon: FaCode
                    },
                    {
                      title: "Segurança e Conformidade",
                      description: "Arquitetura segura com criptografia de ponta e total conformidade com LGPD e normas do CFN.",
                      icon: FaLock
                    },
                    {
                      title: "Integração Avançada",
                      description: "APIs robustas para integração com sistemas CRM, agendas e plataformas de gestão existentes.",
                      icon: FaCheckCircle
                    }
                  ].map((tech, index) => (
                    <HStack key={index} spacing={4} align="flex-start">
                      <Icon
                        as={tech.icon}
                        w={6}
                        h={6}
                        color="brand.500"
                        mt={1}
                        flexShrink={0}
                      />
                      <VStack spacing={1} align="flex-start">
                        <Text fontWeight="semibold" color="gray.800">
                          {tech.title}
                        </Text>
                        <Text color="gray.600" fontSize="sm">
                          {tech.description}
                        </Text>
                      </VStack>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </MotionBox>

            {/* Tecnologias */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <VStack spacing={6}>
                <Box
                  w="full"
                  bg="tech.50"
                  p={8}
                  rounded="xl"
                  border="2px"
                  borderColor="tech.100"
                >
                  <VStack spacing={4}>
                    <Icon as={FaBrain} w={16} h={16} color="tech.500" />
                    <Text fontWeight="bold" fontSize="lg" color="tech.700">
                      Stack Tecnológico
                    </Text>
                    <SimpleGrid columns={2} spacing={3} w="full">
                      {[
                        "React & Node.js",
                        "OpenAI GPT-4",
                        "WhatsApp API",
                        "MongoDB",
                        "AWS Cloud",
                        "Docker",
                        "Redis Cache",
                        "SSL/HTTPS"
                      ].map((tech, index) => (
                        <Badge
                          key={index}
                          colorScheme="tech"
                          variant="solid"
                          textAlign="center"
                          py={1}
                          px={2}
                          fontSize="xs"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </SimpleGrid>
                  </VStack>
                </Box>

                <Box
                  w="full"
                  bg="brand.50"
                  p={6}
                  rounded="xl"
                  border="2px"
                  borderColor="brand.100"
                >
                  <VStack spacing={3}>
                    <Icon as={FaGraduationCap} w={12} h={12} color="brand.500" />
                    <Text fontWeight="bold" color="brand.700">
                      Bases Científicas
                    </Text>
                    <VStack spacing={2}>
                      <HStack spacing={2}>
                        <Icon as={FaCheckCircle} w={4} h={4} color="brand.500" />
                        <Text fontSize="sm" color="brand.700">Diretrizes CFN</Text>
                      </HStack>
                      <HStack spacing={2}>
                        <Icon as={FaCheckCircle} w={4} h={4} color="brand.500" />
                        <Text fontSize="sm" color="brand.700">Normas ANVISA</Text>
                      </HStack>
                      <HStack spacing={2}>
                        <Icon as={FaCheckCircle} w={4} h={4} color="brand.500" />
                        <Text fontSize="sm" color="brand.700">Evidências Científicas</Text>
                      </HStack>
                    </VStack>
                  </VStack>
                </Box>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Compromissos e Certificações */}
      <Box py={20} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={16}>
            {/* Header */}
            <MotionStack
              spacing={4}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Nossos Compromissos
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Garantias que asseguram a qualidade e confiabilidade dos nossos serviços
              </Text>
            </MotionStack>

            {/* Grid de Compromissos */}
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8} w="full">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Conformidade LGPD",
                  description: "Dados protegidos com criptografia avançada e total conformidade com a Lei Geral de Proteção de Dados.",
                  badge: "100% Seguro"
                },
                {
                  icon: FaStethoscope,
                  title: "Aprovação CFN",
                  description: "Desenvolvido seguindo todas as normas e diretrizes do Conselho Federal de Nutricionistas.",
                  badge: "CFN Approved"
                },
                {
                  icon: FaAward,
                  title: "Qualidade Garantida",
                  description: "Processos certificados ISO 9001 e metodologias ágeis para entrega contínua de valor.",
                  badge: "ISO 9001"
                },
                {
                  icon: FaUsers,
                  title: "Suporte Especializado",
                  description: "Equipe técnica disponível para suporte e treinamento personalizado para todos os clientes.",
                  badge: "24/7 Support"
                },
                {
                  icon: FaCheckCircle,
                  title: "Atualizações Constantes",
                  description: "Evolução contínua do produto baseada em feedback dos usuários e avanços científicos.",
                  badge: "Always Updated"
                },
                {
                  icon: FaHeart,
                  title: "Ética Profissional",
                  description: "Compromisso com a ética médica e nutricional em todas as funcionalidades desenvolvidas.",
                  badge: "Ethics First"
                }
              ].map((commitment, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  bg="white"
                  p={6}
                  rounded="xl"
                  border="1px"
                  borderColor="gray.100"
                  _hover={{
                    transform: 'translateY(-4px)',
                    boxShadow: 'lg',
                  }}
                  sx={{
                    transition: 'all 0.3s ease',
                  }}
                  position="relative"
                >
                  <Badge
                    position="absolute"
                    top={3}
                    right={3}
                    colorScheme="brand"
                    variant="solid"
                    fontSize="xs"
                  >
                    {commitment.badge}
                  </Badge>
                  
                  <VStack spacing={4} align="flex-start">
                    <Icon
                      as={commitment.icon}
                      w={10}
                      h={10}
                      color="brand.500"
                    />
                    <Heading size="md" color="gray.800">
                      {commitment.title}
                    </Heading>
                    <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                      {commitment.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* CTA Final */}
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
            <VStack spacing={4}>
              <Heading size="2xl">
                Faça Parte da Revolução Nutricional
              </Heading>
              <Text fontSize="xl" maxW="600px" mx="auto" opacity={0.9}>
                Junte-se aos mais de 500 nutricionistas que já transformaram 
                seus atendimentos com nossa tecnologia
              </Text>
            </VStack>

            <HStack spacing={4} justify="center" flexWrap="wrap">
              <Button
                as={RouterLink}
                to="/contato"
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
                Custo acessível, benefício gigante: R$1,60/dia
              </Button>
              <Button
                as="a"
                href={generateWhatsAppUrl('about')}
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
                Fale com Nossa Equipe
              </Button>
            </HStack>

            {/* Trust Indicators */}
            <HStack spacing={8} justify="center" flexWrap="wrap" pt={6}>
              <HStack spacing={2}>
                <Icon as={FaCheckCircle} w={5} h={5} />
                <Text fontSize="sm" opacity={0.9}>
                  Investimento baixo diário
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaShieldAlt} w={5} h={5} />
                <Text fontSize="sm" opacity={0.9}>
                  Dados protegidos LGPD
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaUsers} w={5} h={5} />
                <Text fontSize="sm" opacity={0.9}>
                  Suporte especializado
                </Text>
              </HStack>
            </HStack>
          </MotionStack>
        </Container>
      </Box>
    </>
  );
};

export default About;