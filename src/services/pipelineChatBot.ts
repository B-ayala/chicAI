export interface ChatMessage {
  id: string;
  sender: 'user' | 'bot';
  text: string;
  timestamp: string;
}

export const mockChatHistory: ChatMessage[] = [
  {
    id: '1',
    sender: 'bot',
    text: '¡Hola! Soy tu asesora virtual de ChicAI. ¿Listo para descubrir prendas que potencien tu estilo y confianza?',
    timestamp: '2024-06-01T10:00:00Z',
  },
  {
    id: '2',
    sender: 'user',
    text: 'Me gustaría encontrar ropa que me haga sentir cómodo y seguro.',
    timestamp: '2024-06-01T10:00:10Z',
  },
  {
    id: '3',
    sender: 'bot',
    text: '¡Excelente elección! ¿Prefieres un look casual, elegante o deportivo para hoy?',
    timestamp: '2024-06-01T10:00:12Z',
  },
  {
    id: '4',
    sender: 'user',
    text: 'Casual.',
    timestamp: '2024-06-01T10:00:15Z',
  },
  {
    id: '5',
    sender: 'bot',
    text: 'Perfecto, el estilo casual transmite autenticidad y comodidad. ¿Te gustaría que te recomiende prendas que resalten tu personalidad?',
    timestamp: '2024-06-01T10:00:18Z',
  },
  {
    id: '6',
    sender: 'user',
    text: 'Sí, por favor.',
    timestamp: '2024-06-01T10:00:20Z',
  },
  {
    id: '7',
    sender: 'bot',
    text: 'Te sugiero este conjunto:\n1. Camisa de lino clara\n2. Jeans slim fit\n3. Zapatillas urbanas\n4. Accesorio minimalista\n¿Te gustaría saber cómo combinar colores para potenciar tu ánimo hoy?',
    timestamp: '2024-06-01T10:00:25Z',
  },
];
