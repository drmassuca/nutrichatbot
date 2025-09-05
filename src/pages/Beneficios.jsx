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
  Progress,
  Badge,
  Flex,
  List,
  ListItem,
  ListIcon,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaClock, 
  FaChartLine, 
  FaDollarSign, 
  FaUserFriends,
  FaStar,
  FaCheck,
  FaArrowRight,
  FaWhatsapp
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import PropTypes from 'prop-types';

const MotionBox = motion(Box);
const MotionStack = motion(VStack);

const BenefitCard = ({ icon, title, subtitle, value, description, features, color = "brand", delay = 0 }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      bg={bg}
      p={8}
      rounded="xl"
      border="1px"
      borderColor={borderColor}
      _hover={{
        transform: 'translateY(-4px)',
        boxShadow: '2xl',
      }}
      sx={{
        transition: 'all 0.3s ease',
      }}
      h="full"
    >
      <VStack spacing={6} align="start" h="full">
        <HStack>
          <Icon
            as={icon}
            w={12}
            h={12}
            color={`${color}.500`}
            p={2}
            bg={`${color}.50`}
            rounded="full"
          />
          <VStack spacing={1} align="start">
            <Heading size="lg" color="gray.800">
              {title}
            </Heading>
            <Text fontSize="sm" color="gray.500">
              {subtitle}
            </Text>
          </VStack>
        </HStack>
        
        {value && (
          <Box>
            <Text fontSize="3xl" fontWeight="bold" color={`${color}.500`}>
              {value}
            </Text>
            <Text fontSize="sm" color="gray.600" mt={1}>
              {description}
            </Text>
          </Box>
        )}
        
        <List spacing={2} flex={1}>
          {features.map((feature, index) => (
            <ListItem key={index} fontSize="sm" color="gray.700">
              <ListIcon as={FaCheck} color={`${color}.500`} />
              {feature}
            </ListItem>
          ))}
        </List>
      </VStack>
    </MotionBox>
  );
};

BenefitCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  value: PropTypes.string,
  description: PropTypes.string,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  color: PropTypes.string,
  delay: PropTypes.number,
};

const ComparisonCard = ({ title, traditional, withChatbot, delay = 0 }) => {
  const bg = useColorModeValue('white', 'gray.800');
  
  return (
    <MotionBox
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      bg={bg}
      p={6}
      rounded="xl"
      border="1px"
      borderColor="gray.100"
      boxShadow="md"
    >
      <VStack spacing={6}>
        <Heading size="md" color="gray.800" textAlign="center">
          {title}
        </Heading>
        
        <SimpleGrid columns={2} spacing={6} w="full">
          {/* Método Tradicional */}
          <VStack spacing={3}>
            <Badge colorScheme="red" px={3} py={1}>
              Método Tradicional
            </Badge>
            <VStack spacing={2} align="start" w="full">
              {traditional.map((item, index) => (
                <HStack key={index} spacing={2} align="start">
                  <Icon as={FaArrowRight} color="red.400" mt={1} flexShrink={0} />
                  <Text fontSize="sm" color="gray.600">
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
          
          {/* Com Nutri ChatBot */}
          <VStack spacing={3}>
            <Badge colorScheme="brand" px={3} py={1}>
              Com Nutri ChatBot
            </Badge>
            <VStack spacing={2} align="start" w="full">
              {withChatbot.map((item, index) => (
                <HStack key={index} spacing={2} align="start">
                  <Icon as={FaCheck} color="brand.500" mt={1} flexShrink={0} />
                  <Text fontSize="sm" color="gray.700" fontWeight="500">
                    {item}
                  </Text>
                </HStack>
              ))}
            </VStack>
          </VStack>
        </SimpleGrid>
      </VStack>
    </MotionBox>
  );
};

ComparisonCard.propTypes = {
  title: PropTypes.string.isRequired,
  traditional: PropTypes.arrayOf(PropTypes.string).isRequired,
  withChatbot: PropTypes.arrayOf(PropTypes.string).isRequired,
  delay: PropTypes.number,
};

const Beneficios = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  const mainBenefits = [
    {
      icon: FaClock,
      title: "Economia de Tempo",
      subtitle: "Eficiência comprovada",
      value: "40min",
      description: "economizados por consulta",
      color: "brand",
      features: [
        "Anamnese pré-estruturada automaticamente",
        "Dados organizados antes da consulta",
        "Eliminação de retrabalho manual",
        "Foco total na orientação nutricional"
      ]
    },
    {
      icon: FaChartLine,
      title: "Qualidade dos Dados",
      subtitle: "Informações precisas",
      value: "95%",
      description: "de dados mais completos",
      color: "tech",
      features: [
        "Coleta padronizada e estruturada",
        "Redução de erros humanos",
        "Informações validadas em tempo real",
        "Histórico completo do paciente"
      ]
    },
    {
      icon: FaDollarSign,
      title: "Retorno do Investimento",
      subtitle: "ROI comprovado",
      value: "300%",
      description: "retorno em 6 meses",
      color: "green",
      features: [
        "Mais consultas por dia",
        "Redução de custos operacionais",
        "Fidelização de pacientes",
        "Profissionalização da imagem"
      ]
    },
    {
      icon: FaUserFriends,
      title: "Satisfação do Paciente",
      subtitle: "Experiência aprimorada",
      value: "4.9/5",
      description: "avaliação média dos pacientes",
      color: "purple",
      features: [
        "Atendimento 24h disponível",
        "Processo mais dinâmico",
        "Consultas mais focadas",
        "Acompanhamento contínuo"
      ]
    }
  ];

  const comparisons = [
    {
      title: "Processo de Anamnese",
      traditional: [
        "15-20 min preenchendo formulários",
        "Paciente às vezes esquece informações",
        "Dados escritos à mão (ilegíveis)",
        "Perda de tempo organizando dados"
      ],
      withChatbot: [
        "Anamnese feita previamente pelo bot",
        "Conversa natural facilita lembrança",
        "Dados digitais organizados",
        "Informações prontas para análise"
      ]
    },
    {
      title: "Acompanhamento do Paciente", 
      traditional: [
        "Contato apenas em consultas",
        "Paciente pode esquecer orientações",
        "Difícil monitorar aderência",
        "Retrabalho em cada consulta"
      ],
      withChatbot: [
        "Acompanhamento 24h automatizado",
        "Lembretes e dicas personalizadas",
        "Monitoramento contínuo de hábitos",
        "Evolução documentada automaticamente"
      ]
    },
    {
      title: "Gestão de Prontuários",
      traditional: [
        "Arquivos físicos ocupam espaço",
        "Busca manual demorada",
        "Risco de perda de documentos",
        "Dificuldade para fazer backup"
      ],
      withChatbot: [
        "Prontuários 100% digitais",
        "Busca instantânea por qualquer dado",
        "Backup automático na nuvem",
        "Conformidade com LGPD garantida"
      ]
    }
  ];

  return (
    <>
      <SEO 
        title="Benefícios - Nutri ChatBot | Transforme sua Prática Nutricional"
        description="Descubra como o Nutri ChatBot oferece economia de 40min por consulta, ROI de 300%, satisfação de 4.9/5 e dados 95% mais completos para nutricionistas."
        keywords="benefícios chatbot nutricionista, economia tempo consulta, ROI nutrição, automação consultório, eficiência atendimento nutricional"
        url="/beneficios"
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
                Benefícios{' '}
                <Text as="span" color="brand.500">
                  comprovados
                </Text>{' '}
                para sua prática nutricional
              </Heading>

              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                lineHeight="1.6"
              >
                Centenas de nutricionistas já transformaram suas práticas com o Nutri ChatBot. 
                Veja os resultados reais e como você pode alcançar os mesmos benefícios.
              </Text>

              {/* Quick Stats */}
              <SimpleGrid columns={2} spacing={6} py={4}>
                <VStack spacing={1}>
                  <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                    40min
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Economia por consulta
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="3xl" fontWeight="bold" color="tech.500">
                    300%
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    ROI em 6 meses
                  </Text>
                </VStack>
              </SimpleGrid>

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
                Comprove os benefícios gratuitamente
              </Button>
            </MotionStack>

            {/* Right Content - Stats Visual */}
            <MotionBox
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              bg="white"
              p={8}
              borderRadius="xl"
              boxShadow="2xl"
            >
              <VStack spacing={6}>
                <Heading size="lg" color="gray.800" textAlign="center">
                  Resultados Médios dos Usuários
                </Heading>
                
                <VStack spacing={4} w="full">
                  <Box w="full">
                    <Flex justify="space-between" mb={2}>
                      <Text fontSize="sm" fontWeight="600">Economia de Tempo</Text>
                      <Text fontSize="sm" color="brand.500">40min/consulta</Text>
                    </Flex>
                    <Progress value={85} colorScheme="brand" size="lg" borderRadius="full" />
                  </Box>
                  
                  <Box w="full">
                    <Flex justify="space-between" mb={2}>
                      <Text fontSize="sm" fontWeight="600">Qualidade dos Dados</Text>
                      <Text fontSize="sm" color="tech.500">+95%</Text>
                    </Flex>
                    <Progress value={95} colorScheme="cyan" size="lg" borderRadius="full" />
                  </Box>
                  
                  <Box w="full">
                    <Flex justify="space-between" mb={2}>
                      <Text fontSize="sm" fontWeight="600">Satisfação do Paciente</Text>
                      <Text fontSize="sm" color="purple.500">4.9/5</Text>
                    </Flex>
                    <Progress value={98} colorScheme="purple" size="lg" borderRadius="full" />
                  </Box>
                  
                  <Box w="full">
                    <Flex justify="space-between" mb={2}>
                      <Text fontSize="sm" fontWeight="600">ROI</Text>
                      <Text fontSize="sm" color="green.500">300%</Text>
                    </Flex>
                    <Progress value={100} colorScheme="green" size="lg" borderRadius="full" />
                  </Box>
                </VStack>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Main Benefits Section */}
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
                Principais Benefícios
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Resultados mensuráveis que transformam sua prática profissional
              </Text>
            </MotionStack>

            {/* Benefits Grid */}
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8} w="full">
              {mainBenefits.map((benefit, index) => (
                <BenefitCard
                  key={index}
                  icon={benefit.icon}
                  title={benefit.title}
                  subtitle={benefit.subtitle}
                  value={benefit.value}
                  description={benefit.description}
                  features={benefit.features}
                  color={benefit.color}
                  delay={index * 0.1}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Comparison Section */}
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
                Antes vs. Depois do Nutri ChatBot
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="700px">
                Veja a diferença prática no seu dia a dia profissional
              </Text>
            </MotionStack>

            {/* Comparisons Grid */}
            <VStack spacing={8} w="full">
              {comparisons.map((comparison, index) => (
                <ComparisonCard
                  key={index}
                  title={comparison.title}
                  traditional={comparison.traditional}
                  withChatbot={comparison.withChatbot}
                  delay={index * 0.2}
                />
              ))}
            </VStack>
          </VStack>
        </Container>
      </Box>

      {/* ROI Calculator Section */}
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
                Calcule seu ROI
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Veja quanto você pode economizar e ganhar com o Nutri ChatBot
              </Text>
              
              <Box bg="brand.50" p={6} borderRadius="xl">
                <VStack spacing={4} align="start">
                  <Heading size="md" color="brand.700">
                    Exemplo prático:
                  </Heading>
                  <List spacing={2}>
                    <ListItem fontSize="sm">
                      <ListIcon as={FaCheck} color="brand.500" />
                      <strong>20 consultas/mês</strong> × 40min economizados = 13h livres
                    </ListItem>
                    <ListItem fontSize="sm">
                      <ListIcon as={FaCheck} color="brand.500" />
                      <strong>13h × R$ 150/h</strong> (valor médio) = R$ 1.950 extras/mês
                    </ListItem>
                    <ListItem fontSize="sm">
                      <ListIcon as={FaCheck} color="brand.500" />
                      <strong>Investimento:</strong> R$ 99/mês no Nutri ChatBot
                    </ListItem>
                    <ListItem fontSize="sm">
                      <ListIcon as={FaCheck} color="brand.500" />
                      <strong>ROI:</strong> R$ 1.851 líquidos/mês (1.870% ROI)
                    </ListItem>
                  </List>
                </VStack>
              </Box>
            </MotionStack>

            {/* Right Content - Visual ROI */}
            <MotionBox
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              bg="gradient.500"
              bgGradient="linear(135deg, brand.500 0%, tech.500 100%)"
              p={8}
              borderRadius="xl"
              color="white"
            >
              <VStack spacing={6}>
                <Heading size="lg" textAlign="center">
                  Seu Potencial de Crescimento
                </Heading>
                
                <SimpleGrid columns={2} spacing={6} w="full">
                  <VStack spacing={2}>
                    <Text fontSize="3xl" fontWeight="bold">
                      +6
                    </Text>
                    <Text fontSize="sm" textAlign="center" opacity={0.9}>
                      Consultas extras por mês
                    </Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Text fontSize="3xl" fontWeight="bold">
                      R$ 1.851
                    </Text>
                    <Text fontSize="sm" textAlign="center" opacity={0.9}>
                      Receita extra mensal
                    </Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Text fontSize="3xl" fontWeight="bold">
                      13h
                    </Text>
                    <Text fontSize="sm" textAlign="center" opacity={0.9}>
                      Tempo livre por mês
                    </Text>
                  </VStack>
                  <VStack spacing={2}>
                    <Text fontSize="3xl" fontWeight="bold">
                      300%
                    </Text>
                    <Text fontSize="sm" textAlign="center" opacity={0.9}>
                      ROI em 6 meses
                    </Text>
                  </VStack>
                </SimpleGrid>
                
                <Button
                  as={RouterLink}
                  to="/precos"
                  size="lg"
                  bg="white"
                  color="brand.500"
                  _hover={{ bg: 'gray.50' }}
                  w="full"
                >
                  Ver investimento
                </Button>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Testimonials Section */}
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
                O que dizem nossos usuários
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Depoimentos reais de nutricionistas que transformaram suas práticas
              </Text>
            </MotionStack>

            {/* Testimonials Grid */}
            <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8} w="full">
              {[
                {
                  name: "Dra. Maria Silva",
                  specialty: "Nutrição Clínica",
                  text: "Economizo 40 minutos por consulta e meus pacientes adoram o atendimento 24h. O ROI foi incrível!",
                  rating: 5
                },
                {
                  name: "Dr. João Santos", 
                  specialty: "Nutrição Esportiva",
                  text: "Consegui dobrar o número de pacientes sem comprometer a qualidade. O chatbot faz toda a triagem automaticamente.",
                  rating: 5
                },
                {
                  name: "Dra. Ana Costa",
                  specialty: "Nutrição Funcional", 
                  text: "Os dados chegam organizados e completos. Posso focar totalmente na orientação nutricional personalizada.",
                  rating: 5
                }
              ].map((testimonial, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  bg="white"
                  p={6}
                  borderRadius="xl"
                  boxShadow="md"
                >
                  <VStack spacing={4} align="start">
                    <HStack>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon key={i} as={FaStar} color="yellow.400" />
                      ))}
                    </HStack>
                    <Text fontSize="sm" color="gray.600" fontStyle="italic">
                      &ldquo;{testimonial.text}&rdquo;
                    </Text>
                    <VStack spacing={1} align="start">
                      <Text fontWeight="600" color="gray.800">
                        {testimonial.name}
                      </Text>
                      <Text fontSize="sm" color="gray.500">
                        {testimonial.specialty}
                      </Text>
                    </VStack>
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
              Pronto para conquistar esses benefícios?
            </Heading>
            <Text fontSize="xl" maxW="600px" mx="auto" opacity={0.9}>
              Teste o Nutri ChatBot por 7 dias gratuitamente e comprove 
              todos esses benefícios na sua prática.
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
                Calcule seu ROI personalizado
              </Button>
            </HStack>

            {/* Guarantee */}
            <Text fontSize="sm" opacity={0.8} mt={4}>
              ✅ 7 dias grátis • ROI garantido • Suporte completo incluído
            </Text>
          </MotionStack>
        </Container>
      </Box>
    </>
  );
};

export default Beneficios;