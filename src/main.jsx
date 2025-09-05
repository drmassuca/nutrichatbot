import React from 'react';
import ReactDOM from 'react-dom/client';
import { ChakraProvider } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import theme from './styles/theme.js';
import App from './App.jsx';
import './styles/globals.css';

// Web Vitals tracking
import { reportWebVitals } from './utils/webVitals.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <ChakraProvider theme={theme}>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true
          }}
        >
          <App />
        </BrowserRouter>
      </ChakraProvider>
    </HelmetProvider>
  </React.StrictMode>
);

// Measure performance - só em desenvolvimento
if (import.meta.env.DEV) {
  reportWebVitals();
}
