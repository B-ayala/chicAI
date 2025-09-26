import styled from 'styled-components';

// Contenedor para el grid de productos
export const ProductsGrid = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

// Card con zoom sutil en hover
export const ProductCard = styled.div`
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s;
  will-change: transform;
  border-radius: 18px;
  overflow: hidden;
  &:hover {
    transform: scale(1.035);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  }
`;
