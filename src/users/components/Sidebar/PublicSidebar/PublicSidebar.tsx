import { Home, Info, Mail, ShoppingBag, User } from 'lucide-react';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  ActionButton,
  CloseButton,
  HamburgerButton,
  Logo,
  MenuItem,
  MenuLink,
  Overlay,
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
} from './styled';

const publicMenuData = [
  { label: 'Inicio', icon: <Home />, to: '/' },
  { label: 'Productos', icon: <ShoppingBag />, to: '/products' },
  { label: 'Sobre Nosotros', icon: <Info />, to: '/about' },
  { label: 'Contacto', icon: <Mail />, to: '/contact' },
];

export default function PublicSidebar() {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);

  const handleLogin = () => {
    navigate('/login');
    setOpen(false);
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
          <Logo>ChicAI</Logo>
          <CloseButton onClick={() => setOpen(false)} aria-label="Cerrar menú">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
            </svg>
          </CloseButton>
        </SidebarHeader>

        <SidebarMenu>
          {publicMenuData.map((item) => (
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

        <ActionButton onClick={handleLogin} aria-label="Iniciar sesión">
          <User />
          Iniciar Sesión
        </ActionButton>
      </SidebarContainer>
    </>
  );
}
