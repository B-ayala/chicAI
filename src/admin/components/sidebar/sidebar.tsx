import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CloseButton,
  HamburgerButton,
  Logo,
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

// Iconos para el menú
const DashboardIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z" />
  </svg>
);

const ProductsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 14H4V6h16v12zM6 10h2v2H6v-2zm0 4h8v2H6v-2zm10 0h2v2h-2v-2zm-10-8h12v2H6V6z" />
  </svg>
);

const InvoicesIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V8l-5-6zm-1 16H9v-2h9v2zm0-4H9v-2h9v2zm-4-9.5V8h5.5L14 4.5z" />
  </svg>
);

const ClientsIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zm8 0c-.29 0-.62.02-.97.05C16.16 13.66 18 14.84 18 16.5V19h6v-2.5c0-2.33-4.67-3.5-6-3.5z" />
  </svg>
);

export default function Sidebar() {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);

  // Obtener información del usuario del localStorage
  const userDataString = localStorage.getItem('user');
  const userData = userDataString ? JSON.parse(userDataString) : null;
  const userName = userData?.name || 'Administrador';

  // Menú items
  const menuItems = [
    { label: 'Dashboard', icon: <DashboardIcon />, to: '/admin/dashboard' },
    { label: 'Productos', icon: <ProductsIcon />, to: '/admin/products' },
    { label: 'Facturas', icon: <InvoicesIcon />, to: '/admin/invoices' },
    { label: 'Clientes', icon: <ClientsIcon />, to: '/admin/clients' },
  ];

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
          {menuItems.map((item) => (
            <MenuItem key={item.to} active={currentPath === item.to} onClick={() => setOpen(false)}>
              <MenuLink to={item.to}>
                {item.icon}
                {item.label}
              </MenuLink>
            </MenuItem>
          ))}
        </SidebarMenu>
        <UserInfo>
          <UserAvatar />
          <UserName>{userName}</UserName>
        </UserInfo>
      </SidebarContainer>
    </>
  );
}
