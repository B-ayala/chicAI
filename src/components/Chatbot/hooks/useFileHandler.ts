import { useRef, useState } from 'react';

const ALLOWED_FILE_TYPES = ['application/pdf', 'image/jpeg', 'image/png'];
const FILE_TYPE_ERROR_MESSAGE = 'Solo se permiten archivos PDF, JPG o PNG.';

interface FileData {
  file: File;
  base64: string;
}

export const useFileHandler = () => {
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [fileData, setFileData] = useState<FileData | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateFileType = (file: File): boolean => {
    return ALLOWED_FILE_TYPES.includes(file.type);
  };

  const convertToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          // Remove data URL prefix to get pure base64
          const base64 = reader.result.split(',')[1];
          resolve(base64);
        } else {
          reject(new Error('Error converting file to base64'));
        }
      };
      reader.onerror = () => reject(reader.error);
    });
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!validateFileType(file)) {
      alert(FILE_TYPE_ERROR_MESSAGE);
      e.target.value = '';
      return;
    }

    setIsProcessing(true);
    try {
      const base64 = await convertToBase64(file);
      setAttachedFile(file);
      setFileData({ file, base64 });
    } catch (error) {
      console.error('Error processing file:', error);
      alert('Error al procesar el archivo. Intenta nuevamente.');
      e.target.value = '';
    } finally {
      setIsProcessing(false);
    }
  };

  const clearFile = () => {
    setAttachedFile(null);
    setFileData(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const resetFileInput = () => {
    clearFile();
    setIsProcessing(false);
  };

  return {
    attachedFile,
    fileData,
    isProcessing,
    fileInputRef,
    handleFileChange,
    clearFile,
    resetFileInput,
  };
};
