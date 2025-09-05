import { Box } from '@chakra-ui/react';
import Header from './Header';
import Footer from './Footer';
import WhatsAppFloatButton from '../common/WhatsAppFloatButton';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <Box minH="100vh" display="flex" flexDirection="column">
      <Header />
      <Box as="main" flex="1">
        {children}
      </Box>
      <Footer />
      
      {/* Botão WhatsApp Flutuante Global */}
      <WhatsAppFloatButton />
    </Box>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
