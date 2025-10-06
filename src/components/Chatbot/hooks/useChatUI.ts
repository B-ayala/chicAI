import { useState } from 'react';

export const useChatUI = () => {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');

  const toggleChat = () => {
    setOpen((prev) => !prev);
  };

  const closeChat = () => {
    setOpen(false);
  };

  const clearInput = () => {
    setInput('');
  };

  const resetUI = () => {
    closeChat();
    clearInput();
  };

  return {
    open,
    input,
    setInput,
    toggleChat,
    closeChat,
    clearInput,
    resetUI,
  };
};
