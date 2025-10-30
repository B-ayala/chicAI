import React from 'react';
import styled from 'styled-components';

export interface NotificationProps {
  message: string;
  type?: 'info' | 'warning' | 'success' | 'error';
  onClose?: () => void;
}

const Toast = styled.div<{ type: string }>`
  position: fixed;
  top: 24px;
  right: 24px;
  min-width: 280px;
  max-width: 400px;
  padding: 16px 24px;
  border-radius: 8px;
  background: ${({ type }) => {
    switch (type) {
      case 'success':
        return '#d1fae5';
      case 'error':
        return '#fee2e2';
      case 'warning':
        return '#fef9c3';
      default:
        return '#e0e7ef';
    }
  }};
  color: #222;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.12);
  z-index: 9999;
  display: flex;
  align-items: center;
  gap: 12px;
`;

const CloseBtn = styled.button`
  background: none;
  border: none;
  color: #888;
  font-size: 1.2rem;
  margin-left: auto;
  cursor: pointer;
`;

const NotificationToast: React.FC<NotificationProps> = ({ message, type = 'info', onClose }) => (
  <Toast type={type}>
    <span>{message}</span>
    {onClose && <CloseBtn onClick={onClose}>&times;</CloseBtn>}
  </Toast>
);

export default NotificationToast;
