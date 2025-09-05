import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  useColorModeValue,
  Icon,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Select,
  Checkbox,
  Alert,
  AlertIcon,
  Card,
  CardBody,
  Divider,
  Badge,
  useToast,
} from '@chakra-ui/react';
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaPhone,
  FaClock,
  FaUsers,
  FaQuestionCircle,
  FaRocket,
  FaHeadset,
  FaComments,
  FaCalendarAlt,
  FaGlobe
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import SEO from '../components/seo/SEO';
import PropTypes from 'prop-types';

const MotionBox = motion(Box);
const MotionStack = motion(VStack);

const ContactCard = ({ icon, title, description, action, actionText, delay = 0 }) => {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <Card
        bg={bg}
        border="1px"
        borderColor={borderColor}
        _hover={{
          transform: 'translateY(-4px)',
          boxShadow: 'xl',
          borderColor: 'brand.200'
        }}
        transition="all 0.3s ease"
        h="full"
      >
        <CardBody p={8}>
          <VStack spacing={6} align="start" h="full">
            <Icon
              as={icon}
              w={12}
              h={12}
              color="brand.500"
              p={2}
              bg="brand.50"
              borderRadius="full"
            />
            
            <VStack spacing={2} align="start" flex={1}>
              <Heading size="md" color="gray.800">
                {title}
              </Heading>
              <Text color="gray.600" fontSize="sm" lineHeight="1.6">
                {description}
              </Text>
            </VStack>
            
            <Button
              onClick={action}
              colorScheme="brand"
              variant="outline"
              size="sm"
              w="full"
              _hover={{ transform: 'translateY(-1px)' }}
            >
              {actionText}
            </Button>
          </VStack>
        </CardBody>
      </Card>
    </MotionBox>
  );
};

ContactCard.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  action: PropTypes.func.isRequired,
  actionText: PropTypes.string.isRequired,
  delay: PropTypes.number,
};

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    empresa: '',
    tipoNegocio: '',
    mensagem: '',
    aceiteTermos: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envio do formulário
    try {
      // Aqui você integraria com sua API/backend
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Mensagem enviada com sucesso!",
        description: "Entraremos em contato em até 2 horas úteis.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      
      // Reset form
      setFormData({
        nome: '',
        email: '',
        telefone: '',
        empresa: '',
        tipoNegocio: '',
        mensagem: '',
        aceiteTermos: false
      });
    } catch (error) {
      toast({
        title: "Erro ao enviar mensagem",
        description: "Tente novamente ou entre em contato via WhatsApp.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const isFormValid = formData.nome && formData.email && formData.mensagem && formData.aceiteTermos;

  return (
    <MotionBox
      initial={{ opacity: 0, x: 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      bg="white"
      p={8}
      borderRadius="xl"
      boxShadow="lg"
      border="1px"
      borderColor="gray.100"
    >
      <form onSubmit={handleSubmit}>
        <VStack spacing={6}>
          <VStack spacing={2} align="start" w="full">
            <Heading size="lg" color="gray.800">
              Envie sua mensagem
            </Heading>
            <Text color="gray.600">
              Preencha o formulário e entraremos em contato em até 2 horas úteis
            </Text>
          </VStack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="600">
                Nome completo
              </FormLabel>
              <Input
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                placeholder="Seu nome completo"
                size="lg"
              />
            </FormControl>

            <FormControl isRequired>
              <FormLabel fontSize="sm" fontWeight="600">
                E-mail
              </FormLabel>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="seu@email.com"
                size="lg"
              />
            </FormControl>
          </SimpleGrid>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
            <FormControl>
              <FormLabel fontSize="sm" fontWeight="600">
                Telefone/WhatsApp
              </FormLabel>
              <Input
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                placeholder="(11) 99999-9999"
                size="lg"
              />
            </FormControl>

            <FormControl>
              <FormLabel fontSize="sm" fontWeight="600">
                Empresa/Consultório
              </FormLabel>
              <Input
                name="empresa"
                value={formData.empresa}
                onChange={handleChange}
                placeholder="Nome da sua empresa"
                size="lg"
              />
            </FormControl>
          </SimpleGrid>

          <FormControl>
            <FormLabel fontSize="sm" fontWeight="600">
              Tipo de negócio
            </FormLabel>
            <Select
              name="tipoNegocio"
              value={formData.tipoNegocio}
              onChange={handleChange}
              placeholder="Selecione uma opção"
              size="lg"
            >
              <option value="nutricionista-autonomo">Nutricionista autônomo</option>
              <option value="clinica-pequena">Clínica pequena (2-5 profissionais)</option>
              <option value="clinica-media">Clínica média (6-15 profissionais)</option>
              <option value="clinica-grande">Clínica grande (15+ profissionais)</option>
              <option value="consultorio-online">Consultório online</option>
              <option value="outro">Outro</option>
            </Select>
          </FormControl>

          <FormControl isRequired>
            <FormLabel fontSize="sm" fontWeight="600">
              Mensagem
            </FormLabel>
            <Textarea
              name="mensagem"
              value={formData.mensagem}
              onChange={handleChange}
              placeholder="Conte-nos como podemos ajudar você..."
              rows={4}
              size="lg"
            />
          </FormControl>

          <FormControl isRequired>
            <Checkbox
              name="aceiteTermos"
              isChecked={formData.aceiteTermos}
              onChange={handleChange}
              colorScheme="brand"
            >
              <Text fontSize="sm" color="gray.600">
                Aceito receber comunicações e concordo com os{' '}
                <Text as="span" color="brand.500" textDecoration="underline">
                  termos de uso
                </Text>
              </Text>
            </Checkbox>
          </FormControl>

          <Button
            type="submit"
            colorScheme="brand"
            size="lg"
            w="full"
            isLoading={isSubmitting}
            loadingText="Enviando..."
            isDisabled={!isFormValid}
            _hover={{ transform: 'translateY(-2px)' }}
          >
            Enviar mensagem
          </Button>

          <Alert status="info" borderRadius="lg">
            <AlertIcon />
            <Text fontSize="sm">
              <strong>Resposta rápida:</strong> Respondemos todas as mensagens em até 2 horas úteis
            </Text>
          </Alert>
        </VStack>
      </form>
    </MotionBox>
  );
};

const Contato = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  const contactMethods = [
    {
      icon: FaWhatsapp,
      title: "WhatsApp Direto",
      description: "Resposta imediata via WhatsApp para dúvidas rápidas e demonstrações ao vivo",
      action: () => window.open('https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Nutri ChatBot', '_blank'),
      actionText: "Chamar no WhatsApp"
    },
    {
      icon: FaCalendarAlt,
      title: "Agendar Demonstração",
      description: "Demonstração personalizada de 30 minutos com nosso especialista em nutrição digital",
      action: () => window.open('/demo', '_blank'),
      actionText: "Agendar demo"
    },
    {
      icon: FaHeadset,
      title: "Suporte Técnico",
      description: "Central de ajuda para clientes ativos com suporte técnico especializado",
      action: () => window.open('https://wa.me/5511999999999?text=Preciso de suporte técnico', '_blank'),
      actionText: "Solicitar suporte"
    },
    {
      icon: FaUsers,
      title: "Vendas Enterprise",
      description: "Soluções customizadas para clínicas e redes com múltiplos profissionais",
      action: () => window.open('https://wa.me/5511999999999?text=Interessado em soluções Enterprise', '_blank'),
      actionText: "Falar com vendas"
    }
  ];

  const businessHours = [
    { day: "Segunda à Sexta", hours: "08:00 - 18:00" },
    { day: "Sábado", hours: "09:00 - 13:00" },
    { day: "Domingo", hours: "Fechado" }
  ];

  return (
    <>
      <SEO 
        title="Contato - Nutri ChatBot | Fale Conosco via WhatsApp"
        description="Entre em contato com o Nutri ChatBot: WhatsApp (11) 99999-9999, demonstração gratuita, suporte técnico especializado. Respondemos em até 2h!"
        keywords="contato nutri chatbot, suporte nutricional, whatsapp nutricionista, demonstração chatbot, vendas enterprise"
        url="/contato"
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
              <VStack spacing={4} align="start">
                <Badge colorScheme="brand" px={4} py={2} borderRadius="full">
                  RESPOSTA EM ATÉ 2 HORAS
                </Badge>
                <Heading
                  as="h1"
                  size={{ base: '2xl', md: '3xl' }}
                  lineHeight="1.2"
                  color="gray.900"
                  fontWeight="700"
                >
                  Fale conosco e{' '}
                  <Text as="span" color="brand.500">
                    transforme
                  </Text>{' '}
                  sua prática hoje mesmo
                </Heading>
                <Text 
                  fontSize={{ base: 'lg', md: 'xl' }}
                  color="gray.600"
                  lineHeight="1.6"
                >
                  Nossa equipe de especialistas está pronta para ajudar você a 
                  automatizar sua prática nutricional e multiplicar seus resultados.
                </Text>
              </VStack>

              {/* Quick Contact Stats */}
              <SimpleGrid columns={2} spacing={6} py={4}>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                    &lt; 2h
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    Tempo de resposta
                  </Text>
                </VStack>
                <VStack spacing={1}>
                  <Text fontSize="2xl" fontWeight="bold" color="tech.500">
                    24/7
                  </Text>
                  <Text fontSize="sm" color="gray.600" textAlign="center">
                    WhatsApp disponível
                  </Text>
                </VStack>
              </SimpleGrid>

              {/* Quick Actions */}
              <HStack spacing={4} flexWrap="wrap">
                <Button
                  as="a"
                  href="https://wa.me/5511999999999?text=Olá! Gostaria de saber mais sobre o Nutri ChatBot"
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<FaWhatsapp />}
                  colorScheme="brand"
                  size="lg"
                  px={6}
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  WhatsApp direto
                </Button>
                <Button
                  as="a"
                  href="tel:+5511999999999"
                  leftIcon={<FaPhone />}
                  variant="outline"
                  colorScheme="brand"
                  size="lg"
                  px={6}
                  _hover={{ transform: 'translateY(-2px)' }}
                >
                  Ligar agora
                </Button>
              </HStack>
            </MotionStack>

            {/* Right Content - Contact Info */}
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
                  Informações de Contato
                </Heading>
                
                <VStack spacing={4} w="full">
                  <HStack spacing={4} w="full">
                    <Icon as={FaWhatsapp} color="green.500" w={6} h={6} />
                    <VStack spacing={0} align="start">
                      <Text fontWeight="600" color="gray.800">
                        WhatsApp
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        (11) 99999-9999
                      </Text>
                    </VStack>
                  </HStack>
                  
                  <HStack spacing={4} w="full">
                    <Icon as={FaEnvelope} color="tech.500" w={6} h={6} />
                    <VStack spacing={0} align="start">
                      <Text fontWeight="600" color="gray.800">
                        E-mail
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        contato@nutrichatbot.com.br
                      </Text>
                    </VStack>
                  </HStack>
                  
                  <HStack spacing={4} w="full">
                    <Icon as={FaGlobe} color="brand.500" w={6} h={6} />
                    <VStack spacing={0} align="start">
                      <Text fontWeight="600" color="gray.800">
                        Website
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        www.nutrichatbot.com.br
                      </Text>
                    </VStack>
                  </HStack>
                </VStack>
                
                <Divider />
                
                <VStack spacing={3} w="full">
                  <HStack spacing={2}>
                    <Icon as={FaClock} color="brand.500" w={5} h={5} />
                    <Text fontWeight="600" color="gray.800" fontSize="sm">
                      Horário de Atendimento
                    </Text>
                  </HStack>
                  {businessHours.map((schedule, index) => (
                    <HStack key={index} justify="space-between" w="full">
                      <Text fontSize="sm" color="gray.600">
                        {schedule.day}
                      </Text>
                      <Text fontSize="sm" color="gray.800" fontWeight="500">
                        {schedule.hours}
                      </Text>
                    </HStack>
                  ))}
                </VStack>
              </VStack>
            </MotionBox>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Contact Methods */}
      <Box py={20} bg="white">
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
                Como podemos ajudar você?
              </Heading>
              <Text fontSize="xl" color="gray.600" maxW="600px">
                Escolha a melhor forma de entrar em contato baseada na sua necessidade
              </Text>
            </MotionStack>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
              {contactMethods.map((method, index) => (
                <ContactCard
                  key={index}
                  icon={method.icon}
                  title={method.title}
                  description={method.description}
                  action={method.action}
                  actionText={method.actionText}
                  delay={index * 0.1}
                />
              ))}
            </SimpleGrid>
          </VStack>
        </Container>
      </Box>

      {/* Contact Form Section */}
      <Box py={20} bg="gray.50">
        <Container maxW="1200px">
          <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={16} alignItems="start">
            {/* Left Content */}
            <MotionStack
              spacing={6}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Heading size="xl" color="gray.900">
                Ainda tem dúvidas?
              </Heading>
              <Text fontSize="lg" color="gray.600">
                Use o formulário ao lado para enviar sua mensagem detalhada. 
                Nossa equipe retornará em até 2 horas úteis.
              </Text>
              
              <VStack spacing={4} align="start">
                <HStack>
                  <Icon as={FaComments} color="brand.500" />
                  <Text fontSize="sm">
                    <strong>Atendimento humanizado:</strong> Toda mensagem é respondida por um especialista
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={FaRocket} color="brand.500" />
                  <Text fontSize="sm">
                    <strong>Proposta personalizada:</strong> Analisamos seu caso específico
                  </Text>
                </HStack>
                <HStack>
                  <Icon as={FaQuestionCircle} color="brand.500" />
                  <Text fontSize="sm">
                    <strong>Esclarecimento completo:</strong> Tiramos todas suas dúvidas técnicas
                  </Text>
                </HStack>
              </VStack>

              <Alert status="success" borderRadius="lg">
                <AlertIcon />
                <VStack spacing={1} align="start">
                  <Text fontSize="sm" fontWeight="600">
                    Resposta garantida em até 2 horas úteis
                  </Text>
                  <Text fontSize="xs" color="gray.600">
                    Comprometidos com atendimento de excelência
                  </Text>
                </VStack>
              </Alert>
            </MotionStack>

            {/* Right Content - Form */}
            <ContactForm />
          </SimpleGrid>
        </Container>
      </Box>

      {/* Emergency Contact CTA */}
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
              Precisa de ajuda urgente?
            </Heading>
            <Text fontSize="xl" maxW="600px" mx="auto" opacity={0.9}>
              Para questões urgentes ou demonstrações imediatas, 
              entre em contato direto via WhatsApp.
            </Text>
            
            <Button
              as="a"
              href="https://wa.me/5511999999999?text=Preciso de ajuda urgente com o Nutri ChatBot"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaWhatsapp />}
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
              WhatsApp emergencial
            </Button>

            <Text fontSize="sm" opacity={0.8}>
              ✅ Disponível 24/7 • ✅ Resposta imediata • ✅ Suporte especializado
            </Text>
          </MotionStack>
        </Container>
      </Box>
    </>
  );
};

export default Contato;