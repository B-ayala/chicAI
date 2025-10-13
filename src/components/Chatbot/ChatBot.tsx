import React from 'react';
import { ChatMessage } from '../../services/pipelineChatBot';
import { ChatInput } from './components/ChatInput';
import { FileAttachment } from './components/FileAttachment';
import { useChatState } from './hooks/useChatState';
import { useChatUI } from './hooks/useChatUI';
import { useFileHandler } from './hooks/useFileHandler';
import {
  AnimatedBotIcon,
  BotMessage,
  BubbleButton,
  ChatBody,
  ChatbotWrapper,
  ChatHeader,
  ChatWindow,
  HelpText,
  LoadingBubble,
  MessageRow,
  UserMessage,
} from './styled';

export default function ChatBot() {
  const {
    messages,
    loading,
    messagesEndRef,
    createUserMessage,
    addMessage,
    simulateBotResponse,
    resetChat,
  } = useChatState();
  const {
    attachedFile,
    fileData,
    isProcessing,
    fileInputRef,
    handleFileChange,
    clearFile,
    resetFileInput,
  } = useFileHandler();
  const { open, input, setInput, toggleChat, resetUI } = useChatUI();

  const handleSend = () => {
    if ((!input.trim() && !attachedFile) || loading || isProcessing) return;

    const userMessage = createUserMessage(input, fileData || undefined);
    addMessage(userMessage);

    setInput('');
    clearFile();
    simulateBotResponse();
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSend();
    }
  };

  const handleClose = () => {
    resetUI();
    resetChat();
    resetFileInput();
  };

  const renderMessage = (msg: ChatMessage) => (
    <MessageRow key={msg.id} isUser={msg.sender === 'user'}>
      {msg.sender === 'user' ? (
        <UserMessage>{msg.text}</UserMessage>
      ) : (
        <BotMessage>{msg.text}</BotMessage>
      )}
    </MessageRow>
  );

  const renderLoadingMessage = () => (
    <MessageRow isUser={false}>
      <LoadingBubble>
        <span />
        <span />
        <span />
      </LoadingBubble>
    </MessageRow>
  );

  React.useEffect(() => {
    if (open) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [open]);

  return (
    <ChatbotWrapper>
      {!open && <HelpText>Psss ¿Necesitás ayuda?</HelpText>}
      <BubbleButton aria-label="Abrir chat" onClick={toggleChat} open={open}>
        <AnimatedBotIcon width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="16" cy="16" r="16" fill="url(#gradient)" />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#6C63FF" />
              <stop offset="100%" stopColor="#4F46E5" />
            </linearGradient>
          </defs>
          {/* Bot head */}
          <rect x="9" y="11" width="14" height="10" rx="3" fill="#fff" />
          {/* Bot antenna */}
          <rect x="14" y="8" width="4" height="3" rx="2" fill="#fff" />
          <circle cx="16" cy="7" r="1.5" fill="#FFD700" className="antenna-light" />
          {/* Bot eyes */}
          <circle cx="13" cy="15" r="1.5" fill="#6C63FF" className="eye-left" />
          <circle cx="19" cy="15" r="1.5" fill="#6C63FF" className="eye-right" />
          {/* Bot mouth */}
          <rect x="14" y="18" width="4" height="1.5" rx="0.75" fill="#6C63FF" />
          {/* Bot ears/sensors */}
          <rect x="7" y="14" width="2" height="3" rx="1" fill="#fff" />
          <rect x="23" y="14" width="2" height="3" rx="1" fill="#fff" />
        </AnimatedBotIcon>
      </BubbleButton>
      <ChatWindow open={open}>
        <ChatHeader>
          Asistente ChicAI
          <button
            aria-label="Cerrar chat"
            onClick={handleClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: 20,
              cursor: 'pointer',
              color: '#f8f8f8ff',
            }}
          >
            ×
          </button>
        </ChatHeader>
        <ChatBody>
          {messages.map(renderMessage)}
          {loading && renderLoadingMessage()}
          <div ref={messagesEndRef} />
        </ChatBody>
        <ChatInput
          input={input}
          loading={loading}
          attachedFile={attachedFile}
          isProcessingFile={isProcessing}
          fileInputRef={fileInputRef}
          onInputChange={setInput}
          onFileChange={handleFileChange}
          onSend={handleSend}
          onKeyDown={handleKeyDown}
          isOpen={open}
        />
        {attachedFile && <FileAttachment file={attachedFile} onRemove={clearFile} />}
      </ChatWindow>
    </ChatbotWrapper>
  );
}
