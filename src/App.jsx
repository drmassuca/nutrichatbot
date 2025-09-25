import { Routes, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/common/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import Funcionalidades from './pages/Funcionalidades';
import Beneficios from './pages/Beneficios';
import Precos from './pages/Precos';
import Contato from './pages/Contato';
import PoliticasPrivacidade from './pages/PoliticasPrivacidade';

// SEO Schema Components
import { 
  NutriChatBotAppSchema, 
  OrganizationSchema, 
  ServiceSchema 
} from './components/seo/StructuredData';

function App() {
  return (
    <>
      {/* Global Schema.org Structured Data */}
      <NutriChatBotAppSchema />
      <OrganizationSchema />
      <ServiceSchema />
      
      {/* Scroll to top on route change */}
      <ScrollToTop />
      
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<About />} />
          <Route path="/funcionalidades" element={<Funcionalidades />} />
          <Route path="/beneficios" element={<Beneficios />} />
          <Route path="/precos" element={<Precos />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/politicas-privacidade" element={<PoliticasPrivacidade />} />
        </Routes>
      </Layout>
    </>
  );
}

export default App;
