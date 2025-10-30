import styled from 'styled-components';

// Font family fallback
const fontFamily = `'Inter', 'Poppins', 'Segoe UI', Arial, sans-serif`;

export const InvoicesContainer = styled.div`
  font-family: ${fontFamily};
  padding: 20px;
  background-color: rgb(245, 245, 245);
  min-height: 100vh;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin: 0;
  color: #222;
`;

export const NewInvoiceButton = styled.button`
  background: #ff4081;
  color: #fff;
  border: none;
  border-radius: 24px;
  padding: 10px 22px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  box-shadow: 0 2px 8px rgba(255, 64, 129, 0.08);
  transition: background 0.2s;
  &:hover {
    background: #e73370;
  }
`;
