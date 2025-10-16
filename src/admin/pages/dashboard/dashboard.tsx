import React from 'react';
import styled from 'styled-components';

const DashboardContainer = styled.div`
  padding: 20px;
  margin-left: 250px; /* Espacio para el sidebar */
  background-color: #f5f5f5;
  min-height: 100vh;
`;

const DashboardHeader = styled.div`
  margin-bottom: 20px;
`;

const DashboardTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

const DashboardSubtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

const CardContent = styled.div`
  font-size: 14px;
  color: #666;
`;

export default function Dashboard() {
  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Panel de Administración</DashboardTitle>
        <DashboardSubtitle>Bienvenido al panel de control de ChicAI</DashboardSubtitle>
      </DashboardHeader>
      
      <CardContainer>
        <Card>
          <CardTitle>Usuarios</CardTitle>
          <CardContent>
            <p>Total de usuarios registrados: 1,234</p>
            <p>Nuevos usuarios hoy: 15</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardTitle>Productos</CardTitle>
          <CardContent>
            <p>Total de productos: 456</p>
            <p>Productos activos: 430</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardTitle>Ventas</CardTitle>
          <CardContent>
            <p>Ventas del mes: $12,345</p>
            <p>Ventas de hoy: $1,234</p>
          </CardContent>
        </Card>
      </CardContainer>
    </DashboardContainer>
  );
}
