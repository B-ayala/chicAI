import styled, { createGlobalStyle } from 'styled-components';

// Paleta de colores para indumentaria: rosa, negro, blanco, detalles en gris y azul suave
const primaryColor = '#E91E63'; // Rosa Chic
const darkColor = '#23272f';
const lightColor = '#fff';
const accentColor = '#0070f3';
const borderColor = '#ececec';
const hoverBg = '#fce4ec';
const blackColor = '#000000';

// Breakpoints para diseño responsive
const breakpoints = {
  mobile: '600px',
  tablet: '900px',
  desktop: '1200px'
};

export const GlobalNavStyles = createGlobalStyle`
  /* reset mínimo para evitar desbordes horizontales */
  html, body, #root {
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
  }

  *, *::before, *::after {
    box-sizing: inherit;
  }
`;

export const NavBarContainer = styled.header`
  max-width: 100%;
  width: 100%;
   /* prevención extra por si algún hijo genera desborde */
  background: ${lightColor};
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
  box-shadow: 0 2px 12px rgba(233,30,99,0.08);
  border-bottom: 2px solid ${lightColor};
  font-family: 'Montserrat', 'Poppins', 'Quicksand', 'Nunito', 'Raleway', 'Open Sans', Arial, sans-serif;

  /* Elimina los puntitos de cualquier ul/li anidados */
  ul, li {
    list-style: none;
    padding: 0;
  }
`;

export const TopNavBar = styled.nav`
  width: 100%;
  background: ${lightColor};
  padding: 0.75rem 1rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  min-height: 20px;
  position: relative;
  z-index: 10;
  
  @media (min-width: ${breakpoints.mobile}) {
    padding: 0.75rem 1.5rem;
  }
  
  @media (min-width: ${breakpoints.tablet}) {
    padding: 0.75rem 2.5rem;
  }
`;

export const Brand = styled.a`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  font-size: 1.3rem;
  font-weight: 800;
  color: ${blackColor};
  text-decoration: none;
  letter-spacing: 0.04em;
  text-shadow: 0 1px 0 #fff, 0 2px 8px rgba(233,30,99,0.08);
  flex-shrink: 0;
  font-family: inherit;

  &:hover, &:focus {
    color: ${accentColor};
  }
`;

export const BrandIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    display: block;
  }
`;

export const MenuList = styled.ul`
  list-style: none;
  display: none;
  flex-direction: column;
  gap: 1.2rem;
  list-style: none;
  margin: 0;
  padding: 0;
  width: 100%;
  align-items: center;
  font-family: inherit;

  @media (min-width: ${breakpoints.mobile}) {
    display: flex;
    flex-direction: row;
    gap: 0.8rem;
    justify-content: flex-start;
    width: auto;
    flex-wrap: wrap;
    margin-left: 2rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    gap: 1.5rem;
    margin-left: 3rem;
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    gap: 2.5rem;
    margin-left: 4rem;
  }
  
  .contact-item {
    margin-left: 0.5rem;
    
    @media (min-width: ${breakpoints.tablet}) {
      margin-left: 1rem;
    }
  }
`;

export const MenuItem = styled.li`
  list-style: none;
  width: 100%;
  text-align: center;

  @media (min-width: ${breakpoints.mobile}) {
    width: auto;
    text-align: left;
    margin: 0.25rem 0;
  }
`;

export const MenuLink = styled.a`
  text-decoration: none;
  color: ${darkColor};
  position: relative;


  @media (min-width: ${breakpoints.mobile}) {
    padding: 0.5rem 0.8rem;
    font-size: 0.95rem;
  }

  @media (min-width: ${breakpoints.tablet}) {
    padding: 0.5rem 1rem;
    font-size: 1rem;
  }
  
  @media (min-width: ${breakpoints.desktop}) {
    padding: 0.5rem 1.1rem;
    font-size: 1.08rem;
  }

  &:hover, &:focus {
    color: ${darkColor}; // Puedes cambiar a otro color si quieres, aquí se mantiene el texto rosado
    background: ${borderColor}; // Cambia el sombreado a gris claro
    box-shadow: 0 2px 8px rgba(233,30,99,0.08);
  }

  &::after {
    content: '';
    display: block;
    width: 0;
    height: 2.5px;
    background: ${blackColor}; // Subrayado negro
    transition: width 0.3s;
    position: absolute;
    left: 0;
    bottom: 0;
    border-radius: 2px;
  }

  &:hover::after, &:focus::after {
    width: 100%;
  }
`;

export const Hamburger = styled.button<{ 'aria-expanded': boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 3.5rem;
  height: 2.5rem;
  background: ${({ 'aria-expanded': open }) => open ? 'rgba(233, 30, 99, 0.1)' : 'transparent'};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  padding: 0.5rem;
  z-index: 110;
  margin-left: auto;
  transition: background 0.3s ease, transform 0.3s ease;
  position: relative;

  &:hover {
    background: rgba(233, 30, 99, 0.1);
    transform: scale(1.05);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 2px rgba(233, 30, 99, 0.3);
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }

  span {
    width: 1.5rem;
    height: 0.2rem;
    background: ${({ 'aria-expanded': open }) => open ? primaryColor : darkColor};
    border-radius: 4px;
    transition: all 0.3s cubic-bezier(0.68, -0.6, 0.32, 1.6);
    position: absolute;
    left: 0.5rem;
    right: 0.5rem;

    &:first-child {
      top: ${({ 'aria-expanded': open }) => open ? '1.15rem' : '0.7rem'};
      transform: ${({ 'aria-expanded': open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      top: 1.15rem;
      opacity: ${({ 'aria-expanded': open }) => open ? '0' : '1'};
      transform: ${({ 'aria-expanded': open }) => open ? 'translateX(1rem)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      top: ${({ 'aria-expanded': open }) => open ? '1.15rem' : '1.6rem'};
      transform: ${({ 'aria-expanded': open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;

export const ContactButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: ${blackColor};
  color: ${lightColor};
  font-weight: 600;
  font-size: 0.95rem;
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  text-decoration: none;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  white-space: nowrap;
  box-shadow: 0 4px 12px rgba(233,30,99,0.2);
  position: relative;
  overflow: hidden;
  font-family: inherit;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 70%);
    transform: scale(0);
    opacity: 0;
    transition: transform 0.5s ease, opacity 0.5s ease;
  }
  
  &:hover, &:focus {
    background-color: #d81b60;
    box-shadow: 0 6px 16px rgba(233,30,99,0.4);
    transform: translateY(-3px);
    
    &:before {
      transform: scale(2);
      opacity: 1;
    }
  }
  
  &:active {
    transform: translateY(-1px);
    box-shadow: 0 3px 8px rgba(233,30,99,0.3);
  }
  
  @media (min-width: ${breakpoints.mobile}) {
    font-size: 0.95rem;
    padding: 0.6rem 1.3rem;
  }
  
  @media (min-width: ${breakpoints.tablet}) {
    font-size: 1rem;
    padding: 0.7rem 1.6rem;
  }
`;

export const MobileMenu = styled.div<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background: rgba(35, 39, 47, 0.95);
  height: 100vh;
  width: 300px;
  max-width: 80vw;
  text-align: left;
  padding: 6rem 1.5rem 2rem;
  position: fixed;
  top: 0;
  left: 0;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(-100%)'};
  z-index: 100;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  overflow-y: auto;
  border-right: 1px solid rgba(255, 255, 255, 0.1);

  ${MenuItem} {
    margin: 0.5rem 0;
    width: 100%;
    text-align: left;
    padding: 0.5rem 0;
    border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  }

  ${MenuLink} {
    font-size: 1.2rem;
    padding: 0.8rem 0.5rem;
    width: 100%;
    display: flex;
    align-items: center;
    text-align: left;
    color: ${lightColor};
    transition: all 0.2s ease;
    font-family: inherit;
    
    &:hover, &:focus {
      background: rgba(255, 255, 255, 0.1);
      transform: translateX(5px);
      color: ${primaryColor};
    }
    
    &::after {
      display: none;
    }
  }

  .contact-item {
    margin-top: 2rem;
    text-align: center;
    width: 100%;
    display: flex;
    justify-content: center;
    border-bottom: none;
  }

  ${ContactButton} {
    font-size: 1.1rem;
    padding: 0.7rem 2rem;
    margin: 0 auto;
    display: inline-block;
    background-color: ${primaryColor};
    color: ${lightColor};
    box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
  }

  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const Overlay = styled.div<{ open: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(2px);
  opacity: ${({ open }) => open ? '1' : '0'};
  visibility: ${({ open }) => open ? 'visible' : 'hidden'};
  transition: opacity 0.3s ease, visibility 0.3s ease;
  z-index: 90;
  
  @media (min-width: ${breakpoints.mobile}) {
    display: none;
  }
`;

export const MenuIcon = styled.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  width: 24px;
  height: 24px;
  color: currentColor;
  opacity: 0.8;
  transition: opacity 0.2s ease;
  
  svg {
    width: 100%;
    height: 100%;
  }
`;

// --- SVG ICONS & UI COMPONENTS EXPORTADOS ---

export const ChevronRight = () => (
  <svg viewBox="0 0 20 20" fill="currentColor">
    <path d="M7.293 16.293a1 1 0 010-1.414L12.172 10 7.293 5.121a1 1 0 111.414-1.414l5.293 5.293a1 1 0 010 1.414l-5.293 5.293a1 1 0 01-1.414 0z"/>
  </svg>
);

export const HomeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);

export const AboutIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/>
  </svg>
);

export const ContactIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

export const SubMenuText = styled.small`
  display: inline-block;
  font-size: 0.8em;
  color: ${primaryColor};
  font-weight: 500;
  line-height: 1.2;
  margin-left: 2px;
  vertical-align: middle;
`;

export const ChevronIcon = styled.span`
  margin-left: 6px;
  display: inline-flex;
  vertical-align: middle;
  opacity: 0.5;
`;
