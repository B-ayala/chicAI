import React from 'react';
import { ChatInputWrapper } from '../styled';

interface ChatInputProps {
  input: string;
  loading: boolean;
  attachedFile: File | null;
  isProcessingFile: boolean;
  fileInputRef: React.RefObject<HTMLInputElement | null>;
  onInputChange: (value: string) => void;
  onFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSend: () => void;
  onKeyDown: (e: React.KeyboardEvent) => void;
  isOpen: boolean;
}

export const ChatInput: React.FC<ChatInputProps> = ({
  input,
  loading,
  attachedFile,
  isProcessingFile,
  fileInputRef,
  onInputChange,
  onFileChange,
  onSend,
  onKeyDown,
  isOpen,
}) => {
  const canSend = !loading && !isProcessingFile && (input.trim() || attachedFile);
  const isDisabled = loading || isProcessingFile;

  return (
    <ChatInputWrapper>
      <input
        type="text"
        placeholder={isProcessingFile ? 'Procesando archivo...' : 'Escribí tu mensaje...'}
        value={input}
        onChange={(e) => onInputChange(e.target.value)}
        onKeyDown={onKeyDown}
        style={{
          width: '100%',
          border: 'none',
          outline: 'none',
          background: 'transparent',
          fontSize: 15,
          color: '#333',
        }}
        autoFocus={isOpen}
        disabled={isDisabled}
      />
      <label
        htmlFor="chatbot-file-input"
        style={{
          marginLeft: 8,
          cursor: isDisabled ? 'not-allowed' : 'pointer',
          opacity: isDisabled ? 0.5 : 1,
          display: 'flex',
          alignItems: 'center',
        }}
        title="Adjuntar archivo (PDF, JPG, PNG)"
      >
        {isProcessingFile ? (
          <div
            style={{
              width: 22,
              height: 22,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <div
              style={{
                width: 12,
                height: 12,
                border: '2px solid #6c63ff',
                borderTop: '2px solid transparent',
                borderRadius: '50%',
                animation: 'spin 1s linear infinite',
              }}
            />
          </div>
        ) : (
          <svg width="22" height="22" fill="none" viewBox="0 0 22 22">
            <path
              d="M7 11v4a4 4 0 0 0 8 0V7a3 3 0 0 0-6 0v8a2 2 0 0 0 4 0V8"
              stroke="#6c63ff"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        )}
        <input
          id="chatbot-file-input"
          ref={fileInputRef}
          type="file"
          accept=".pdf,image/jpeg,image/png"
          style={{ display: 'none' }}
          disabled={loading}
          onChange={onFileChange}
        />
      </label>
      <button
        onClick={onSend}
        disabled={!canSend}
        style={{
          marginLeft: 8,
          background: '#25172bff',
          color: '#fff',
          border: 'none',
          borderRadius: 8,
          padding: '6px 14px',
          fontSize: 15,
          cursor: canSend ? 'pointer' : 'not-allowed',
          opacity: canSend ? 1 : 0.6,
        }}
        aria-label="Enviar mensaje"
        type="button"
      >
        Enviar
      </button>
    </ChatInputWrapper>
  );
};
