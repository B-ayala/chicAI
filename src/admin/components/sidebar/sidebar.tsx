import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import menuData from './menuData/menuData';
import { LogoutIcon } from './menuData/styled';
import {
  CloseButton,
  HamburgerButton,
  Logo,
  LogoutButton,
  MenuItem,
  MenuLink,
  Overlay,
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  UserAvatar,
  UserInfo,
  UserName,
} from './styled';

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);

  // Obtener información del usuario del localStorage
  const userDataString = localStorage.getItem('user');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userName = userData?.name || 'Administrador';

  // Función para cerrar sesión
  const handleLogout = () => {
    // Limpiar localStorage
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');

    // Cerrar sidebar en mobile
    setOpen(false);

    // Redirigir a la página principal pública
    navigate('/');
  };

  // Sidebar para mobile y desktop
  return (
    <>
      <HamburgerButton onClick={() => setOpen(true)} aria-label="Abrir menú" open={open}>
        <span />
        <span />
        <span />
      </HamburgerButton>
      <Overlay open={open} onClick={() => setOpen(false)} />
      <SidebarContainer open={open}>
        <SidebarHeader>
          <Logo>ChicAI Admin</Logo>
          <CloseButton onClick={() => setOpen(false)} aria-label="Cerrar menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="#ff4fa3">
              <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
            </svg>
          </CloseButton>
        </SidebarHeader>
        <SidebarMenu>
          {menuData.map((item) => (
            <MenuItem key={item.to} active={currentPath === item.to} onClick={() => setOpen(false)}>
              <MenuLink to={item.to}>
                {item.icon}
                {item.label}
              </MenuLink>
            </MenuItem>
          ))}
        </SidebarMenu>
        <LogoutButton onClick={handleLogout} aria-label="Cerrar sesión">
          <LogoutIcon />
          Cerrar Sesión
        </LogoutButton>
      </SidebarContainer>
    </>
  );
}
