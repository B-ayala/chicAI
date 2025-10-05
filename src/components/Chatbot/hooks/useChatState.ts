import { useEffect, useRef, useState } from 'react';
import { ChatMessage, mockChatHistory } from '../../../services/pipelineChatBot';

interface FileAttachment {
  name: string;
  type: string;
  base64: string;
}

interface ChatMessageWithFile extends ChatMessage {
  attachment?: FileAttachment;
}

export const useChatState = () => {
  const initialMessages = [mockChatHistory[0]];
  const [messages, setMessages] = useState<ChatMessageWithFile[]>(initialMessages);
  const [mockIndex, setMockIndex] = useState(1);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  const getNextBotIndex = (start: number) => {
    for (let i = start; i < mockChatHistory.length; i++) {
      if (mockChatHistory[i].sender === 'bot') return i;
    }
    return -1;
  };

  const createUserMessage = (
    text: string,
    fileData?: { file: File; base64: string }
  ): ChatMessageWithFile => {
    const messageText = fileData?.file?.name
      ? text
        ? `${text}\n[Adjunto: ${fileData.file.name}]`
        : `[Adjunto: ${fileData.file.name}]`
      : text;

    const message: ChatMessageWithFile = {
      id: Date.now().toString(),
      sender: 'user',
      text: messageText,
      timestamp: new Date().toISOString(),
    };

    // Add file attachment if present
    if (fileData?.file && fileData?.base64) {
      message.attachment = {
        name: fileData.file.name,
        type: fileData.file.type,
        base64: fileData.base64,
      };
    }

    return message;
  };

  const addMessage = (message: ChatMessageWithFile) => {
    setMessages((prev) => [...prev, message]);
  };

  const simulateBotResponse = () => {
    setLoading(true);
    setTimeout(() => {
      const nextBotIdx = getNextBotIndex(mockIndex);
      if (nextBotIdx !== -1) {
        setMessages((prev) => [...prev, mockChatHistory[nextBotIdx]]);
        setMockIndex(nextBotIdx + 1);
      }
      setLoading(false);
    }, 900);
  };

  const resetChat = () => {
    setMessages(initialMessages);
    setMockIndex(1);
    setLoading(false);
  };

  return {
    messages,
    loading,
    messagesEndRef,
    createUserMessage,
    addMessage,
    simulateBotResponse,
    resetChat,
  };
};
