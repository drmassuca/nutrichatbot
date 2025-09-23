import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll para o topo sempre que a rota mudar
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'auto' // Mudado de 'smooth' para 'auto' para ser instantâneo
    });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
