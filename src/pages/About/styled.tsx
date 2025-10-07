import styled, { keyframes } from 'styled-components';

// Animación de fade-in para las secciones
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(32px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

// Paleta de colores inspirada en indumentaria
const colors = {
  primary: '#7c5e48', // marrón nude
  secondary: '#bfa980', // beige/dorado suave
  primary2: '#080808ff', // terracota
  accent: '#f10505ff', // terracota
  accent2: '#81b29a', // verde oliva suave
  bgLight: '#f9f6f2',
  bgLight2: '#ffffffff', // fondo nude claro
  text: '#3d2c1e', // marrón oscuro
  textSecondary: '#a68a64', // beige medio
  white: '#fff',
  boxShadow: '0 4px 24px rgba(124,94,72,0.07)',
};

// Contenedor principal
export const AboutContainer = styled.section`
  min-height: 100vh;
  width: 100vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 0.7rem; /* antes: 1.2rem */
  padding: 2.2rem 0.5rem 3rem 0.5rem;
  background: ${colors.bgLight2};
  border-radius: 0;
  box-shadow: none;
  animation: ${fadeInUp} 0.7s cubic-bezier(0.39, 0.575, 0.565, 1) both;

  @media (min-width: 480px) {
    padding: 2.2rem 1.1rem 3rem 1.1rem;
  }
  @media (min-width: 768px) {
    padding: 3.5rem 2.5rem 4rem 2.5rem;
    gap: 1.1rem; /* antes: 1.7rem */
  }
`;

// Título principal
export const AboutTitle = styled.h1`
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  font-size: 2.1rem;
  font-weight: 800;
  letter-spacing: -1px;
  color: ${colors.primary2};
  margin-bottom: 0.08rem; /* antes: 0.2rem */
  line-height: 1.1;
  animation: ${fadeInUp} 0.8s 0.1s both;
  @media (min-width: 768px) {
    font-size: 2.8rem;
  }
`;

// Subtítulo
export const AboutSubtitle = styled.h2`
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  font-size: 1.13rem;
  font-weight: 400;
  color: ${colors.textSecondary};
  margin-bottom: 0.3rem; /* antes: 0.6rem */
  line-height: 1.4;
  animation: ${fadeInUp} 0.8s 0.18s both;
  @media (min-width: 768px) {
    font-size: 1.35rem;
    margin-bottom: 0.4rem; /* antes: 0.8rem */
  }
`;

// Título de sección
export const SectionTitle = styled.h3`
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  font-size: 1.18rem;
  font-weight: 600;
  color: ${colors.accent2};
  margin-top: 1.3rem;
  margin-bottom: 0.3rem;
  letter-spacing: 0.2px;
  animation: ${fadeInUp} 0.8s 0.22s both;
  @media (min-width: 768px) {
    font-size: 1.38rem;
  }
`;

// Descripción de sección
export const SectionDescription = styled.p`
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-size: 1.01rem;
  color: ${colors.text};
  margin-bottom: 0.9rem;
  line-height: 1.7;
  animation: ${fadeInUp} 0.8s 0.28s both;
  @media (min-width: 768px) {
    font-size: 1.13rem;
  }
`;

// Caja de contacto
export const ContactBox = styled.div`
  background: linear-gradient(90deg, #f9f2f2ff 60%, #f3e9e0 100%);
  border-radius: 1.1rem;
  padding: 1.6rem 1rem;
  margin-top: 2.2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  box-shadow: 0 2px 16px rgba(124, 94, 72, 0.08);
  animation: ${fadeInUp} 0.8s 0.35s both;
  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 2.2rem 2.7rem;
    gap: 2.2rem;
  }
`;

export const ContactText = styled.p`
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-size: 1.05rem;
  color: ${colors.accent2};
  text-align: center;
  margin: 0;
  font-weight: 500;
  animation: ${fadeInUp} 0.8s 0.38s both;
  @media (min-width: 768px) {
    text-align: left;
    font-size: 1.13rem;
  }
`;

export const ContactButtons = styled.div`
  display: flex;
  gap: 1rem;
  flex-direction: column;
  width: 100%;
  animation: ${fadeInUp} 0.8s 0.42s both;
  @media (min-width: 480px) {
    flex-direction: row;
    width: auto;
  }
`;

export const ContactButton = styled.button`
  background: linear-gradient(90deg, ${colors.accent} 60%, #f4a261 100%);
  color: ${colors.white};
  border: none;
  border-radius: 2rem;
  padding: 0.75rem 1.7rem;
  font-size: 1.05rem;
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.18s, transform 0.18s, box-shadow 0.18s;
  text-decoration: none;
  text-align: center;
  box-shadow: 0 2px 8px rgba(224, 122, 95, 0.08);
  &:hover,
  &:focus {
    background: #e0e0e0; /* gris claro */
    color: #3d2c1e; /* texto marrón oscuro para contraste */
    transform: translateY(-2px) scale(1.04);
    box-shadow: 0 4px 16px rgba(224, 122, 95, 0.13);
  }
`;

// Sección de FAQ
export const FAQSection = styled.section`
  margin-top: 2.5rem;
  padding: 1.2rem 0 0.5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
  background: transparent;
`;

export const FAQItem = styled.div`
  background: #fffdfa;
  border-radius: 0.8rem;
  box-shadow: 0 1px 8px rgba(124, 94, 72, 0.05);
  padding: 1rem 1.1rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  @media (min-width: 768px) {
    padding: 1.1rem 1.7rem;
  }
`;

export const FAQQuestion = styled.h4`
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  font-size: 1.08rem;
  font-weight: 600;
  color: ${colors.primary};
  margin: 0 0 0.2rem 0;
`;

export const FAQAnswer = styled.p`
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-size: 0.98rem;
  color: ${colors.text};
  margin: 0;
  line-height: 1.6;
`;

// Sección de redes sociales
export const SocialChannels = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  margin: 1.8rem 0 1.2rem 0;
`;

export const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #e07a5f;
  background: #fffdfa;
  border-radius: 50%;
  width: 2.8rem;
  height: 2.8rem;
  box-shadow: 0 1px 6px rgba(124, 94, 72, 0.07);
  transition: background 0.18s, color 0.18s, transform 0.18s;
  font-size: 2rem;
  &:hover,
  &:focus {
    background: #f9f6f2;
    color: #81b29a;
    transform: scale(1.08);
  }
`;
