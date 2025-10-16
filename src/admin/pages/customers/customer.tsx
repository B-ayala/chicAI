import styled from 'styled-components';

const CustomerContainer = styled.div`
  padding: 20px;
  margin-left: 250px; /* Espacio para el sidebar */
  background-color: rgb(245, 245, 245);
  min-height: 100vh;
`;

export default function Customer() {
  return (
    <CustomerContainer>
      <h1>Clientes</h1>
      <p>Sección de gestión de clientes.</p>
    </CustomerContainer>
  );
}
