import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// Interfaz para colores personalizados
export interface SidebarColors {
  background?: string;
  text?: string;
  accent?: string;
  accentLight?: string;
  border?: string;
  hoverBg?: string;
}

// Variables de color según variante
const getColors = (variant: 'admin' | 'public', customColors?: SidebarColors) => {
  // Colores por defecto para admin (oscuro original)
  const adminColors = {
    background: '#232946',
    text: '#fff',
    accent: '#ff4fa3',
    accentLight: '#ffeaf4',
    border: '#444',
    hoverBg: 'rgba(238, 187, 195, 0.15)',
  };

  // Colores por defecto para public
  const publicColors = {
    background: '#fff',
    text: '#232946',
    accent: '#E91E63',
    accentLight: '#ffeaf4',
    border: '#e5e5e5',
    hoverBg: 'rgba(233, 30, 99, 0.08)',
  };

  // Seleccionar colores base según variante
  const baseColors = variant === 'admin' ? adminColors : publicColors;

  // Combinar con colores personalizados si existen
  return {
    ...baseColors,
    ...(customColors || {}),
  };
};

// Sidebar principal
export const SidebarContainer = styled.nav<{
  open?: boolean;
  variant: 'admin' | 'public';
  customColors?: SidebarColors;
}>`
  font-family: 'Poppins', 'Inter', Arial, sans-serif;
  background: ${({ variant, customColors }) => getColors(variant, customColors).background};
  color: ${({ variant, customColors }) => getColors(variant, customColors).text};
  width: 240px;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.04);
  border-right: 1px solid ${({ variant, customColors }) => getColors(variant, customColors).border};
  display: flex;
  flex-direction: column;
  transition: transform 0.32s cubic-bezier(0.4, 0, 0.2, 1);
  transform: translateX(-100%);

  @media (min-width: 900px) {
    transform: translateX(0);
    position: fixed;
  }

  ${({ open }) =>
    open &&
    css`
      transform: translateX(0);
    `}

  ${({ variant }) =>
    variant === 'admin' &&
    css`
      border-right: 4px solid #eebbc3;
    `}
`;

// Header del sidebar
export const SidebarHeader = styled.div<{
  variant: 'admin' | 'public';
  customColors?: SidebarColors;
}>`
  padding: 24px 20px 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${({ variant, customColors }) => getColors(variant, customColors).border};
  min-height: 64px;
`;

export const Logo = styled.div<{ variant: 'admin' | 'public'; customColors?: SidebarColors }>`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ variant, customColors }) => getColors(variant, customColors).accent};
  letter-spacing: -1px;
`;

// Menú
export const SidebarMenu = styled.ul<{ variant: 'admin' | 'public' }>`
  list-style: none;
  padding: 0;
  margin: 32px 0 0 0;
  flex: 1;
`;

export const MenuItem = styled.li<{ active?: boolean; variant: 'admin' | 'public' }>`
  margin: 8px 16px;
  border-radius: 8px;
  background: ${({ active, variant }) => (active ? getColors(variant).hoverBg : 'transparent')};
  transition: background 0.2s;

  &:hover {
    background: ${({ variant }) => getColors(variant).hoverBg};
  }
`;

export const MenuLink = styled(Link)<{ variant: 'admin' | 'public' }>`
  display: flex;
  align-items: center;
  padding: 12px 16px;
  color: ${({ variant }) => getColors(variant).text};
  text-decoration: none;
  font-size: 0.95rem;

  svg {
    margin-right: 12px;
    width: 20px;
    height: 20px;
  }
`;

// Componentes de usuario
export const UserInfo = styled.div<{ variant: 'admin' | 'public' }>`
  display: flex;
  align-items: center;
  padding: 16px 24px;
  border-bottom: 1px solid ${({ variant }) => getColors(variant).border};
`;

export const UserAvatar = styled.img<{ variant: 'admin' | 'public' }>`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ variant }) => getColors(variant).accentLight};
  object-fit: cover;
`;

export const UserName = styled.div<{ variant: 'admin' | 'public' }>`
  margin-left: 12px;
  font-weight: 500;
  font-size: 0.95rem;
`;

// Botón de logout
export const LogoutButton = styled.button<{ variant: 'admin' | 'public' }>`
  display: flex;
  align-items: center;
  margin: 16px;
  padding: 12px 16px;
  background: transparent;
  border: none;
  border-radius: 8px;
  color: ${({ variant }) => getColors(variant).text};
  font-family: inherit;
  font-size: 0.95rem;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: ${({ variant }) => getColors(variant).hoverBg};
  }

  svg {
    margin-right: 12px;
  }
`;

// Botones de navegación móvil
export const HamburgerButton = styled.button<{ open?: boolean; variant: 'admin' | 'public' }>`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1100;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: ${({ variant }) => getColors(variant).background};
  border: 1px solid ${({ variant }) => getColors(variant).border};
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  @media (min-width: 900px) {
    display: none;
  }

  span {
    display: block;
    width: 20px;
    height: 2px;
    background: ${({ variant }) => getColors(variant).text};
    margin: 2px 0;
    transition: transform 0.3s, opacity 0.3s;
  }

  ${({ open }) =>
    open &&
    css`
      span:first-child {
        transform: translateY(6px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:last-child {
        transform: translateY(-6px) rotate(-45deg);
      }
    `}
`;

export const CloseButton = styled.button<{ variant: 'admin' | 'public' }>`
  background: transparent;
  border: none;
  color: ${({ variant }) => getColors(variant).text};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 8px;

  @media (min-width: 900px) {
    display: none;
  }
`;

export const Overlay = styled.div<{ open?: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1100;
  display: ${({ open }) => (open ? 'block' : 'none')};

  @media (min-width: 900px) {
    display: none;
  }
`;
