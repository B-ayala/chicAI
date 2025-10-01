import styled from 'styled-components';

// Contenedor para el grid de productos
export const ProductsGrid = styled.div`
  display: grid;
  gap: 32px;
  width : 75vw;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  margin-right:auto ;
  margin-left: auto;
  @media (max-width: 910px) {
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    width : 90vw;
    
  }
`;




export const ProductImage = styled.div`
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
  
`;

// Card con zoom sutil en hover
export const ProductCard = styled.div`
  transition: transform 0.25s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0.25s;
  will-change: transform;
  border-radius: 18px;
  overflow: hidden;
  &:hover  {
    ${ProductImage} {
      
    transform: scale(1.055);
  
    } 
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  };
  
`;







