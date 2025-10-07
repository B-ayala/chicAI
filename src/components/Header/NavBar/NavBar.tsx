import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { PerchaIcon } from '../../../assets/svg/PerchaIcon';
import ContactModal from '../../../pages/Contact/ContactModal';
import LoginModal from '../../../pages/Login/LoginModal';
import menuData from './MenuData/MenuData';

import { ContactIcon } from '../../../assets/svg/ContactIcon';
import Search from '../Search/Search';

import { ContainerSearch } from '../Search/styled';
import {
  Brand,
  BrandIcon,
  ChevronIcon,
  ChevronRight,
  ContactButton,
  Hamburger,
  LoginDesktop,
  MenuIcon,
  MenuItem,
  MenuLink,
  MenuList,
  MobileMenu,
  NavBarContainer,
  SubMenuText,
  TopNavBar,
} from './styled';

// Icono de login tipo usuario (fa-user)
const LoginIcon = () => (
  <svg width="22" height="22" fill="currentColor" viewBox="0 0 448 512">
    <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.7-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
  </svg>
);



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
          {/* Menú principal, excluyendo Login y Contact */}
          {menuData
            .filter((item) => item.label !== 'Login' && item.label !== 'Contact')
            .map((item) => (
              <MenuItem key={item.url}>
                <MenuLink as={Link} to={item.url}>
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

          {/* Botón de Contacto */}
          <MenuItem className="contact-item">
            <ContactButton as="button" type="button" onClick={handleContactClick}>
              <MenuIcon>
                <ContactIcon />
              </MenuIcon>
              Contacto
            </ContactButton>
          </MenuItem>
          
        </MenuList>


        <ContainerSearch display={false}>
             <Search ancho={400} formType="outlined" margen={0} closeMenu={setOpen} />
        </ContainerSearch>
       
         
        {/* Botón de Login solo visible en desktop */}
        <LoginDesktop>
          <ContactButton
            as="button"
            type="button"
            onClick={handleLoginClick}
            aria-label="Iniciar sesión"
            style={{
              background: 'transparent',
              color: '#272727ff',
              boxShadow: 'none',
              padding: '0.6rem 1rem',
              borderRadius: 45,
              minWidth: 0,
              cursor: 'pointer',
              border: '2px solid #000000ff',
            }}
          >
            <MenuIcon style={{ marginRight: 0 }}>
              <LoginIcon />
            </MenuIcon>
          </ContactButton>
        </LoginDesktop>
        
        <ContainerSearch display={true}>
             <Search ancho={400} formType="outlined" margen={0} closeMenu={setOpen} />
        </ContainerSearch>
      </TopNavBar>

      {/*     vista mobile */}
      <MobileMenu open={open}>
        {/* Botón de cerrar (X) */}
        <button
          className="close-mobile-menu"
          aria-label="Cerrar menú"
          onClick={handleClose}
          tabIndex={open ? 0 : -1}
        >
          <span />
        </button>
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
                {/* Login como texto en mobile */}
                {item.label === 'Login' ? (
                  <>
                    <span>{item.label}</span>
                  </>
                ) : (
                  <>
                    <span>{item.label}</span>
                    {item.Children && item.Children.length > 0 && (
                      <SubMenuText>{item.Children[0]}</SubMenuText>
                    )}
                    <ChevronIcon>
                      <ChevronRight />
                    </ChevronIcon>
                  </>
                )}
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
            Contacto
          </ContactButton>
        </MenuItem>
      </MobileMenu>
    </NavBarContainer>
  );
}
