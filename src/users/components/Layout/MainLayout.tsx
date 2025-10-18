import React from 'react';
import styled from 'styled-components';

interface MainLayoutProps {
  children: React.ReactNode;
  hasSidebar?: boolean;
  variant?: 'admin' | 'public';
}

const LayoutContainer = styled.div<{ hasSidebar: boolean; variant: 'admin' | 'public' }>`
  min-height: 100vh;
  transition: margin-left 0.3s ease;

  /* En desktop, si hay sidebar, dejamos espacio */
  @media (min-width: 900px) {
    margin-left: ${({ hasSidebar }) => (hasSidebar ? '240px' : '0')};
  }

  /* En mobile, no hay margen porque el sidebar es overlay */
  @media (max-width: 899px) {
    margin-left: 0;
  }
`;

const MainLayout: React.FC<MainLayoutProps> = ({
  children,
  hasSidebar = false,
  variant = 'public',
}) => {
  return (
    <LayoutContainer hasSidebar={hasSidebar} variant={variant}>
      {children}
    </LayoutContainer>
  );
};

export default MainLayout;
