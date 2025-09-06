import React, { useState, useEffect } from 'react'
import menuData from './MenuData/MenuData'
import {
  MenuItem,
  MenuLink,
  MenuList,
  NavBarContainer,
  TopNavBar,
  Brand,
  BrandIcon,
  Hamburger,
  MobileMenu,
  Overlay,
  ContactButton,
  MenuIcon,
  ChevronRight,
  ChevronIcon
} from './styled'
import { Link, useLocation } from 'react-router-dom'
import { ContactIcon } from '../../../assets/svg/ContactIcon'
import LoginModal from '../../../pages/Login/LoginModal'
import { Button } from '@mui/material'

// Creamos un componente alternativo para SubMenuText
const SubMenuText: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span style={{
    display: 'inline-block',
    fontSize: '0.8em',
    color: '#E91E63', // Cambiado a rojo (color primario de la aplicación)
    fontWeight: 500,
    lineHeight: 1.2,
    marginLeft: '2px',
    verticalAlign: 'middle'
  }}>
    {children}
  </span>
)

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const location = useLocation()

  // Cierra el menú cuando cambia la ruta
  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  const handleMenuClick = () => setOpen(!open)
  const handleClose = () => setOpen(false)

  const handleLoginClick = (e: React.MouseEvent) => {
    e.preventDefault()
    setIsLoginModalOpen(true)
  }

  return (
    <NavBarContainer>
      <LoginModal isOpen={isLoginModalOpen} onClose={() => setIsLoginModalOpen(false)} />
      <TopNavBar>
        <Brand as={Link} to="/" onClick={handleClose}>
          <BrandIcon>
            {/* Icono simple de percha, puedes reemplazar por un SVG más detallado si lo deseas */}
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M16 6C16 4.343 17.343 3 19 3C20.657 3 22 4.343 22 6C22 7.657 20.657 9 19 9H17V11H19C22.314 11 25 8.314 25 5C25 1.686 22.314 -1 19 -1C15.686 -1 13 1.686 13 5H15C15 3.343 16.343 2 18 2C19.657 2 21 3.343 21 5C21 6.657 19.657 8 18 8H16V6Z" fill="#E91E63"/>
              <path d="M4 24C4 21.239 6.239 19 9 19H23C25.761 19 28 21.239 28 24V25C28 26.105 27.105 27 26 27H6C4.895 27 4 26.105 4 25V24Z" fill="#23272f"/>
            </svg>
               </BrandIcon>
                 <span>ChicAI</span>
        </Brand>
        <Hamburger onClick={handleMenuClick} aria-label="Abrir menú" aria-expanded={open ? true : false}>
          <span />
          <span />
          <span />
        </Hamburger>
        <MenuList>
          {menuData.filter(item => item.label !== 'Contact').map((item) => (
            <MenuItem key={item.url}>
              <MenuLink 
                as={Link} 
                to={item.url}
                onClick={item.label === "Login" ? handleLoginClick : undefined}
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
        {menuData.filter(item => item.label !== 'Contact').map((item) => (
          <MenuItem key={item.url}>
            <MenuLink
              as={Link}
              to={item.url}
              onClick={item.label === "Login" ? handleLoginClick : handleClose}
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
          {/* <ContactButton as={Link} to="/contact" onClick={handleClose}>
            <MenuIcon>
              <ContactIcon />
            </MenuIcon>
            Contacto
          </ContactButton> */}

          <Button onClick={handleClose}>
                        <MenuIcon>
              <ContactIcon />
            </MenuIcon>
            Contacto
          </Button>
        </MenuItem>
      </MobileMenu>
    </NavBarContainer>
  )
}
