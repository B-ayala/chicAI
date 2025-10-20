import { User } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import menuData from './menuData/menuData';
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
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  // Obtener información del usuario del localStorage
  const userDataString = localStorage.getItem('user');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userName = userData?.name || 'Administrador';

  // Función para cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/');
  };

  return (
    <>
      <HamburgerButton onClick={() => setOpen(true)} open={open} aria-label="Abrir menú">
        <span />
        <span />
        <span />
      </HamburgerButton>

      <Overlay open={open} onClick={() => setOpen(false)} />

      <SidebarContainer open={open}>
        <SidebarHeader>
          <Logo>ChicAI Admin</Logo>
          <CloseButton onClick={() => setOpen(false)} aria-label="Cerrar menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
            </svg>
          </CloseButton>
        </SidebarHeader>

        <UserInfo>
          <UserAvatar>
            <User />
          </UserAvatar>
          <UserName>{userName}</UserName>
        </UserInfo>

        <SidebarMenu>
          {menuData.map((item) => (
            <MenuItem
              key={item.to}
              active={location.pathname === item.to}
              onClick={() => setOpen(false)}
            >
              <MenuLink to={item.to}>
                {item.icon}
                {item.label}
              </MenuLink>
            </MenuItem>
          ))}
        </SidebarMenu>

        <LogoutButton onClick={handleLogout} aria-label="Cerrar sesión">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
          </svg>
          Cerrar Sesión
        </LogoutButton>
      </SidebarContainer>
    </>
  );
}
