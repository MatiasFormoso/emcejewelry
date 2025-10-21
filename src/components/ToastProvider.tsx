'use client';

import { createContext, useContext, ReactNode } from 'react';
import { useToast, Toast } from './Toast';

interface ToastContextType {
  success: (title: string, message: string, icon?: React.ReactNode) => void;
  error: (title: string, message: string, icon?: React.ReactNode) => void;
  info: (title: string, message: string, icon?: React.ReactNode) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function ToastProvider({ children }: { children: ReactNode }) {
  const { success, error, info } = useToast();
  
  return (
    <ToastContext.Provider value={{ success, error, info }}>
      {children}
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  if (context === undefined) {
    throw new Error('useToastContext must be used within a ToastProvider');
  }
  return context;
}
