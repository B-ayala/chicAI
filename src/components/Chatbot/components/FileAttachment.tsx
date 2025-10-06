import React from 'react';

interface FileAttachmentProps {
  file: File;
  onRemove: () => void;
}

export const FileAttachment: React.FC<FileAttachmentProps> = ({ file, onRemove }) => {
  return (
    <div
      style={{
        padding: '0 18px 10px 18px',
        fontSize: 13,
        color: '#555',
        background: '#f5f7fa',
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        display: 'flex',
        alignItems: 'center',
        gap: 8,
      }}
    >
      <span role="img" aria-label="Archivo adjunto">
        📎
      </span>
      {file.name}
      <button
        onClick={onRemove}
        style={{
          marginLeft: 6,
          background: 'none',
          border: 'none',
          color: '#888',
          fontSize: 16,
          cursor: 'pointer',
        }}
        aria-label="Quitar archivo adjunto"
        type="button"
      >
        ×
      </button>
    </div>
  );
};
