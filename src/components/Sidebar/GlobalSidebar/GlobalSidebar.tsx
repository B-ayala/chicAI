import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import {
  CloseButton,
  HamburgerButton,
  Logo,
  LogoutButton,
  MenuItem,
  MenuLink,
  Overlay,
  SidebarColors,
  SidebarContainer,
  SidebarHeader,
  SidebarMenu,
  UserAvatar,
  UserInfo,
  UserName,
} from './styled';

export interface SidebarMenuItem {
  label: string;
  to: string;
  icon?: React.ReactNode;
}

export interface GlobalSidebarProps {
  variant: 'admin' | 'public';
  title: string;
  menuItems: SidebarMenuItem[];
  userName?: string;
  userAvatar?: string;
  onLogout?: () => void;
  showUserInfo?: boolean;
  showLogoutButton?: boolean;
  customStyles?: React.CSSProperties;
  customColors?: SidebarColors;
  customHeaderComponent?: React.ReactNode;
  customFooterComponent?: React.ReactNode;
}

const GlobalSidebar: React.FC<GlobalSidebarProps> = ({
  variant = 'public',
  title,
  menuItems,
  userName,
  userAvatar,
  onLogout,
  showUserInfo = false,
  showLogoutButton = false,
  customStyles,
  customColors,
  customHeaderComponent,
  customFooterComponent,
}) => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [open, setOpen] = useState(false);

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    setOpen(false);
  };

  return (
    <>
      <HamburgerButton
        onClick={() => setOpen(true)}
        aria-label="Abrir menú"
        open={open}
        variant={variant}
      >
        <span />
        <span />
        <span />
      </HamburgerButton>
      <Overlay open={open} onClick={() => setOpen(false)} />
      <SidebarContainer
        open={open}
        variant={variant}
        customColors={customColors}
        style={customStyles}
      >
        {customHeaderComponent || (
          <SidebarHeader variant={variant}>
            <Logo variant={variant}>{title}</Logo>
            <CloseButton onClick={() => setOpen(false)} aria-label="Cerrar menú" variant={variant}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.3 5.71a1 1 0 00-1.41 0L12 10.59 7.11 5.7A1 1 0 105.7 7.11L10.59 12l-4.89 4.89a1 1 0 101.41 1.41L12 13.41l4.89 4.89a1 1 0 001.41-1.41L13.41 12l4.89-4.89a1 1 0 000-1.4z" />
              </svg>
            </CloseButton>
          </SidebarHeader>
        )}

        {showUserInfo && (
          <UserInfo variant={variant}>
            <UserAvatar variant={variant} src={userAvatar} />
            <UserName variant={variant}>{userName || 'Usuario'}</UserName>
          </UserInfo>
        )}

        <SidebarMenu variant={variant}>
          {menuItems.map((item) => (
            <MenuItem
              key={item.to}
              active={currentPath === item.to}
              onClick={() => setOpen(false)}
              variant={variant}
            >
              <MenuLink to={item.to} variant={variant}>
                {item.icon}
                {item.label}
              </MenuLink>
            </MenuItem>
          ))}
        </SidebarMenu>

        {customFooterComponent}

        {showLogoutButton && onLogout && (
          <LogoutButton onClick={handleLogout} aria-label="Cerrar sesión" variant={variant}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5zM4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4V5z" />
            </svg>
            Cerrar Sesión
          </LogoutButton>
        )}
      </SidebarContainer>
    </>
  );
};

export default GlobalSidebar;
