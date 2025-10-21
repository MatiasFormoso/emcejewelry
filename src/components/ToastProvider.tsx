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
  const toastHook = useToast();
  
  // Fallback functions in case useToast fails
  const fallbackSuccess = (title: string, message: string) => {
    console.log(`Toast Success: ${title} - ${message}`);
  };
  
  const fallbackError = (title: string, message: string) => {
    console.log(`Toast Error: ${title} - ${message}`);
  };
  
  const fallbackInfo = (title: string, message: string) => {
    console.log(`Toast Info: ${title} - ${message}`);
  };
  
  const value = {
    success: toastHook?.success || fallbackSuccess,
    error: toastHook?.error || fallbackError,
    info: toastHook?.info || fallbackInfo,
  };
  
  return (
    <ToastContext.Provider value={value}>
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
