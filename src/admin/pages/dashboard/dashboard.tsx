import { useEffect } from 'react';
// Cambiar la importación para incluir la extensión .tsx
import {
  Card,
  CardContainer,
  CardContent,
  CardTitle,
  DashboardContainer,
  DashboardHeader,
  DashboardSubtitle,
  DashboardTitle,
} from './styled';

export default function Dashboard() {
  // Verificar que el usuario esté autenticado
  useEffect(() => {
    const userDataString = localStorage.getItem('user');
    if (!userDataString) {
      // Redirigir al login si no hay usuario
      window.location.href = '#/';
    }
  }, []);

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
