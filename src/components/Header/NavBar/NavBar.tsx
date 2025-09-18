import { Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContactIcon } from '../../../assets/svg/ContactIcon';
import { PerchaIcon } from '../../../assets/svg/PerchaIcon';
import LoginModal from '../../../pages/Login/LoginModal';
import menuData from './MenuData/MenuData';
import {
  Brand,
  BrandIcon,
  ChevronIcon,
  ChevronRight,
  ContactButton,
  Hamburger,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuList,
  MobileMenu,
  NavBarContainer,
  Overlay,
  SubMenuText,
  TopNavBar,
} from './styled';

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const location = useLocation();

  // Cierra el menú cuando cambia la ruta
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const handleMenuClick = () => setOpen(!open);
  const handleClose = () => setOpen(false);

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsLoginModalOpen(true);
  };

  return (
    <NavBarContainer>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <TopNavBar>
        <Brand as={Link} to="/" onClick={handleClose}>
          <BrandIcon>
            <PerchaIcon />
          </BrandIcon>
          <span>ChicAI</span>
        </Brand>
        <Hamburger
          onClick={handleMenuClick}
          aria-label="Abrir menú"
          aria-expanded={open ? true : false}
        >
          <span />
          <span />
          <span />
        </Hamburger>
        <MenuList>
          {menuData
            .filter((item) => item.label !== 'Contact')
            .map((item) => (
              <MenuItem key={item.url}>
                <MenuLink
                  as={Link}
                  to={item.url}
                  onClick={item.label === 'Login' ? handleLoginClick : undefined}
                >
                  <span>{item.label}</span>
                  {item.Children && item.Children.length > 0 && (
                    <SubMenuText>{item.Children[0]}</SubMenuText>
                  )}
                  <ChevronIcon>
                    <ChevronRight />
                  </ChevronIcon>
                </MenuLink>
              </MenuItem>
            ))}
          <MenuItem className="contact-item">
            <ContactButton as={Link} to="/contact">
              Contacto
            </ContactButton>
          </MenuItem>
        </MenuList>
      </TopNavBar>
      <Overlay open={open} onClick={handleClose} />
      {/*     vista mobile */}
      <MobileMenu open={open}>
        {menuData
          .filter((item) => item.label !== 'Contact')
          .map((item) => (
            <MenuItem key={item.url}>
              <MenuLink
                as={Link}
                to={item.url}
                onClick={item.label === 'Login' ? handleLoginClick : handleClose}
              >
                <span>{item.label}</span>
                {item.Children && item.Children.length > 0 && (
                  <SubMenuText>{item.Children[0]}</SubMenuText>
                )}
                <ChevronIcon>
                  <ChevronRight />
                </ChevronIcon>
              </MenuLink>
            </MenuItem>
          ))}
        <MenuItem className="contact-item">
          <ContactButton as={Link} to="/contact" onClick={handleClose}>
            <MenuIcon>
              <ContactIcon />
            </MenuIcon>
            Contacto
          </ContactButton>
        </MenuItem>
      </MobileMenu>
    </NavBarContainer>
  );
}
