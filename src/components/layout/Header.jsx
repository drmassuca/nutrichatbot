import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Image,
  Text,
  Container,
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
} from '@chakra-ui/react';
import { HiMenu, HiX } from 'react-icons/hi';
import { FaWhatsapp } from 'react-icons/fa';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

const NavLink = ({ children, to, ...props }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  return (
    <Box
      as={RouterLink}
      to={to}
      px={3}
      py={2}
      rounded="md"
      color={isActive ? 'brand.500' : 'gray.600'}
      fontWeight={isActive ? '600' : '500'}
      fontSize="md"
      _hover={{
        textDecoration: 'none',
        color: 'brand.500',
        transform: 'translateY(-1px)',
      }}
      transition="all 0.2s"
      {...props}
    >
      {children}
    </Box>
  );
};

NavLink.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string.isRequired,
};

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');

  const navigationItems = [
    { label: 'Início', to: '/' },
    { label: 'Sobre', to: '/sobre' },
    { label: 'Funcionalidades', to: '/funcionalidades' },
    { label: 'Benefícios', to: '/beneficios' },
    { label: 'Preços', to: '/precos' },
    { label: 'Contato', to: '/contato' },
  ];

  return (
    <Box 
      bg={bg} 
      borderBottom="1px" 
      borderColor={borderColor}
      position="sticky"
      top="0"
      zIndex="sticky"
      boxShadow="sm"
    >
      <Container maxW="1200px">
        <Flex h="70px" alignItems="center" justifyContent="space-between">
          {/* Logo */}
          <Flex alignItems="center" gap={{ base: 2, sm: 3 }}>
            <Box 
              as={RouterLink} 
              to="/" 
              _hover={{ transform: 'scale(1.05)' }} 
              transition="transform 0.2s"
              display="flex"
              alignItems="center"
              gap={{ base: 2, sm: 3 }}
            >
              <Image
                src="/images/logoicon.webp"
                alt="Nutri ChatBot"
                h="40px"
                w="auto"
                fallback={
                  <Box 
                    w="40px" 
                    h="40px" 
                    bg="brand.500" 
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    color="white"
                    fontWeight="bold"
                    fontSize="lg"
                  >
                    NC
                  </Box>
                }
              />
              {/* Nome da empresa */}
              <Box display="block">
                <Text 
                  fontSize={{ base: 'lg', sm: 'xl', md: '2xl' }} 
                  fontWeight="700"
                  lineHeight="1"
                  letterSpacing="-0.5px"
                  fontFamily="heading"
                >
                  <Text as="span" color="tech.500">
                    Nutri
                  </Text>
                  <Text as="span" color="brand.500">
                    ChatBot
                  </Text>
                </Text>
              </Box>
            </Box>
          </Flex>

          {/* Desktop Navigation */}
          <HStack as="nav" spacing={1} display={{ base: 'none', lg: 'flex' }}>
            {navigationItems.map((item) => (
              <NavLink key={item.to} to={item.to}>
                {item.label}
              </NavLink>
            ))}
          </HStack>

          {/* CTA Buttons */}
          <HStack spacing={3} display={{ base: 'none', md: 'flex' }}>
            <Button
              as="a"
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaWhatsapp />}
              variant="outline"
              size="sm"
              colorScheme="brand"
              _hover={{ transform: 'translateY(-1px)' }}
            >
              WhatsApp
            </Button>
            <Button
              as={RouterLink}
              to="/contato"
              variant="solid"
              size="sm"
              colorScheme="brand"
              _hover={{ transform: 'translateY(-1px)' }}
            >
              Solicitar Demo
            </Button>
          </HStack>

          {/* Mobile menu button */}
          <IconButton
            size="md"
            icon={isOpen ? <HiX /> : <HiMenu />}
            aria-label="Abrir Menu"
            display={{ base: 'flex', lg: 'none' }}
            onClick={isOpen ? onClose : onOpen}
            variant="ghost"
          />
        </Flex>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="sm"
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody p={0}>
            {/* Logo no drawer mobile */}
            <Box p={4} borderBottom="1px" borderColor="gray.100">
              <Flex alignItems="center" gap={3} justify="center">
                <Image
                  src="/images/logoicon.webp"
                  alt="Nutri ChatBot"
                  h="32px"
                  w="auto"
                  fallback={
                    <Box 
                      w="32px" 
                      h="32px" 
                      bg="brand.500" 
                      borderRadius="lg"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      color="white"
                      fontWeight="bold"
                      fontSize="md"
                    >
                      NC
                    </Box>
                  }
                />
                <Text 
                  fontSize="xl" 
                  fontWeight="700"
                  lineHeight="1"
                  letterSpacing="-0.5px"
                  fontFamily="heading"
                >
                  <Text as="span" color="tech.500">
                    Nutri
                  </Text>
                  <Text as="span" color="brand.500">
                    ChatBot
                  </Text>
                </Text>
              </Flex>
            </Box>
            <VStack spacing={0} align="stretch">
              {navigationItems.map((item) => (
                <Box
                  key={item.to}
                  as={RouterLink}
                  to={item.to}
                  p={4}
                  borderBottom="1px"
                  borderColor="gray.100"
                  color="gray.700"
                  fontWeight="500"
                  _hover={{
                    bg: 'brand.50',
                    color: 'brand.500',
                  }}
                  onClick={onClose}
                >
                  {item.label}
                </Box>
              ))}
              
              {/* Mobile CTAs */}
              <VStack spacing={3} p={4} bg="gray.50">
                <Button
                  as="a"
                  href="https://wa.me/5511999999999"
                  target="_blank"
                  rel="noopener noreferrer"
                  leftIcon={<FaWhatsapp />}
                  variant="outline"
                  colorScheme="brand"
                  w="full"
                  size="lg"
                >
                  WhatsApp
                </Button>
                <Button
                  as={RouterLink}
                  to="/contato"
                  variant="solid"
                  colorScheme="brand"
                  w="full"
                  size="lg"
                  onClick={onClose}
                >
                  Solicitar Demo
                </Button>
              </VStack>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Header;
