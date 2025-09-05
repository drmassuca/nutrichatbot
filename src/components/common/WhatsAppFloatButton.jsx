import {
  Box,
  Button,
  Tooltip,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { generateWhatsAppUrl, WHATSAPP_CONFIG } from '../../config/whatsapp';

const MotionBox = motion(Box);

const WhatsAppFloatButton = ({ messageType = 'default', customMessage = null }) => {
  const bgColor = useColorModeValue('#25D366', '#25D366');
  const hoverBgColor = useColorModeValue('#22C55E', '#22C55E');
  
  // Gera URL usando a configuração centralizada
  const whatsappUrl = generateWhatsAppUrl(messageType, customMessage);
  
  // Obtém configurações de exibição
  const { display } = WHATSAPP_CONFIG;

  return (
    <MotionBox
      position="fixed"
      bottom={{ base: '20px', md: '30px' }}
      right={{ base: '20px', md: '30px' }}
      zIndex="9999"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: display.appearDelay / 1000 }}
    >
      <Tooltip
        label="Fale conosco no WhatsApp"
        placement="left"
        hasArrow
        bg="gray.800"
        color="white"
        fontSize="sm"
        px={3}
        py={2}
        borderRadius="md"
      >
        <Button
          as="a"
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          size="lg"
          borderRadius="full"
          bg={bgColor}
          color="white"
          w={{ base: '60px', md: '70px' }}
          h={{ base: '60px', md: '70px' }}
          minW="auto"
          p={0}
          boxShadow="lg"
          _hover={{
            bg: hoverBgColor,
            transform: 'scale(1.1)',
            boxShadow: 'xl',
          }}
          _active={{
            transform: 'scale(0.95)',
          }}
          sx={{
            transition: 'all 0.3s ease',
            '@keyframes pulse': {
              '0%': {
                transform: 'scale(1)',
                boxShadow: '0 0 0 0 rgba(37, 211, 102, 0.7)',
              },
              '70%': {
                transform: 'scale(1.05)',
                boxShadow: '0 0 0 10px rgba(37, 211, 102, 0)',
              },
              '100%': {
                transform: 'scale(1)',
                boxShadow: '0 0 0 0 rgba(37, 211, 102, 0)',
              },
            },
            animation: 'pulse 2s infinite',
          }}
          aria-label="Contato WhatsApp"
        >
          <FaWhatsapp size="28px" />
        </Button>
      </Tooltip>

      {/* Indicador de mensagem - aparece depois de 3 segundos */}
      <MotionBox
        position="absolute"
        top="-8px"
        right="-8px"
        w="20px"
        h="20px"
        bg="red.500"
        borderRadius="full"
        display="flex"
        alignItems="center"
        justifyContent="center"
        border="2px solid white"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: display.notificationDelay / 1000 }}
      >
        <Box
          w="8px"
          h="8px"
          bg="white"
          borderRadius="full"
          sx={{
            '@keyframes notificationPulse': {
              '0%': { transform: 'scale(1)' },
              '50%': { transform: 'scale(1.2)' },
              '100%': { transform: 'scale(1)' },
            },
            animation: 'notificationPulse 1.5s infinite',
          }}
        />
      </MotionBox>

      {/* Texto de call-to-action que aparece temporariamente */}
      <MotionBox
        position="absolute"
        right="80px"
        top="50%"
        transform="translateY(-50%)"
        bg="white"
        px={4}
        py={2}
        borderRadius="lg"
        boxShadow="lg"
        border="1px solid"
        borderColor="gray.200"
        initial={{ opacity: 0, x: 20, scale: 0.8 }}
        animate={{ 
          opacity: [0, 1, 1, 0],
          x: [20, 0, 0, 20],
          scale: [0.8, 1, 1, 0.8]
        }}
        transition={{ 
          duration: display.ctaDuration,
          delay: display.ctaDelay / 1000,
          times: [0, 0.2, 0.8, 1]
        }}
        whiteSpace="nowrap"
        display={{ base: 'none', md: 'block' }}
      >
        <Box
          position="relative"
          color="gray.800"
          fontSize="sm"
          fontWeight="semibold"
        >
          {display.ctaTexts[0]}
          
          {/* Seta apontando para o botão */}
          <Box
            position="absolute"
            right="-8px"
            top="50%"
            transform="translateY(-50%)"
            w="0"
            h="0"
            borderLeft="8px solid white"
            borderTop="6px solid transparent"
            borderBottom="6px solid transparent"
          />
        </Box>
      </MotionBox>
    </MotionBox>
  );
};

WhatsAppFloatButton.propTypes = {
  messageType: PropTypes.string,
  customMessage: PropTypes.string,
};

export default WhatsAppFloatButton;