import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

// Colores para el sidebar público
const sidebarBg = '#fff';
const accent = '#E91E63';
const accentLight = 'rgba(233, 30, 99, 0.08)';
const border = '#e5e5e5';
const text = '#232946';
const sidebarWidth = '240px';
const font = `'Poppins', 'Inter', Arial, sans-serif`;

// Sidebar principal
export const SidebarContainer = styled.nav<{ open?: boolean }>`
  font-family: ${font};
  background: ${sidebarBg};
  color: ${text};
  width: ${sidebarWidth};
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1200;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.08);
  border-right: 1px solid ${border};
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
`;

// Header del sidebar
export const SidebarHeader = styled.div`
  padding: 24px 20px 16px 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid ${border};
  min-height: 64px;
`;

export const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${accent};
  letter-spacing: -1px;
`;

// Menú
export const SidebarMenu = styled.ul`
  list-style: none;
  padding: 0;
  margin: 32px 0 0 0;
  flex: 1;
`;

export const MenuItem = styled.li<{ active?: boolean }>`
  margin: 0 0 4px 0;
  border-radius: 8px;
  overflow: hidden;
  background: ${({ active }) => (active ? accentLight : 'transparent')};
  transition: background 0.2s;
  &:hover {
    background: ${accentLight};
  }
`;

export const MenuLink = styled(Link)`
  color: ${text};
  text-decoration: none;
  display: flex;
  align-items: center;
  padding: 14px 24px;
  font-size: 1rem;
  font-weight: 500;
  svg {
    margin-right: 14px;
    color: ${accent};
    min-width: 20px;
  }
`;

// Botón hamburguesa
export const HamburgerButton = styled.button<{ open?: boolean }>`
  position: fixed;
  top: 18px;
  left: 18px;
  z-index: 1300;
  width: 38px;
  height: 38px;
  background: ${sidebarBg};
  border: 1.5px solid ${border};
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
  transition: background 0.2s;
  @media (min-width: 900px) {
    display: none;
  }
  span {
    display: block;
    width: 22px;
    height: 3px;
    background: ${accent};
    border-radius: 2px;
    transition: all 0.3s;
  }
  ${({ open }) =>
    open &&
    css`
      background: ${accentLight};
      span:nth-child(1) {
        transform: translateY(8px) rotate(45deg);
      }
      span:nth-child(2) {
        opacity: 0;
      }
      span:nth-child(3) {
        transform: translateY(-8px) rotate(-45deg);
      }
    `}
`;

// Overlay para mobile
export const Overlay = styled.div<{ open?: boolean }>`
  display: ${({ open }) => (open ? 'block' : 'none')};
  position: fixed;
  z-index: 1199;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(34, 34, 34, 0.4);
  @media (min-width: 900px) {
    display: none;
  }
`;

// Botón cerrar (X)
export const CloseButton = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin-left: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  color: ${text};
  @media (min-width: 900px) {
    display: none;
  }
`;

// Usuario
export const UserInfo = styled.div`
  width: 100%;
  padding: 18px 24px;
  border-bottom: 1px solid ${border};
  display: flex;
  align-items: center;
  background: ${sidebarBg};
  min-height: 64px;
`;

export const UserName = styled.div`
  margin-left: 12px;
  font-size: 1rem;
  font-weight: 500;
  color: ${text};
  letter-spacing: 0.01em;
`;

// Avatar
export const UserAvatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: ${accentLight};
  display: flex;
  align-items: center;
  justify-content: center;
  svg {
    color: ${accent};
    width: 28px;
    height: 28px;
  }
`;

// Botón de acción (login, register, etc)
export const ActionButton = styled.button`
  width: calc(100% - 48px);
  margin: 0 24px 16px 24px;
  padding: 12px 16px;
  background: ${accent};
  border: none;
  border-radius: 8px;
  color: #fff;
  font-family: ${font};
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  transition: all 0.2s ease;

  svg {
    width: 20px;
    height: 20px;
    color: #fff;
  }

  &:hover {
    background: #d81b60;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(233, 30, 99, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 2px 6px rgba(233, 30, 99, 0.3);
  }
`;
