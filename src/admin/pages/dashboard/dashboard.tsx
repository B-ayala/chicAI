import {
  DollarSign,
  MessageCircle,
  Percent,
  Target,
  TrendingDown,
  TrendingUp,
  Users,
  X,
} from 'lucide-react';
import { useState } from 'react';
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import {
  ChangeValue,
  ChartCard,
  ChartsGrid,
  ChartTitle,
  ChatBody,
  ChatButton,
  ChatClose,
  ChatHeader,
  ChatInput,
  ChatInputContainer,
  ChatMessage,
  ChatSendButton,
  ChatTitle,
  ChatWidget,
  ChatWindow,
  DashboardContainer,
  DashboardHeader,
  DashboardSubtitle,
  DashboardTitle,
  MetricCard,
  MetricChange,
  MetricHeader,
  MetricIcon,
  MetricLabel,
  MetricsGrid,
  MetricValue,
  RecommendationBadge,
  RecommendationCard,
  RecommendationItem,
  RecommendationList,
  RecommendationsSection,
  RecommendationTitle,
} from './styled';

// Mock data para gráficos
const categoryData = [
  { name: 'Hombre', ventas: 45000, margen: 38 },
  { name: 'Mujer', ventas: 62000, margen: 42 },
  { name: 'Niños', ventas: 28000, margen: 35 },
  { name: 'Accesorios', ventas: 18000, margen: 48 },
];

const historicalData = [
  { mes: 'Ene', actual: 35000, pasado: 32000 },
  { mes: 'Feb', actual: 42000, pasado: 38000 },
  { mes: 'Mar', actual: 38000, pasado: 41000 },
  { mes: 'Abr', actual: 51000, pasado: 45000 },
  { mes: 'May', actual: 48000, pasado: 43000 },
  { mes: 'Jun', actual: 55000, pasado: 48000 },
];

export default function Dashboard() {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { text: '¡Hola! ¿En qué puedo ayudarte hoy?', isBot: true },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const metrics = [
    {
      icon: DollarSign,
      label: 'Ventas Totales',
      value: '$153,249',
      change: 12.5,
      positive: true,
    },
    {
      icon: Percent,
      label: 'Márgenes',
      value: '41.2%',
      change: 3.8,
      positive: true,
    },
    {
      icon: Target,
      label: 'Conversión',
      value: '3.24%',
      change: -0.5,
      positive: false,
    },
    {
      icon: Users,
      label: 'Usuarios',
      value: '8,234',
      change: 18.2,
      positive: true,
    },
  ];

  type RecommendationType = 'high' | 'medium' | 'low';
  interface Recommendation {
    title: string;
    description: string;
    badge: string;
    type: RecommendationType;
  }

  const recommendations: Recommendation[] = [
    {
      title: 'Optimización de Precios',
      description:
        'Considera aumentar el precio de "Zapatillas Running Pro" en un 8%. La demanda es alta y el margen bajo.',
      badge: 'Alta Prioridad',
      type: 'high',
    },
    {
      title: 'Restock Urgente',
      description:
        'Los productos de la categoría "Mujer" tienen bajo inventario. Se recomienda reposición en 3-5 días.',
      badge: 'Urgente',
      type: 'high',
    },
    {
      title: 'Campaña Sugerida',
      description:
        'Lanzar promoción 2x1 en "Accesorios" para aumentar la rotación. Inventario alto con baja conversión.',
      badge: 'Oportunidad',
      type: 'medium',
    },
    {
      title: 'Análisis de Temporada',
      description:
        'Las ventas de "Niños" están un 15% por debajo del promedio. Considera descuentos o bundling.',
      badge: 'Revisión',
      type: 'low',
    },
  ];

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      setChatMessages([...chatMessages, { text: inputMessage, isBot: false }]);
      setInputMessage('');

      // Simular respuesta del bot
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            text: 'Gracias por tu mensaje. Estoy aquí para ayudarte con análisis y recomendaciones.',
            isBot: true,
          },
        ]);
      }, 1000);
    }
  };

  return (
    <DashboardContainer>
      <DashboardHeader>
        <DashboardTitle>Panel de Administración</DashboardTitle>
        <DashboardSubtitle>Análisis de rendimiento y métricas clave</DashboardSubtitle>
      </DashboardHeader>

      {/* Métricas principales */}
      <MetricsGrid>
        {metrics.map((metric, index) => (
          <MetricCard key={index}>
            <MetricHeader>
              <MetricIcon $color={metric.positive ? '#10b981' : '#ef4444'}>
                <metric.icon size={24} />
              </MetricIcon>
              <MetricLabel>{metric.label}</MetricLabel>
            </MetricHeader>
            <MetricValue>{metric.value}</MetricValue>
            <MetricChange $positive={metric.positive}>
              {metric.positive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
              <ChangeValue>
                {metric.positive ? '+' : ''}
                {metric.change}%
              </ChangeValue>
              <span style={{ marginLeft: '4px', fontSize: '12px' }}>vs mes anterior</span>
            </MetricChange>
          </MetricCard>
        ))}
      </MetricsGrid>

      {/* Gráficos */}
      <ChartsGrid>
        <ChartCard>
          <ChartTitle>Desempeño por Categoría</ChartTitle>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={categoryData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="name" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '14px' }} />
              <Bar dataKey="ventas" fill="#ff4081" radius={[8, 8, 0, 0]} />
              <Bar dataKey="margen" fill="#ec4899" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </ChartCard>

        <ChartCard>
          <ChartTitle>Comparación Año Actual vs Año Pasado</ChartTitle>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={historicalData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
              <XAxis dataKey="mes" tick={{ fill: '#6b7280', fontSize: 12 }} />
              <YAxis tick={{ fill: '#6b7280', fontSize: 12 }} />
              <Tooltip
                contentStyle={{
                  backgroundColor: '#fff',
                  border: '1px solid #e5e7eb',
                  borderRadius: '8px',
                }}
              />
              <Legend wrapperStyle={{ fontSize: '14px' }} />
              <Line
                type="monotone"
                dataKey="actual"
                stroke="#ff4081"
                strokeWidth={3}
                dot={{ fill: '#ff4081', r: 4 }}
                name="Año Actual"
              />
              <Line
                type="monotone"
                dataKey="pasado"
                stroke="#cbd5e1"
                strokeWidth={2}
                strokeDasharray="5 5"
                dot={{ fill: '#94a3b8', r: 3 }}
                name="Año Pasado"
              />
            </LineChart>
          </ResponsiveContainer>
        </ChartCard>
      </ChartsGrid>

      {/* Recomendaciones inteligentes */}
      <RecommendationsSection>
        <RecommendationCard>
          <RecommendationTitle>🎯 Recomendaciones Inteligentes</RecommendationTitle>
          <RecommendationList>
            {recommendations.map((rec, index) => (
              <RecommendationItem key={index}>
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    marginBottom: '8px',
                  }}
                >
                  <RecommendationBadge $type={rec.type}>{rec.badge}</RecommendationBadge>
                  <h4 style={{ margin: 0, fontSize: '15px', fontWeight: '600', color: '#111827' }}>
                    {rec.title}
                  </h4>
                </div>
                <p style={{ margin: 0, fontSize: '14px', color: '#6b7280', lineHeight: '1.5' }}>
                  {rec.description}
                </p>
              </RecommendationItem>
            ))}
          </RecommendationList>
        </RecommendationCard>
      </RecommendationsSection>

      {/* Widget de Chat */}
      <ChatWidget>
        {!isChatOpen ? (
          <ChatButton onClick={() => setIsChatOpen(true)}>
            <MessageCircle size={24} />
          </ChatButton>
        ) : (
          <ChatWindow>
            <ChatHeader>
              <ChatTitle>Asistente IA</ChatTitle>
              <ChatClose onClick={() => setIsChatOpen(false)}>
                <X size={20} />
              </ChatClose>
            </ChatHeader>
            <ChatBody>
              {chatMessages.map((msg, index) => (
                <ChatMessage key={index} $isBot={msg.isBot}>
                  {msg.text}
                </ChatMessage>
              ))}
            </ChatBody>
            <ChatInputContainer>
              <ChatInput
                placeholder="Escribe tu mensaje..."
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <ChatSendButton onClick={handleSendMessage}>Enviar</ChatSendButton>
            </ChatInputContainer>
          </ChatWindow>
        )}
      </ChatWidget>
    </DashboardContainer>
  );
}
