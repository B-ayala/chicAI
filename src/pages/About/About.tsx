import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useState } from 'react';
import Form from './components/Form';
import {
  AboutContainer,
  AboutSubtitle,
  AboutTitle,
  ContactBox,
  ContactButton,
  ContactButtons,
  ContactText,
  FAQAnswer,
  FAQItem,
  FAQQuestion,
  FAQSection,
  SectionDescription,
  SectionTitle,
  SocialChannels,
  SocialIconLink,
} from './styled';

export default function About() {
  const [showForm, setShowForm] = useState(false);

  return (
    <AboutContainer>
      {/* Título principal y subtítulo */}
      <AboutTitle>Acerca de Fashionista</AboutTitle>
      <AboutSubtitle>Descubre quiénes somos y por qué amamos la moda.</AboutSubtitle>

      {/* Nuestra Misión */}
      <SectionTitle>Nuestra Misión</SectionTitle>
      <SectionDescription>
        Inspirar confianza y autenticidad a través de la moda, acercando tendencias globales a cada
        persona con un toque único y sostenible.
      </SectionDescription>

      {/* Nuestros Valores */}
      <SectionTitle>Nuestros Valores</SectionTitle>
      <SectionDescription>
        Creatividad, inclusión y responsabilidad social guían cada paso de nuestro viaje,
        promoviendo una comunidad apasionada y diversa.
      </SectionDescription>

      {/* Caja de contacto */}
      <ContactBox>
        <ContactText>¿Tienes preguntas o quieres colaborar con nosotros?</ContactText>
        <ContactButtons>
          <ContactButton as="a" href="mailto:contacto@fashionista.com">
            Enviar correo
          </ContactButton>
          <ContactButton type="button" onClick={() => setShowForm((v) => !v)}>
            Enviar consulta
          </ContactButton>
        </ContactButtons>
      </ContactBox>

      {showForm && <Form onClose={() => setShowForm(false)} />}

      {/* Canales de comunicación */}
      <SocialChannels>
        <SocialIconLink
          href="https://instagram.com/fashionista"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <InstagramIcon fontSize="inherit" />
        </SocialIconLink>
        <SocialIconLink
          href="https://wa.me/549123456789"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <WhatsAppIcon fontSize="inherit" />
        </SocialIconLink>
        <SocialIconLink
          href="https://facebook.com/fashionista"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
        >
          <FacebookIcon fontSize="inherit" />
        </SocialIconLink>
      </SocialChannels>

      {/* Preguntas Frecuentes */}
      <FAQSection>
        <SectionTitle>Preguntas Frecuentes</SectionTitle>
        <FAQItem>
          <FAQQuestion>¿Qué pasa si no llega mi pedido?</FAQQuestion>
          <FAQAnswer>
            Si tu pedido no llega en el plazo estimado, por favor contáctanos a través de nuestro
            correo o teléfono. Nos comprometemos a resolver cualquier inconveniente y garantizar tu
            satisfacción.
          </FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>¿Cuáles son los horarios de atención?</FAQQuestion>
          <FAQAnswer>
            Nuestro equipo está disponible de lunes a viernes de 9:00 a 18:00 hs. Fuera de ese
            horario puedes escribirnos y te responderemos a la brevedad.
          </FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>¿Puedo cambiar o devolver un producto?</FAQQuestion>
          <FAQAnswer>
            Sí, puedes solicitar cambios o devoluciones dentro de los 15 días posteriores a la
            recepción del pedido, siempre que el producto esté en perfectas condiciones.
          </FAQAnswer>
        </FAQItem>
        <FAQItem>
          <FAQQuestion>¿Hacen envíos a todo el país?</FAQQuestion>
          <FAQAnswer>
            Realizamos envíos a todo el país a través de servicios logísticos confiables. Consulta
            los tiempos y costos al finalizar tu compra.
          </FAQAnswer>
        </FAQItem>
      </FAQSection>
    </AboutContainer>
  );
}
