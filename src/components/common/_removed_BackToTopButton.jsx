import {
  Box,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaArrowUp } from 'react-icons/fa';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useState, useEffect } from 'react';

const MotionBox = motion(Box);

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();
  
  const bgColor = useColorModeValue('white', 'gray.800');
  const hoverBgColor = useColorModeValue('brand.50', 'brand.900');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  // Mostrar botão após rolar 300px
  useEffect(() => {
    const unsubscribe = scrollY.onChange((latest) => {
      setIsVisible(latest > 300);
    });
    return unsubscribe;
  }, [scrollY]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <MotionBox
      position=\"fixed\"
      bottom={{ base: '100px', md: '120px' }} // Acima do WhatsApp
      right={{ base: '20px', md: '30px' }}
      zIndex=\"9998\" // Abaixo do WhatsApp (9999)
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      transition={{ duration: 0.3 }}
    >
      <IconButton
        aria-label=\"Voltar ao topo\"
        icon={<FaArrowUp />}
        onClick={scrollToTop}
        size=\"md\"
        borderRadius=\"full\"
        bg={bgColor}
        color=\"brand.500\"
        border=\"1px\"
        borderColor={borderColor}
        boxShadow=\"md\"
        _hover={{
          bg: hoverBgColor,
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
        _active={{
          transform: 'translateY(0)',
        }}
        sx={{
          transition: 'all 0.2s ease',
        }}
      />
    </MotionBox>
  );
};

export default BackToTopButton;
