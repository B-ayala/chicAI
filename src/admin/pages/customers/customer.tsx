import styled from 'styled-components';

const CustomerContainer = styled.div`
  padding: 20px;
  background-color: rgb(245, 245, 245);
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export default function Customer() {
  return (
    <CustomerContainer>
      <h1>Clientes</h1>
      <p>Sección de gestión de clientes.</p>
    </CustomerContainer>
  );
}
