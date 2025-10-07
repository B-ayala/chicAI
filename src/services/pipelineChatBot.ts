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
    text: '¡Hola! Soy tu asesora virtual de ChicAI 👗✨\n¿Querés descubrir las prendas que mejor reflejan tu personalidad y te hagan sentir increíble cada día?',
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
    text: 'Eso suena perfecto 🌿 Sentirte cómodo y seguro es la base de un estilo auténtico. ¿Querés que exploremos algo casual, elegante o deportivo hoy?',
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
    text: 'Excelente elección 👕 El estilo casual transmite naturalidad y confianza. ¿Querés que te recomiende algunas prendas que se adapten a tu personalidad?',
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
    text: 'Perfecto 😎 Te sugiero este conjunto:\n1️⃣ Camisa de lino clara (ligera y fresca)\n2️⃣ Jeans slim fit en tono medio\n3️⃣ Zapatillas urbanas cómodas\n4️⃣ Accesorio minimalista\n\n¿Querés que te muestre cómo combinar los colores para reflejar mejor tu estado de ánimo hoy?',
    timestamp: '2024-06-01T10:00:25Z',
  },
];
