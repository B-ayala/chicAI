import styled, { css } from 'styled-components';

export const SidebarContainer = styled.aside<{ variant: 'admin' | 'public' }>`
  width: 240px;
  min-height: 100vh;
  background: ${({ variant }) => (variant === 'admin' ? '#232946' : '#fff')};
  color: ${({ variant }) => (variant === 'admin' ? '#fff' : '#232946')};
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 1rem;
  transition: background 0.2s;

  ${({ variant }) =>
    variant === 'admin' &&
    css`
      border-right: 4px solid #eebbc3;
    `}
`;

export const SidebarHeader = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

export const SidebarSection = styled.section`
  margin-bottom: 2rem;
  .sidebar-section-title {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  .sidebar-item {
    display: flex;
    align-items: center;
    padding: 0.5rem 0.75rem;
    border-radius: 6px;
    cursor: pointer;
    transition: background 0.15s;
    &:hover {
      background: rgba(238, 187, 195, 0.15);
    }
    .sidebar-icon {
      margin-right: 0.75rem;
      font-size: 1.2rem;
    }
  }
`;
