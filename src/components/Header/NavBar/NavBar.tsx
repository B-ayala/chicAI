import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ContactIcon } from '../../../assets/svg/ContactIcon';
import { PerchaIcon } from '../../../assets/svg/PerchaIcon';
import ContactModal from '../../../pages/Contact/ContactModal'; // <-- importar ContactModal
import LoginModal from '../../../pages/Login/LoginModal';
import menuData from './MenuData/MenuData';

import Search from '../Search/Search';

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
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // <-- nuevo estado
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

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsContactModalOpen(true);
  };

  return (
    <NavBarContainer>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <ContactModal open={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
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

          <Overlay open={open} onClick={handleClose} />

          <MenuItem className="contact-item">
            <ContactButton as="button" type="button" onClick={handleContactClick}>
              Contacto
            </ContactButton>
          </MenuItem>
          <Search ancho={400} formType="outlined" margen={40} closeMenu={setOpen} />
        </MenuList>
      </TopNavBar>

      {/*     vista mobile */}
      <MobileMenu open={open}>
        <Search ancho={250} formType="filled" margen={0} closeMenu={setOpen} />
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
          <ContactButton
            as="button"
            type="button"
            onClick={(e) => {
              handleContactClick(e);
              handleClose();
            }}
          >
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
