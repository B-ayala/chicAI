import styled, { keyframes } from 'styled-components';

// Keyframes para animaciones
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-20px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
    transform: translateX(0);
  }
  to {
    opacity: 0;
    transform: translateX(20px);
  }
`;

// Overlay para el fondo oscuro
export const Overlay = styled.div`
  position: fixed;
  z-index: 1000;
  inset: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.6);
`;

// Botón de cerrar (X) - mobile first
export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 1100;
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.8rem;
  font-weight: 700;
  cursor: pointer;
  transition: color 0.2s;
  line-height: 1;
  padding: 0;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  
  /* Tablet */
  @media (min-width: 600px) {
    top: 12px;
    right: 12px;
    font-size: 2rem;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    top: 15px;
    right: 15px;
  }
  
  &:hover {
    color: #ff9b2f;
  }
`;

// Contenedor principal centrado
export const LoginContainer = styled.div`
  position: fixed;
  z-index: 1050;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  pointer-events: none;
`;


// Panel izquierdo (formularios) - mobile first
export const LeftPanel = styled.div`
  flex: 1;
  background-color: #111;
  padding: 25px 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  overflow: hidden;
  
  /* Tablet */
  @media (min-width: 600px) {
    padding: 30px 25px;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    padding: 35px;
  }
`;

// Panel derecho (mensaje de bienvenida) - mobile first
export const RightPanel = styled.div`
  background: linear-gradient(135deg, #ff6b3d, #ff9b2f);
  padding: 20px 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  text-align: center;
  
  /* Tablet */
  @media (min-width: 600px) {
    padding: 25px 20px;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    flex: 1;
    padding: 35px;
  }
`;

// Título del panel derecho - mobile first
export const WelcomeTitle = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 10px;
  font-weight: 700;
  
  /* Tablet */
  @media (min-width: 600px) {
    font-size: 2rem;
    margin-bottom: 15px;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    font-size: 2.2rem;
    margin-bottom: 20px;
  }
`;

// Texto del panel derecho - mobile first
export const WelcomeText = styled.p`
  font-size: 0.9rem;
  line-height: 1.4;
  opacity: 0.9;
  
  /* Tablet */
  @media (min-width: 600px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    font-size: 1rem;
    line-height: 1.6;
  }
`;

// Formulario
export const Form = styled.form<{ isVisible: boolean }>`
  display: ${props => props.isVisible ? 'flex' : 'none'};
  flex-direction: column;
  gap: 20px;
  width: 100%;
  animation: ${props => props.isVisible ? fadeIn : fadeOut} 0.5s ease-in-out;
`;

// Título del formulario - mobile first
export const FormTitle = styled.h2`
  color: white;
  font-size: 1.6rem;
  margin-bottom: 15px;
  font-weight: 600;
  
  /* Tablet */
  @media (min-width: 600px) {
    font-size: 1.8rem;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    font-size: 2rem;
    margin-bottom: 20px;
  }
`;

// Contenedor de input con icono
export const InputContainer = styled.div`
  position: relative;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
`;

// Icono para el input
export const InputIcon = styled.div`
  position: absolute;
  left: 0;
  top: 12px;
  color: #999;
  font-size: 1.2rem;
  z-index: 1;
`;

// Input estilizado - mobile first
export const StyledInput = styled.input`
  width: 100%;
  padding: 12px 0 8px 30px;
  background: transparent;
  border: none;
  border-bottom: 1px solid #555;
  color: white;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:focus {
    outline: none;
    border-bottom-color: #ff9b2f;
  }
  
  &::placeholder {
    color: #777;
  }
`;

// Botón de submit - mobile first
export const SubmitButton = styled.button`
  background: linear-gradient(to right, #ff6b3d, #ff9b2f);
  color: white;
  border: none;
  padding: 10px;
  border-radius: 25px;
  font-size: 0.95rem;
  font-weight: 600;
  cursor: pointer;
  margin-top: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  
  /* Tablet */
  @media (min-width: 600px) {
    padding: 11px;
    font-size: 0.98rem;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    padding: 12px;
    font-size: 1rem;
    border-radius: 30px;
  }
  
  &:hover {
    transform: scale(1.03);
    box-shadow: 0 5px 15px rgba(255, 107, 61, 0.4);
  }
`;

// Texto para cambiar entre login y signup
export const SwitchText = styled.p`
  color: #aaa;
  text-align: center;
  margin-top: 20px;
  font-size: 0.9rem;
`;

// Enlace para cambiar entre login y signup
export const SwitchLink = styled.span`
  color: #ff9b2f;
  cursor: pointer;
  font-weight: 600;
  
  &:hover {
    text-decoration: underline;
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
`;

export const ModalContainer = styled.div`
  position: relative;
  width: 95%;
  max-width: 350px;
  max-height: 95vh;
  overflow: hidden;
  border-radius: 12px;
  box-shadow: 0 0 30px rgba(255, 107, 61, 0.6), 0 0 50px rgba(255, 155, 47, 0.4);
  animation: fadeIn 0.3s ease-out;
  background-color: #111;
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  /* Tablet */
  @media (min-width: 600px) {
    max-width: 450px;
    border-radius: 16px;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    width: 750px;
    max-width: 90%;
    border-radius: 20px;
  }
`;

export const FormContainer = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 15px;
  
  /* Tablet */
  @media (min-width: 600px) {
    padding: 25px;
    gap: 20px;
  }
  
  /* Desktop */
  @media (min-width: 900px) {
    padding: 30px;
    gap: 25px;
    flex-direction: row;
  }
`;
