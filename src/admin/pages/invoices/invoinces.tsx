import styled from 'styled-components';

export default function Invoices() {
  const CustomerContainer = styled.div`
    padding: 20px;
    margin-left: 250px; /* Espacio para el sidebar */
    background-color: rgb(245, 245, 245);
    min-height: 100vh;
  `;

  return (
    <CustomerContainer>
      <h1>Facturas</h1>
      <p>Sección de gestión de facturas.</p>
    </CustomerContainer>
  );
}
