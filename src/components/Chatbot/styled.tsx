import styled, { css, keyframes } from 'styled-components';

export const ChatbotWrapper = styled.div`
  position: fixed;
  z-index: 1000;
  right: 2.5vw;
  bottom: 2.5vw;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  @media (max-width: 600px) {
    right: 4vw;
    bottom: 4vw;
  }
`;

export const HelpText = styled.div`
  margin-bottom: 8px;
  background: rgba(255, 255, 255, 0.95);
  color: #6c63ff;
  font-size: 15px;
  font-weight: 500;
  padding: 6px 16px;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(80, 80, 120, 0.07);
  transition: opacity 0.2s;
  user-select: none;
`;

export const BubbleButton = styled.button<{ open: boolean }>`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  border: none;
  background: #fff;
  box-shadow: 0 4px 16px rgba(80, 80, 120, 0.13);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: box-shadow 0.2s, transform 0.2s;
  outline: none;
  &:hover {
    box-shadow: 0 6px 24px rgba(80, 80, 120, 0.18);
    transform: scale(1.05);
  }
  ${({ open }) =>
    open &&
    css`
      box-shadow: 0 2px 8px rgba(80, 80, 120, 0.07);
      background: #f5f7fa;
    `}
`;

export const ChatWindow = styled.div<{ open: boolean }>`
  width: 340px;
  max-width: 92vw;
  height: 420px;
  max-height: 70vh;
  background: #fff;
  border-radius: 18px;
  box-shadow: 0 8px 32px rgba(80, 80, 120, 0.18);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: absolute;
  right: 0;
  bottom: 72px;
  opacity: 0;
  pointer-events: none;
  transform: translateY(24px) scale(0.98);
  transition: opacity 0.28s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  ${({ open }) =>
    open &&
    css`
      opacity: 1;
      pointer-events: auto;
      transform: translateY(0) scale(1);
    `}
  @media (max-width: 600px) {
    width: 98vw;
    right: -2vw;
    bottom: 80px;
    border-radius: 14px;
    height: 65vh;
    min-height: 320px;
  }
`;

export const ChatHeader = styled.div`
  background: linear-gradient(90deg, #6c63ff 0%, #5a55d6 100%);
  color: #fff;
  font-size: 17px;
  font-weight: 600;
  padding: 16px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ececff;
`;

export const ChatBody = styled.div`
  flex: 1;
  background: #f8f9fb;
  padding: 0 18px;
  overflow-y: auto;
`;

// Mensaje alineado según el remitente
export const MessageRow = styled.div<{ isUser: boolean }>`
  display: flex;
  justify-content: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
  margin: 10px 0;
`;

// Burbuja de usuario (derecha)
export const UserMessage = styled.span`
  display: inline-block;
  background: #e0e7ff;
  color: #333;
  border-radius: 14px;
  padding: 8px 14px;
  max-width: 220px;
  font-size: 15px;
  white-space: pre-line;
  text-align: right;
`;

// Burbuja de bot (izquierda)
export const BotMessage = styled.span`
  display: inline-block;
  background: #fff;
  color: #333;
  border-radius: 14px;
  padding: 8px 14px;
  max-width: 220px;
  font-size: 15px;
  box-shadow: 0 1px 4px #ececff;
  white-space: pre-line;
  text-align: left;
`;

// Animación de loading (tres puntos)
const bounce = keyframes`
  0%, 80%, 100% { transform: scale(0.8); opacity: 0.7; }
  40% { transform: scale(1.2); opacity: 1; }
`;

export const LoadingBubble = styled.span`
  display: inline-flex;
  align-items: center;
  background: #fff;
  color: #333;
  border-radius: 14px;
  padding: 8px 18px;
  min-width: 36px;
  min-height: 24px;
  box-shadow: 0 1px 4px #ececff;
  span {
    display: inline-block;
    width: 7px;
    height: 7px;
    margin: 0 2px;
    background: #b3b3e6;
    border-radius: 50%;
    animation: ${bounce} 1.2s infinite;
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
`;

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

export const ChatInputWrapper = styled.div`
  padding: 14px 18px;
  background: #f5f7fa;
  border-top: 1px solid #ececff;
  display: flex;
  align-items: center;
  gap: 6px;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
