import styled from 'styled-components';

export const DashboardContainer = styled.div`
  padding: 16px;
  background-color: #f9fafb;
  min-height: 100vh;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;

  @media (min-width: 768px) {
    padding: 24px;
  }

  @media (min-width: 1024px) {
    padding: 32px;
  }
`;

export const DashboardHeader = styled.div`
  margin-bottom: 24px;

  @media (min-width: 768px) {
    margin-bottom: 32px;
  }
`;

export const DashboardTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #111827;
  margin: 0 0 8px 0;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const DashboardSubtitle = styled.p`
  font-size: 14px;
  color: #6b7280;
  margin: 0;

  @media (min-width: 768px) {
    font-size: 16px;
  }
`;

/* Métricas Grid */
export const MetricsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
  margin-bottom: 24px;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;
    margin-bottom: 32px;
  }
`;

export const MetricCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);
    transform: translateY(-2px);
  }

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const MetricHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 12px;
`;

export const MetricIcon = styled.div<{ $color: string }>`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: ${(props) => `${props.$color}15`};
  color: ${(props) => props.$color};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const MetricLabel = styled.span`
  font-size: 13px;
  color: #6b7280;
  font-weight: 500;

  @media (min-width: 768px) {
    font-size: 14px;
  }
`;

export const MetricValue = styled.div`
  font-size: 28px;
  font-weight: 700;
  color: #111827;
  margin-bottom: 8px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
`;

export const MetricChange = styled.div<{ $positive: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  color: ${(props) => (props.$positive ? '#10b981' : '#ef4444')};
  font-weight: 600;
`;

export const ChangeValue = styled.span`
  font-weight: 700;
`;

/* Gráficos */
export const ChartsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-bottom: 24px;

  @media (min-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    margin-bottom: 32px;
  }
`;

export const ChartCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const ChartTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: 18px;
    margin-bottom: 24px;
  }
`;

/* Recomendaciones */
export const RecommendationsSection = styled.div`
  margin-bottom: 80px;

  @media (min-width: 1024px) {
    margin-bottom: 32px;
  }
`;

export const RecommendationCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const RecommendationTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 20px 0;

  @media (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

export const RecommendationList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const RecommendationItem = styled.div`
  padding: 16px;
  background: #f9fafb;
  border-radius: 8px;
  border-left: 3px solid #ff4081;
  transition: all 0.2s ease;

  &:hover {
    background: #f3f4f6;
    transform: translateX(4px);
  }
`;

export const RecommendationBadge = styled.span<{ $type: 'high' | 'medium' | 'low' }>`
  display: inline-block;
  padding: 4px 10px;
  border-radius: 12px;
  font-size: 11px;
  font-weight: 600;
  background: ${(props) => {
    switch (props.$type) {
      case 'high':
        return '#fee2e2';
      case 'medium':
        return '#fef3c7';
      case 'low':
        return '#dbeafe';
      default:
        return '#f3f4f6';
    }
  }};
  color: ${(props) => {
    switch (props.$type) {
      case 'high':
        return '#dc2626';
      case 'medium':
        return '#d97706';
      case 'low':
        return '#2563eb';
      default:
        return '#6b7280';
    }
  }};

  @media (min-width: 768px) {
    font-size: 12px;
    padding: 5px 12px;
  }
`;

/* Chat Widget */
export const ChatWidget = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

  @media (min-width: 768px) {
    bottom: 32px;
    right: 32px;
  }
`;

export const ChatButton = styled.button`
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #ff4081 0%, #ec4899 100%);
  color: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 12px rgba(255, 64, 129, 0.4);
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 16px rgba(255, 64, 129, 0.5);
  }

  &:active {
    transform: scale(0.95);
  }
`;

export const ChatWindow = styled.div`
  width: calc(100vw - 40px);
  max-width: 380px;
  height: 500px;
  background: white;
  border-radius: 16px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 380px;
  }
`;

export const ChatHeader = styled.div`
  background: linear-gradient(135deg, #ff4081 0%, #ec4899 100%);
  color: white;
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ChatTitle = styled.h4`
  margin: 0;
  font-size: 16px;
  font-weight: 600;
`;

export const ChatClose = styled.button`
  background: transparent;
  border: none;
  color: white;
  cursor: pointer;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  transition: background 0.2s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
  }
`;

export const ChatBody = styled.div`
  flex: 1;
  padding: 16px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #f9fafb;
`;

export const ChatMessage = styled.div<{ $isBot: boolean }>`
  padding: 10px 14px;
  border-radius: 12px;
  max-width: 80%;
  font-size: 14px;
  line-height: 1.5;
  align-self: ${(props) => (props.$isBot ? 'flex-start' : 'flex-end')};
  background: ${(props) => (props.$isBot ? 'white' : '#ff4081')};
  color: ${(props) => (props.$isBot ? '#111827' : 'white')};
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const ChatInputContainer = styled.div`
  padding: 16px;
  background: white;
  border-top: 1px solid #e5e7eb;
  display: flex;
  gap: 8px;
`;

export const ChatInput = styled.input`
  flex: 1;
  padding: 10px 14px;
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  font-size: 14px;
  outline: none;
  transition: border-color 0.2s ease;

  &:focus {
    border-color: #ff4081;
  }

  &::placeholder {
    color: #9ca3af;
  }
`;

export const ChatSendButton = styled.button`
  padding: 10px 20px;
  background: #ff4081;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: #e91e63;
  }

  &:active {
    transform: scale(0.95);
  }
`;

/* Mantener exports antiguos para compatibilidad */
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
