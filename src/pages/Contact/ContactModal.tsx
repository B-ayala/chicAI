import React from 'react';
import {
  InstagramButton,
  ModalBody,
  ModalClose,
  ModalContent,
  ModalFooter,
  ModalHighlight,
  ModalOverlay,
  ModalSection,
  ModalTitle,
  WhatsAppButton,
} from './styled';

interface ContactModalProps {
  open: boolean;
  onClose: () => void;
}

const CONTACT_TEXT = (
  <>
    <ModalTitle>
      <span role="img" aria-label="flor">
        🌸
      </span>{' '}
      ¡Agenda tu pedido hoy!{' '}
      <span role="img" aria-label="flor">
        🌸
      </span>
    </ModalTitle>
    <ModalBody>
      <ModalSection>
        <ModalHighlight>👠 Elegí tu par ideal:</ModalHighlight>
        Buscá el zapato que más te guste, elegí tu talle y modelo favorito.
      </ModalSection>
      <ModalSection>
        <ModalHighlight>💰 Reservalo fácil:</ModalHighlight>
        Dejalo señado y en 7 a 10 días lo tenés listo para vos.
      </ModalSection>
      <ModalSection>
        <ModalHighlight>🚚 Envíos a todo el país:</ModalHighlight>
        Enviamos a domicilio por moto (CABA y GBA) y por correo a todas las provincias.
        <br />
        También podés retirar en nuestro punto de entrega (coordinando por mensaje).
      </ModalSection>
      <ModalSection>
        <ModalHighlight>📦 Seguimiento personalizado:</ModalHighlight>
        Te mantenemos al tanto del estado de tu pedido hasta que llegue a tus manos.
      </ModalSection>
      <ModalSection>
        <ModalHighlight>📞 Contactanos:</ModalHighlight>
        <br />
        <b>📱 11-4564-333</b>
        <br />
        📩 Escribinos por WhatsApp o DM para hacer tu pedido o consultar talles.
      </ModalSection>
      <ModalSection>
        <ModalHighlight>👠 Seguinos en Instagram:</ModalHighlight>
        @ChicAI
      </ModalSection>
      <ModalSection
        style={{ textAlign: 'center', fontWeight: 600, fontSize: '1.1rem', marginTop: 12 }}
      >
        ✨ ¡Calzate estilo, comodidad y amor hecho a mano! ✨
      </ModalSection>
    </ModalBody>
    <ModalFooter>
      <WhatsAppButton href="https://wa.me/541141442409" target="_blank" rel="noopener noreferrer">
        WhatsApp
      </WhatsAppButton>
      <InstagramButton href="https://instagram.com/chiai" target="_blank" rel="noopener noreferrer">
        Instagram
      </InstagramButton>
    </ModalFooter>
  </>
);

const ContactModal: React.FC<ContactModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <ModalOverlay onClick={onClose}>
      <ModalContent onClick={(e: React.MouseEvent<HTMLDivElement>) => e.stopPropagation()}>
        <ModalClose onClick={onClose} aria-label="Cerrar modal">
          &times;
        </ModalClose>
        {CONTACT_TEXT}
      </ModalContent>
    </ModalOverlay>
  );
};

export default ContactModal;
