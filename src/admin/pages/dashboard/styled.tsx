import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 20px;
  margin-left: 250px; /* Espacio para el sidebar */
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const DashboardHeader = styled.div`
  margin-bottom: 20px;
`;

export const DashboardTitle = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const DashboardSubtitle = styled.p`
  font-size: 16px;
  color: #666;
`;

export const CardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
`;

export const Card = styled.div`
  background-color: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const CardTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 10px;
  color: #333;
`;

export const CardContent = styled.div`
  font-size: 14px;
  color: #666;
`;
