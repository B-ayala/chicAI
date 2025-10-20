import styled from 'styled-components';

const ProductsContainer = styled.div`
  padding: 20px;
  background-color: rgb(245, 245, 245);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export default function Products() {
  return (
    <ProductsContainer>
      <h1>Productos</h1>
      <p>Sección de gestión de productos.</p>
    </ProductsContainer>
  );
}
