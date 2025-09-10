import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  Button,
  useColorModeValue,
  Badge,
  List,
  ListItem,
  ListIcon,
  SimpleGrid,
  Icon,
  Divider,
  Card,
  CardBody,
  Alert,
  AlertIcon,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaCheck, 
  FaWhatsapp, 
  FaShieldAlt,
  FaClock,
  FaHeadset,
  FaChartLine,
  FaLock,
  FaCalculator,
  FaHeart,
  FaRocket
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/seo/SEO';
import PropTypes from 'prop-types';

const MotionBox = motion(Box);
const MotionStack = motion(VStack);

const PricingCard = ({ 
  title, 
  price, 
  period, 
  description, 
  features, 
  isPopular = false, 
  ctaText, 
  ctaVariant = "solid",
  delay = 0 
}) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');
  const popularBg = useColorModeValue('brand.50', 'brand.900');
  const popularBorder = useColorModeValue('brand.200', 'brand.600');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      position="relative"
    >
      <Card
        bg={isPopular ? popularBg : bg}
        border="2px"
        borderColor={isPopular ? popularBorder : borderColor}
        boxShadow={isPopular ? "2xl" : "lg"}
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: '2xl',
        }}
        transition="all 0.3s ease"
        h="full"
      >
        {isPopular && (
          <Badge
            position="absolute"
            top="-12px"
            left="50%"
            transform="translateX(-50%)"
            colorScheme="brand"
            px={6}
            py={2}
            borderRadius="full"
            fontSize="sm"
            fontWeight="bold"
            zIndex={1}
          >
            MAIS POPULAR
          </Badge>
        )}
        
        <CardBody p={8}>
          <VStack spacing={6} align="start" h="full">
            {/* Header */}
            <VStack spacing={2} align="start" w="full">
              <Heading size="lg" color="gray.800">
                {title}
              </Heading>
              <Text color="gray.600" fontSize="md">
                {description}
              </Text>
            </VStack>

            {/* Price */}
            <Box>
              <HStack align="baseline" spacing={1}>
                <Text fontSize="4xl" fontWeight="bold" color={isPopular ? "brand.600" : "gray.800"}>
                  {price}
                </Text>
                <Text color="gray.600" fontSize="lg">
                  {period}
                </Text>
              </HStack>
            </Box>

            {/* Features */}
            <List spacing={3} flex={1} w="full">
              {features.map((feature, index) => (
                <ListItem key={index} fontSize="sm" color="gray.700">
                  <ListIcon 
                    as={FaCheck} 
                    color={isPopular ? "brand.500" : "green.500"} 
                  />
                  {feature}
                </ListItem>
              ))}
            </List>

            {/* CTA */}
            <Button
              as={RouterLink}
              to="/contato"
              colorScheme={isPopular ? "brand" : "gray"}
              variant={ctaVariant}
              size="lg"
              w="full"
              py={6}
              fontSize="lg"
              _hover={{ transform: 'translateY(-2px)' }}
            >
              {ctaText}
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </MotionBox>
  );
};

PricingCard.propTypes = {
  title: PropTypes.string.isRequired,
  price: PropTypes.string.isRequired,
  period: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  features: PropTypes.arrayOf(PropTypes.string).isRequired,
  isPopular: PropTypes.bool,
  ctaText: PropTypes.string.isRequired,
  ctaVariant: PropTypes.string,
  delay: PropTypes.number,
};

const ROICalculator = () => {
  const [consultasMonth, setConsultasMonth] = useState('20');
  const [valorConsulta, setValorConsulta] = useState('150');
  
  const consultasNum = parseInt(consultasMonth) || 0;
  const valorNum = parseFloat(valorConsulta) || 0;
  
  // Cálculos
  const tempoEconomizado = consultasNum * 40; // 40min por consulta
  const horasEconomizadas = Math.round(tempoEconomizado / 60 * 10) / 10;
  const receitaExtra = Math.round(horasEconomizadas * valorNum);
  const investimento = 49; // Preço do produto
  const lucroLiquido = receitaExtra - investimento;
  const roi = investimento > 0 ? Math.round((lucroLiquido / investimento) * 100) : 0;

  return (
    <MotionBox
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      bg="gradient.500"
      bgGradient="linear(135deg, brand.500 0%, tech.500 100%)"
      p={8}
      borderRadius="xl"
      color="white"
    >
      <VStack spacing={6}>
        <HStack>
          <Icon as={FaCalculator} w={6} h={6} />
          <Heading size="lg" textAlign="center">
            Calcule seu ROI
          </Heading>
        </HStack>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
          <FormControl>
            <FormLabel fontSize="sm" opacity={0.9}>
              Consultas por mês
            </FormLabel>
            <NumberInput 
              value={consultasMonth} 
              onChange={setConsultasMonth}
              min={1}
              max={200}
            >
              <NumberInputField 
                bg="whiteAlpha.200" 
                border="none" 
                color="white"
                _placeholder={{ color: 'whiteAlpha.700' }}
              />
            </NumberInput>
          </FormControl>
          
          <FormControl>
            <FormLabel fontSize="sm" opacity={0.9}>
              Valor por consulta (R$)
            </FormLabel>
            <NumberInput 
              value={valorConsulta} 
              onChange={setValorConsulta}
              min={50}
              max={1000}
            >
              <NumberInputField 
                bg="whiteAlpha.200" 
                border="none" 
                color="white"
                _placeholder={{ color: 'whiteAlpha.700' }}
              />
            </NumberInput>
          </FormControl>
        </SimpleGrid>
        
        <Divider />
        
        <SimpleGrid columns={2} spacing={6} w="full">
          <Stat textAlign="center">
            <StatLabel opacity={0.9} fontSize="sm">
              Tempo economizado
            </StatLabel>
            <StatNumber fontSize="2xl">
              {horasEconomizadas}h
            </StatNumber>
            <StatHelpText opacity={0.8} fontSize="xs">
              por mês
            </StatHelpText>
          </Stat>
          
          <Stat textAlign="center">
            <StatLabel opacity={0.9} fontSize="sm">
              Receita extra
            </StatLabel>
            <StatNumber fontSize="2xl">
              R$ {receitaExtra.toLocaleString()}
            </StatNumber>
            <StatHelpText opacity={0.8} fontSize="xs">
              por mês
            </StatHelpText>
          </Stat>
          
          <Stat textAlign="center">
            <StatLabel opacity={0.9} fontSize="sm">
              Investimento
            </StatLabel>
            <StatNumber fontSize="2xl">
              R$ {investimento}
            </StatNumber>
            <StatHelpText opacity={0.8} fontSize="xs">
              por mês
            </StatHelpText>
          </Stat>
          
          <Stat textAlign="center">
            <StatLabel opacity={0.9} fontSize="sm">
              ROI
            </StatLabel>
            <StatNumber fontSize="2xl" color={roi > 0 ? "green.200" : "red.200"}>
              {roi > 0 ? '+' : ''}{roi}%
            </StatNumber>
            <StatHelpText opacity={0.8} fontSize="xs">
              mensal
            </StatHelpText>
          </Stat>
        </SimpleGrid>
        
        {lucroLiquido > 0 && (
          <Alert status="success" bg="whiteAlpha.200" color="white" borderRadius="lg">
            <AlertIcon color="green.200" />
            <Text fontSize="sm">
              <strong>Lucro líquido mensal: R$ {lucroLiquido.toLocaleString()}</strong>
            </Text>
          </Alert>
        )}
      </VStack>
    </MotionBox>
  );
};

const Precos = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  const plans = [
    {
      title: "Nutri ChatBot Pro",
      price: "R$ 49",
      period: "por mês",
      description: "Solução completa para nutricionistas profissionais",
      features: [
        "Chatbot IA ilimitado no WhatsApp",
        "Anamnese automatizada completa",
        "Prontuário digital compatível CFN",
        "Análise nutricional inteligente",
        "Acompanhamento 24h dos pacientes",
        "Relatórios e dashboards avançados",
        "Backup automático na nuvem",
        "Suporte prioritário",
        "Conformidade total com LGPD",
        "Atualizações automáticas",
        "Integração com agendas",
        "Exportação em PDF e Excel"
      ],
      ctaText: "Assinar agora",
      ctaVariant: "solid",
      isPopular: true
    },
    {
      title: "Nutri ChatBot Enterprise",
      price: "R$ 99,99",
      period: "por mês",
      description: "Para clínicas e consultórios com múltiplos profissionais",
      features: [
        "Tudo do plano Pro incluído",
        "Múltiplos nutricionistas na mesma conta",
        "Dashboard administrativo completo",
        "API para integrações customizadas",
        "White label (sua marca)",
        "Treinamento personalizado",
        "Suporte dedicado 24/7",
        "SLA garantido 99.9%",
        "Customizações exclusivas",
        "Consultoria especializada",
        "Anuidade: R$ 1.199,88 (desconto de 12%)",
        "Parcelamento em até 12x no cartão"
      ],
      ctaText: "Falar com consultor",
      ctaVariant: "outline"
    }
  ];

  const faqItems = [
    {
      question: "Como funciona a demonstração?",
      answer: "Ao solicitar a demonstração, você receberá um link direto do WhatsApp para testar, na prática, o atendimento de pré-consulta, triagem, avaliação e inquérito alimentar realizado pelo Nutri ChatBot. Além disso, enviamos um vídeo explicativo mostrando o passo a passo de uso e como acessar todas as funcionalidades do CRM Dashboard – Painel do Nutricionista, onde ficam organizadas as informações dos seus pacientes."
    },
    {
      question: "Como funciona o cancelamento?",
      answer: "Você pode solicitar o cancelamento a qualquer momento. Em caso de cancelamento, é feita a restituição proporcional dos meses não utilizados, descontando uma taxa de rescisão de 30%, referente ao tempo laboral (pró-labore) de atendimento e à execução dos serviços já realizados."
    },
    {
      question: "Os dados dos meus pacientes ficam seguros?",
      answer: "Absolutamente! Utilizamos criptografia de ponta a ponta, backup automático e somos 100% compatíveis com a LGPD. Seus dados nunca são compartilhados com terceiros."
    },
    {
      question: "Preciso de conhecimento técnico para usar?",
      answer: "Não! O Nutri ChatBot foi desenvolvido para ser extremamente simples. Em 5 minutos você já está atendendo pacientes. Oferecemos suporte completo para configuração e um vídeo explicativo detalhado."
    },
    {
      question: "Como é calculado o ROI de 500%?",
      answer: "Baseado na economia de 40 minutos por consulta. Um nutricionista com 20 consultas/mês economiza 13h, que pode converter em 6+ consultas extras, gerando receita adicional de R$ 900+, contra investimento de R$ 49 = ROI de 500%+."
    },
    {
      question: "Como funciona o parcelamento do plano Enterprise?",
      answer: "O plano Enterprise pode ser pago mensalmente por R$ 99,99, anualmente por R$ 1.199,88 (12% de desconto) ou parcelado em até 12x no cartão com juros calculados automaticamente conforme o número de parcelas escolhidas."
    },
    {
      question: "Posso integrar com minha agenda atual?",
      answer: "Sim! O Nutri ChatBot se integra com as principais ferramentas de agendamento e pode exportar dados para qualquer sistema que você já utiliza. Além disso, todas as informações ficam organizadas no CRM Dashboard do Nutricionista."
    }
  ];

  return (
    <>
      <SEO 
        title="Preços - Nutri ChatBot | Planos a partir de R$ 49/mês"
        description="Conheça os planos do Nutri ChatBot: plano profissional R$ 49/mês e Enterprise R$ 99,99/mês com ROI comprovado. Transforme sua prática nutricional hoje!"
        keywords="preço chatbot nutricionista, plano nutri chatbot, investimento nutrição automação, ROI consultório nutricional"
        url="/precos"
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
            spacing={8}
            textAlign="center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <VStack spacing={4}>
              <Badge colorScheme="brand" px={4} py={2} borderRadius="full">
                ROI COMPROVADO DE 500%
              </Badge>
              <Heading
                as="h1"
                size={{ base: '2xl', md: '3xl' }}
                lineHeight="1.2"
                color="gray.900"
                fontWeight="700"
                maxW="800px"
              >
                Invista{' '}
                <Text as="span" color="brand.500">
                  R$ 49/mês
                </Text>{' '}
                e ganhe{' '}
                <Text as="span" color="tech.500">
                  R$ 1.800+
                </Text>{' '}
                por mês
              </Heading>

              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                maxW="600px"
                lineHeight="1.6"
              >
                Com o Nutri ChatBot, você economiza 40 minutos por consulta e pode 
                atender 6+ pacientes extras por mês. O investimento se paga sozinho!
              </Text>
            </VStack>

            {/* Quick Stats */}
            <SimpleGrid columns={{ base: 2, md: 4 }} spacing={8} py={6}>
              <VStack spacing={2}>
                <Text fontSize="3xl" fontWeight="bold" color="brand.500">
                  R$ 49
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Investimento mensal
                </Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontSize="3xl" fontWeight="bold" color="tech.500">
                  40min
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Economia por consulta
                </Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontSize="3xl" fontWeight="bold" color="green.500">
                  +R$ 1.800
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  Receita extra/mês
                </Text>
              </VStack>
              <VStack spacing={2}>
                <Text fontSize="3xl" fontWeight="bold" color="purple.500">
                  500%
                </Text>
                <Text fontSize="sm" color="gray.600" textAlign="center">
                  ROI mensal
                </Text>
              </VStack>
            </SimpleGrid>
          </MotionStack>
        </Container>
      </Box>

      {/* Pricing Plans */}
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
                Escolha seu plano
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Transparência total, sem pegadinhas. Cancele quando quiser.
              </Text>
            </MotionStack>

            {/* Plans Grid */}
            <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={8} w="full" justifyItems="center">
              {plans.map((plan, index) => (
                <PricingCard
                  key={index}
                  title={plan.title}
                  price={plan.price}
                  period={plan.period}
                  description={plan.description}
                  features={plan.features}
                  isPopular={plan.isPopular}
                  ctaText={plan.ctaText}
                  ctaVariant={plan.ctaVariant}
                  delay={index * 0.1}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>
      
      {/* Enterprise Payment Details */}
      <Box py={10} bg="gray.50">
        <Container maxW="1200px">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            w="full"
            maxW="600px"
            mx="auto"
            bg="gradient.500"
            bgGradient="linear(135deg, purple.500 0%, blue.500 100%)"
            p={6}
            borderRadius="xl"
            color="white"
            textAlign="center"
          >
            <VStack spacing={4}>
              <Heading size="lg">Plano Enterprise - Opções de Pagamento</Heading>
              <SimpleGrid columns={{ base: 1, md: 3 }} spacing={4} w="full">
                <VStack spacing={2}>
                  <Text fontSize="sm" opacity={0.9}>Mensal</Text>
                  <Text fontSize="xl" fontWeight="bold">R$ 99,99</Text>
                  <Text fontSize="xs" opacity={0.8}>por mês</Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="sm" opacity={0.9}>Anual À vista</Text>
                  <Text fontSize="xl" fontWeight="bold">R$ 1.199,88</Text>
                  <Text fontSize="xs" opacity={0.8} color="green.200">Economia de 12%</Text>
                </VStack>
                <VStack spacing={2}>
                  <Text fontSize="sm" opacity={0.9}>Parcelamento</Text>
                  <Text fontSize="xl" fontWeight="bold">Até 12x</Text>
                  <Text fontSize="xs" opacity={0.8}>no cartão</Text>
                </VStack>
              </SimpleGrid>
              <Text fontSize="sm" opacity={0.9}>
                💳 Juros calculados automaticamente conforme número de parcelas escolhidas
              </Text>
            </VStack>
          </MotionBox>
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
                Calcule seu retorno real
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Use nossa calculadora para ver exatamente quanto você pode 
                ganhar com o Nutri ChatBot na sua realidade específica.
              </Text>
              
              <VStack spacing={4} align="start">
                <HStack>
                  <Icon as={FaClock} color="brand.500" />
                  <Text fontSize="sm">
                    <strong>40 minutos economizados</strong> por consulta automatizada
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={FaChartLine} color="brand.500" />
                  <Text fontSize="sm">
                    <strong>6+ consultas extras</strong> possíveis por mês
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={FaRocket} color="brand.500" />
                  <Text fontSize="sm">
                    <strong>ROI médio de 500%</strong> comprovado pelos usuários
                  </Text>
                </HStack>
              </VStack>
            </MotionStack>

            {/* Right Content - Calculator */}
            <ROICalculator />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Guarantees Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="1200px">
          <VStack spacing={16}>
            <MotionStack
              spacing={4}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Nossas Garantias
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Investimento 100% seguro com garantias que protegem você
              </Text>
            </MotionStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              {[
                {
                  icon: FaShieldAlt,
                  title: "Custo baixíssimo",
                  description: "R$ 1,60/dia - menos que um café"
                },
                {
                  icon: FaHeart,
                  title: "Sem fidelidade",
                  description: "Cancele quando quiser, sem multa"
                },
                {
                  icon: FaHeadset,
                  title: "Suporte incluído",
                  description: "Ajuda especializada sempre disponível"
                },
                {
                  icon: FaLock,
                  title: "LGPD compliant",
                  description: "Dados 100% seguros e protegidos"
                }
              ].map((guarantee, index) => (
                <MotionBox
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  textAlign="center"
                  p={6}
                  bg="white"
                  borderRadius="xl"
                  boxShadow="md"
                >
                  <VStack spacing={4}>
                    <Icon
                      as={guarantee.icon}
                      w={12}
                      h={12}
                      color="brand.500"
                      p={2}
                      bg="brand.50"
                      borderRadius="full"
                    />
                    <Heading size="md" color="gray.800">
                      {guarantee.title}
                    </Heading>
                    <Text fontSize="sm" color="gray.600">
                      {guarantee.description}
                    </Text>
                  </VStack>
                </MotionBox>
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={20} bg="white">
        <Container maxW="1200px">
          <VStack spacing={12}>
            <MotionStack
              spacing={4}
              textAlign="center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="2xl" color="gray.900">
                Perguntas Frequentes
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Esclarecemos suas principais dúvidas sobre investimento e funcionamento
              </Text>
            </MotionStack>

            <MotionBox
              w="full"
              maxW="800px"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion allowMultiple>
                {faqItems.map((item, index) => (
                  <AccordionItem key={index} border="none" mb={4}>
                    <AccordionButton
                      bg="gray.50"
                      p={6}
                      borderRadius="lg"
                      _hover={{ bg: 'gray.100' }}
                      border="1px"
                      borderColor="gray.100"
                    >
                      <Box flex="1" textAlign="left">
                        <Text fontWeight="600" fontSize="lg">
                          {item.question}
                        </Text>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                    <AccordionPanel bg="gray.50" px={6} pb={6} borderRadius="lg">
                      <Text color="gray.600" lineHeight="1.6">
                        {item.answer}
                      </Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </MotionBox>
          </VStack>
        </Container>
      </Box>

      {/* Final CTA Section */}
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
              Pronto para multiplicar sua receita?
            </Heading>
            <Text fontSize="xl" maxW="600px" mx="auto" opacity={0.9}>
              Comece hoje mesmo e veja na prática como o Nutri ChatBot 
              pode transformar sua prática nutricional.
            </Text>
            
            <VStack spacing={4}>
              <HStack spacing={4} justify="center" flexWrap="wrap">
                <Button
                  as={RouterLink}
                  to="/contato"
                  size="xl"
                  bg="white"
                  color="brand.500"
                  px={10}
                  py={8}
                  fontSize="xl"
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    bg: 'gray.50'
                  }}
                  boxShadow="2xl"
                >
                  Custo acessível, benefício gigante: R$1,60/dia
                </Button>
                <Button
                  as="a"
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  size="xl"
                  variant="outline"
                  borderColor="white"
                  color="white"
                  leftIcon={<FaWhatsapp />}
                  px={10}
                  py={8}
                  fontSize="xl"
                  _hover={{ 
                    transform: 'translateY(-2px)',
                    bg: 'whiteAlpha.200'
                  }}
                >
                  Falar com consultor
                </Button>
              </HStack>
              
              <Text fontSize="sm" opacity={0.8} textAlign="center">
                ✅ Investimento mínimo • ✅ Cancele quando quiser • ✅ Suporte incluído
              </Text>
            </VStack>
          </MotionStack>
        </Container>
      </Box>
    </>
  );
};

export default Precos;