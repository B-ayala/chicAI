import { ChatMessage } from '../../services/pipelineChatBot';
import { ChatInput } from './components/ChatInput';
import { FileAttachment } from './components/FileAttachment';
import { useChatState } from './hooks/useChatState';
import { useChatUI } from './hooks/useChatUI';
import { useFileHandler } from './hooks/useFileHandler';
import {
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

  return (
    <ChatbotWrapper>
      {!open && <HelpText>¿Necesitás ayuda?</HelpText>}
      <BubbleButton aria-label="Abrir chat" onClick={toggleChat} open={open}>
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <circle cx="14" cy="14" r="14" fill="#6C63FF" />
          <path d="M9 12h10M9 16h6" stroke="#fff" strokeWidth="2" strokeLinecap="round" />
        </svg>
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
              color: '#888',
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
