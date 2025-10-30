import styled from 'styled-components';

export const ProductsContainer = styled.div`
  padding: 20px;
  background-color: rgb(245, 245, 245);
  min-height: 100vh;
  font-family: 'Inter', 'Poppins', 'Segoe UI', Arial, sans-serif;

  @media (max-width: 768px) {
    padding: 15px;
  }
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

export const NewProductButton = styled.button`
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

export const ProductImage = styled.img`
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 8px;
`;

export const ActionButton = styled.button<{
  variant?: 'edit' | 'delete';
}>`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 6px;
  padding: 6px 12px;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  background: ${({ variant }) => (variant === 'delete' ? '#ffebee' : '#e3f2fd')};
  color: ${({ variant }) => (variant === 'delete' ? '#c62828' : '#1976d2')};
  transition: background 0.2s, color 0.2s;
  &:hover {
    background: ${({ variant }) => (variant === 'delete' ? '#ffcdd2' : '#bbdefb')};
  }
`;
