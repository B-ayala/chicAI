import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  z-index: 1200;
  inset: 0;
  background: rgba(40, 30, 20, 0.32);
  display: flex;
  align-items: flex-end;
  justify-content: center;
  animation: fadeIn 0.18s;
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (min-width: 600px) {
    align-items: center;
  }
`;

export const ModalContent = styled.div`
  background: #fffdfa;
  border-radius: 1.2rem 1.2rem 0 0;
  box-shadow: 0 8px 40px rgba(124, 94, 72, 0.18);
  padding: 1.2rem 0.7rem 1.1rem 0.7rem;
  width: 100vw;
  max-width: 100vw;
  min-height: 320px;
  max-height: 92vh;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  animation: modalUp 0.22s cubic-bezier(0.39, 0.575, 0.565, 1);
  overflow-y: auto;
  box-sizing: border-box;
  @keyframes modalUp {
    from {
      opacity: 0;
      transform: translateY(32px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @media (max-width: 400px) {
    border-radius: 1rem 1rem 0 0;
    padding-left: 0.3rem;
    padding-right: 0.3rem;
  }
  @media (min-width: 600px) {
    border-radius: 1.2rem;
    max-width: 420px;
    width: 95vw;
    padding: 2.2rem 1.5rem 1.5rem 1.5rem;
    max-height: 90vh;
  }
`;

export const ModalClose = styled.button`
  position: absolute;
  top: 0.3rem;
  right: 0.5rem;
  background: none;
  border: none;
  font-size: 2.3rem;
  color: #7c5e48;
  cursor: pointer;
  padding: 0.2rem 0.6rem;
  line-height: 1;
  z-index: 2;
  transition: color 0.15s, background 0.15s;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.85);

  &:hover {
    color: #e07a5f;
    background: #f9f6f2;
  }

  @media (max-width: 400px) {
    top: 0.1rem;
    right: 0.1rem;
    font-size: 2rem;
    padding: 0.15rem 0.4rem;
  }
  @media (min-width: 600px) {
    top: 1.1rem;
    right: 1.1rem;
    font-size: 2rem;
    padding: 0.2rem 0.7rem;
  }
`;

export const ModalTitle = styled.h2`
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  font-size: 1.15rem;
  font-weight: 700;
  color: #7c5e48;
  text-align: center;
  margin-bottom: 0.5rem;
  @media (min-width: 600px) {
    font-size: 1.45rem;
    margin-bottom: 0.7rem;
  }
`;

export const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  font-family: 'Inter', 'Segoe UI', Arial, sans-serif;
  font-size: 0.98rem;
  color: #3d2c1e;
  @media (min-width: 600px) {
    font-size: 1.05rem;
  }
`;

export const ModalSection = styled.div`
  margin-bottom: 0.2rem;
  line-height: 1.6;
`;

export const ModalHighlight = styled.span`
  font-weight: 600;
  color: #e07a5f;
  margin-right: 0.3em;
`;

export const ModalFooter = styled.div`
  display: flex;
  gap: 0.7rem;
  justify-content: center;
  margin-top: 0.7rem;
  flex-direction: column;
  @media (min-width: 480px) {
    flex-direction: row;
    gap: 1rem;
  }
`;

export const WhatsAppButton = styled.a`
  background: linear-gradient(90deg, #25d366 60%, #128c7e 100%);
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 1.5rem;
  font-size: 1.05rem;
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(39, 174, 96, 0.08);
  transition: background 0.18s, transform 0.18s;
  text-align: center;
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #128c7e 60%, #25d366 100%);
    transform: scale(1.04);
  }
`;

export const InstagramButton = styled.a`
  background: linear-gradient(90deg, #e1306c 60%, #fdc468 100%);
  color: #fff;
  border: none;
  border-radius: 2rem;
  padding: 0.7rem 1.5rem;
  font-size: 1.05rem;
  font-family: 'Poppins', 'Segoe UI', Arial, sans-serif;
  font-weight: 600;
  cursor: pointer;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(224, 48, 108, 0.08);
  transition: background 0.18s, transform 0.18s;
  text-align: center;
  &:hover,
  &:focus {
    background: linear-gradient(90deg, #fdc468 60%, #e1306c 100%);
    transform: scale(1.04);
  }
`;
