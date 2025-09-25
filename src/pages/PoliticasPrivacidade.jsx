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
  Icon,
  List,
  ListItem,
  ListIcon,
  Alert,
  AlertIcon,
  SimpleGrid,
} from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';
import { 
  FaShieldAlt, 
  FaLock, 
  FaCheck, 
  FaWhatsapp,
  FaArrowLeft,
  FaCookie,
  FaUserShield,
  FaFileContract,
  FaClock,
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import SEO from '../components/seo/SEO';
import PropTypes from 'prop-types';

const MotionBox = motion(Box);
const MotionStack = motion(VStack);

const PolicySection = ({ icon, title, children, delay = 0 }) => {
  return (
    <MotionBox
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
    >
      <VStack spacing={4} align="start" w="full">
        <HStack spacing={3}>
          <Icon
            as={icon}
            w={6}
            h={6}
            color="brand.500"
            p={1}
            bg="brand.50"
            rounded="full"
          />
          <Heading size="lg" color="gray.800">
            {title}
          </Heading>
        </HStack>
        <Box pl={9} w="full">
          {children}
        </Box>
      </VStack>
    </MotionBox>
  );
};

PolicySection.propTypes = {
  icon: PropTypes.elementType.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  delay: PropTypes.number,
};

const PoliticasPrivacidade = () => {
  const heroBg = useColorModeValue(
    'linear-gradient(135deg, #ffffff 0%, #f0f9f0 100%)',
    'linear-gradient(135deg, #1a202c 0%, #2d3748 100%)'
  );

  const cardBg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <>
      <SEO 
        title="Políticas de Privacidade - Nutri ChatBot | LGPD Compliant"
        description="Conheça nossas políticas de privacidade e proteção de dados. Nutri ChatBot é 100% compatível com LGPD, garantindo total segurança dos dados dos seus pacientes."
        keywords="política privacidade nutri chatbot, LGPD nutricionista, proteção dados pacientes, cookies nutrichatbot"
        url="/politicas-privacidade"
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
              <Badge colorScheme="green" px={4} py={2} borderRadius="full">
                100% LGPD COMPLIANT
              </Badge>
              
              <Heading
                as="h1"
                size={{ base: '2xl', md: '3xl' }}
                lineHeight="1.2"
                color="gray.900"
                fontWeight="700"
                maxW="800px"
              >
                Políticas de{' '}
                <Text as="span" color="brand.500">
                  Privacidade
                </Text>{' '}
                e{' '}
                <Text as="span" color="tech.500">
                  Proteção de Dados
                </Text>
              </Heading>

              <Text 
                fontSize={{ base: 'lg', md: 'xl' }}
                color="gray.600"
                maxW="600px"
                lineHeight="1.6"
              >
                Transparência total sobre como tratamos seus dados pessoais e dos 
                seus pacientes em conformidade com a LGPD
              </Text>
            </VStack>

            {/* Quick Info */}
            <HStack spacing={6} justify="center" flexWrap="wrap" pt={4}>
              <HStack spacing={2}>
                <Icon as={FaShieldAlt} w={5} h={5} color="green.500" />
                <Text fontSize="sm" color="gray.600">
                  Dados criptografados
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaLock} w={5} h={5} color="green.500" />
                <Text fontSize="sm" color="gray.600">
                  Servidor seguro
                </Text>
              </HStack>
              <HStack spacing={2}>
                <Icon as={FaUserShield} w={5} h={5} color="green.500" />
                <Text fontSize="sm" color="gray.600">
                  LGPD completo
                </Text>
              </HStack>
            </HStack>
          </MotionStack>
        </Container>
      </Box>

      {/* Breadcrumb */}
      <Box py={4} bg="gray.50">
        <Container maxW="1200px">
          <Button
            as={RouterLink}
            to="/"
            variant="ghost"
            leftIcon={<FaArrowLeft />}
            size="sm"
            color="gray.600"
          >
            Voltar ao Início
          </Button>
        </Container>
      </Box>

      {/* Content */}
      <Box py={20} bg="white">
        <Container maxW="900px">
          <VStack spacing={16}>
            {/* Intro */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              bg={cardBg}
              p={8}
              borderRadius="xl"
              border="1px"
              borderColor={borderColor}
              boxShadow="lg"
              w="full"
            >
              <VStack spacing={6} align="start">
                <Alert status="info" borderRadius="lg">
                  <AlertIcon />
                  <Box>
                    <Text fontWeight="semibold">Última atualização: Janeiro de 2025</Text>
                    <Text fontSize="sm" mt={1}>
                      Esta política se aplica ao site nutrichatbot.com.br e aos serviços 
                      oferecidos pelo Nutri ChatBot.
                    </Text>
                  </Box>
                </Alert>

                <Text fontSize="lg" lineHeight="1.7" color="gray.700">
                  Esta Política de Privacidade descreve como tratamos as informações pessoais 
                  coletadas através do site <strong>nutrichatbot.com.br</strong> e da plataforma 
                  Nutri ChatBot, em total 
                  conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei 13.709/2018).
                </Text>
              </VStack>
            </MotionBox>

            {/* Seções da Política */}
            <VStack spacing={12} w="full" align="stretch">
              
              {/* 1. Responsável pelos Dados */}
              <PolicySection icon={FaFileContract} title="1. Responsável pelo Tratamento de Dados" delay={0.1}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    O controlador e responsável pelo tratamento dos dados pessoais coletados através 
                    desta plataforma é:
                  </Text>
                  <Box bg="brand.50" p={4} borderRadius="lg" w="full">
                    <VStack spacing={2} align="start">
                      <Text fontWeight="semibold" color="brand.700">
                        Nutri ChatBot
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        E-mail para questões de privacidade: privacidade@nutrichatbot.com.br
                      </Text>
                      <Text fontSize="sm" color="gray.600">
                        WhatsApp: (27) 99669-2520
                      </Text>
                    </VStack>
                  </Box>
                </VStack>
              </PolicySection>

              {/* 2. Dados Coletados */}
              <PolicySection icon={FaUserShield} title="2. Dados Pessoais Coletados" delay={0.2}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    Os dados pessoais que podemos coletar incluem:
                  </Text>
                  
                  <Box>
                    <Heading size="md" color="gray.800" mb={3}>
                      📊 Dados de Navegação (Automáticos)
                    </Heading>
                    <List spacing={2} pl={4}>
                      <ListItem fontSize="sm" color="gray.700">
                        <ListIcon as={FaCheck} color="green.500" />
                        Endereço IP e localização aproximada
                      </ListItem>
                      <ListItem fontSize="sm" color="gray.700">
                        <ListIcon as={FaCheck} color="green.500" />
                        Informações do dispositivo e navegador
                      </ListItem>
                      <ListItem fontSize="sm" color="gray.700">
                        <ListIcon as={FaCheck} color="green.500" />
                        Páginas visitadas e tempo de permanência
                      </ListItem>
                      <ListItem fontSize="sm" color="gray.700">
                        <ListIcon as={FaCheck} color="green.500" />
                        Data e hora dos acessos
                      </ListItem>
                    </List>
                  </Box>

                  <Box>
                    <Heading size="md" color="gray.800" mb={3}>
                      👤 Dados Fornecidos Voluntariamente
                    </Heading>
                    <List spacing={2} pl={4}>
                      <ListItem fontSize="sm" color="gray.700">
                        <ListIcon as={FaCheck} color="green.500" />
                        Nome completo e informações profissionais
                      </ListItem>
                      <ListItem fontSize="sm" color="gray.700">
                        <ListIcon as={FaCheck} color="green.500" />
                        E-mail e número de telefone
                      </ListItem>
                      <ListItem fontSize="sm" color="gray.700">
                        <ListIcon as={FaCheck} color="green.500" />
                        CRN e dados de registro profissional
                      </ListItem>
                      <ListItem fontSize="sm" color="gray.700">
                        <ListIcon as={FaCheck} color="green.500" />
                        Informações compartilhadas via WhatsApp ou formulários
                      </ListItem>
                    </List>
                  </Box>

                  <Alert status="warning" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm">Dados de Pacientes</Text>
                      <Text fontSize="sm" mt={1}>
                        Os dados dos pacientes processados através do Nutri ChatBot são de 
                        responsabilidade exclusiva do nutricionista usuário, que atua como 
                        controlador desses dados.
                      </Text>
                    </Box>
                  </Alert>
                </VStack>
              </PolicySection>

              {/* 3. Finalidade do Tratamento */}
              <PolicySection icon={FaShieldAlt} title="3. Finalidade do Tratamento de Dados" delay={0.3}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    Utilizamos seus dados pessoais para as seguintes finalidades:
                  </Text>
                  
                  <List spacing={3} w="full">
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="green.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Prestação do Serviço
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Fornecer acesso à plataforma e suas funcionalidades
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                    
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="green.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Suporte Técnico
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Oferecer suporte e resolver problemas técnicos
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                    
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="green.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Comunicação Comercial
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Enviar atualizações sobre o serviço e ofertas relevantes
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                    
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="green.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Melhoria do Produto
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Analisar uso e desenvolver novas funcionalidades
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                    
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="green.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Cumprimento Legal
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Atender obrigações legais e regulamentares (CFN, LGPD)
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                  </List>
                </VStack>
              </PolicySection>

              {/* 4. Cookies e Tecnologias */}
              <PolicySection icon={FaCookie} title="4. Cookies e Tecnologias de Rastreamento" delay={0.4}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    Utilizamos cookies e tecnologias similares para melhorar sua experiência:
                  </Text>
                  
                  <Box bg="tech.50" p={4} borderRadius="lg" w="full">
                    <VStack spacing={3} align="start">
                      <Heading size="sm" color="tech.700">
                        🍪 Tipos de Cookies Utilizados
                      </Heading>
                      
                      <List spacing={2} fontSize="sm">
                        <ListItem color="gray.700">
                          <ListIcon as={FaCheck} color="tech.500" />
                          <strong>Cookies Essenciais:</strong> Necessários para funcionamento básico
                        </ListItem>
                        <ListItem color="gray.700">
                          <ListIcon as={FaCheck} color="tech.500" />
                          <strong>Cookies Analíticos:</strong> Google Analytics para estatísticas anônimas
                        </ListItem>
                        <ListItem color="gray.700">
                          <ListIcon as={FaCheck} color="tech.500" />
                          <strong>Cookies de Preferência:</strong> Salvam suas configurações
                        </ListItem>
                        <ListItem color="gray.700">
                          <ListIcon as={FaCheck} color="tech.500" />
                          <strong>Cookies de Marketing:</strong> Para campanhas relevantes (opcional)
                        </ListItem>
                      </List>
                    </VStack>
                  </Box>

                  <Alert status="info" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm">Controle de Cookies</Text>
                      <Text fontSize="sm" mt={1}>
                        Você pode gerenciar suas preferências de cookies através do banner 
                        que aparece na primeira visita ou nas configurações do seu navegador.
                      </Text>
                    </Box>
                  </Alert>
                </VStack>
              </PolicySection>

              {/* 5. Compartilhamento */}
              <PolicySection icon={FaLock} title="5. Compartilhamento de Dados" delay={0.5}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    <strong>Não vendemos, alugamos ou compartilhamos</strong> seus dados pessoais 
                    com terceiros para fins comerciais. Compartilhamento pode ocorrer apenas em:
                  </Text>
                  
                  <List spacing={3} w="full">
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="red.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Prestadores de Serviço
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Serviços de hospedagem (AWS), pagamento e suporte técnico
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                    
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="red.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Obrigações Legais
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Quando exigido por autoridades competentes ou ordem judicial
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                    
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="red.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Proteção de Direitos
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Para proteger nossos direitos, propriedade ou segurança
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                  </List>
                </VStack>
              </PolicySection>

              {/* 6. Segurança */}
              <PolicySection icon={FaShieldAlt} title="6. Segurança dos Dados" delay={0.6}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    Implementamos medidas técnicas e organizacionais robustas para proteger 
                    seus dados:
                  </Text>
                  
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={4} w="full">
                    <Box bg="green.50" p={4} borderRadius="lg">
                      <VStack spacing={2} align="start">
                        <Heading size="sm" color="green.700">
                          🔒 Proteção Técnica
                        </Heading>
                        <List spacing={1} fontSize="sm">
                          <ListItem color="gray.700">• Criptografia SSL/TLS</ListItem>
                          <ListItem color="gray.700">• Servidores seguros AWS</ListItem>
                          <ListItem color="gray.700">• Backup automatizado</ListItem>
                          <ListItem color="gray.700">• Monitoramento 24/7</ListItem>
                        </List>
                      </VStack>
                    </Box>
                    
                    <Box bg="blue.50" p={4} borderRadius="lg">
                      <VStack spacing={2} align="start">
                        <Heading size="sm" color="blue.700">
                          👥 Proteção Organizacional
                        </Heading>
                        <List spacing={1} fontSize="sm">
                          <ListItem color="gray.700">• Acesso restrito</ListItem>
                          <ListItem color="gray.700">• Treinamento da equipe</ListItem>
                          <ListItem color="gray.700">• Auditorias regulares</ListItem>
                          <ListItem color="gray.700">• Políticas internas</ListItem>
                        </List>
                      </VStack>
                    </Box>
                  </SimpleGrid>
                </VStack>
              </PolicySection>

              {/* 7. Direitos do Titular */}
              <PolicySection icon={FaUserShield} title="7. Seus Direitos como Titular dos Dados" delay={0.7}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    Em conformidade com a LGPD, você possui os seguintes direitos:
                  </Text>
                  
                  <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={4} w="full">
                    {[
                      { title: "Acesso", desc: "Saber quais dados pessoais temos sobre você" },
                      { title: "Correção", desc: "Corrigir dados incompletos ou incorretos" },
                      { title: "Exclusão", desc: "Solicitar a remoção dos seus dados" },
                      { title: "Portabilidade", desc: "Receber seus dados em formato estruturado" },
                      { title: "Oposição", desc: "Opor-se ao tratamento em certas situações" },
                      { title: "Informação", desc: "Saber com quem compartilhamos seus dados" }
                    ].map((right, index) => (
                      <Box key={index} bg="purple.50" p={4} borderRadius="lg">
                        <VStack spacing={2} align="start">
                          <Text fontWeight="semibold" color="purple.700" fontSize="sm">
                            ✅ {right.title}
                          </Text>
                          <Text fontSize="sm" color="gray.700">
                            {right.desc}
                          </Text>
                        </VStack>
                      </Box>
                    ))}
                  </SimpleGrid>
                  
                  <Alert status="success" borderRadius="lg">
                    <AlertIcon />
                    <Box>
                      <Text fontWeight="semibold" fontSize="sm">Como Exercer seus Direitos</Text>
                      <Text fontSize="sm" mt={1}>
                        Entre em contato conosco através de privacidade@nutrichatbot.com.br 
                        ou WhatsApp (27) 99669-2520. Responderemos em até 15 dias.
                      </Text>
                    </Box>
                  </Alert>
                </VStack>
              </PolicySection>

              {/* 8. Retenção */}
              <PolicySection icon={FaClock} title="8. Retenção dos Dados" delay={0.8}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    Mantemos seus dados pessoais apenas pelo tempo necessário para as 
                    finalidades descritas nesta política:
                  </Text>
                  
                  <List spacing={3} w="full">
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="orange.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Durante a prestação do serviço
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Enquanto você for usuário ativo da plataforma
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                    
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="orange.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Após cancelamento: até 5 anos
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Para cumprimento de obrigações legais e fiscais
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                    
                    <ListItem>
                      <HStack align="start" spacing={3}>
                        <Icon as={FaCheck} color="orange.500" mt={1} flexShrink={0} />
                        <Box>
                          <Text fontWeight="semibold" color="gray.800">
                            Dados anonimizados
                          </Text>
                          <Text fontSize="sm" color="gray.600">
                            Podem ser mantidos indefinidamente para estatísticas
                          </Text>
                        </Box>
                      </HStack>
                    </ListItem>
                  </List>
                </VStack>
              </PolicySection>

              {/* 9. Alterações */}
              <PolicySection icon={FaFileContract} title="9. Alterações nesta Política" delay={0.9}>
                <VStack spacing={4} align="start">
                  <Text lineHeight="1.7">
                    Esta política pode ser atualizada periodicamente para refletir mudanças 
                    em nossas práticas ou na legislação. Quando isso ocorrer:
                  </Text>
                  
                  <List spacing={2} pl={4}>
                    <ListItem fontSize="sm" color="gray.700">
                      <ListIcon as={FaCheck} color="blue.500" />
                      Atualizaremos a data de &ldquo;última modificação&rdquo;
                    </ListItem>
                    <ListItem fontSize="sm" color="gray.700">
                      <ListIcon as={FaCheck} color="blue.500" />
                      Notificaremos sobre mudanças significativas por e-mail
                    </ListItem>
                    <ListItem fontSize="sm" color="gray.700">
                      <ListIcon as={FaCheck} color="blue.500" />
                      Recomendamos revisar esta página regularmente
                    </ListItem>
                  </List>
                </VStack>
              </PolicySection>

            </VStack>

            {/* Contato Final */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{ once: true }}
              bg="gradient.500"
              bgGradient="linear(135deg, brand.500 0%, tech.500 100%)"
              p={8}
              borderRadius="xl"
              color="white"
              textAlign="center"
              w="full"
            >
              <VStack spacing={6}>
                <Icon as={FaWhatsapp} w={12} h={12} />
                <Heading size="lg">
                  Dúvidas sobre Privacidade?
                </Heading>
                <Text maxW="500px" opacity={0.9}>
                  Nossa equipe está sempre disponível para esclarecer questões 
                  sobre tratamento de dados e privacidade.
                </Text>
                <HStack spacing={4} flexWrap="wrap" justify="center">
                  <Button
                    as="a"
                    href="mailto:privacidade@nutrichatbot.com.br"
                    bg="white"
                    color="brand.500"
                    _hover={{ bg: 'gray.50' }}
                    size="lg"
                  >
                    E-mail: Privacidade
                  </Button>
                  <Button
                    as="a"
                    href="https://wa.me/5527996692520"
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="outline"
                    borderColor="white"
                    color="white"
                    leftIcon={<FaWhatsapp />}
                    _hover={{ bg: 'whiteAlpha.200' }}
                    size="lg"
                  >
                    WhatsApp
                  </Button>
                </HStack>
              </VStack>
            </MotionBox>

          </VStack>
        </Container>
      </Box>
    </>
  );
};

export default PoliticasPrivacidade;
