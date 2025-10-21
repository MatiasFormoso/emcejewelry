'use client';

import React, { useState, useEffect, createContext, useContext, ReactNode } from 'react';
import { X, CheckCircle, Info, AlertTriangle } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  icon?: React.ReactNode;
  duration?: number;
}

interface ToastComponentProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function ToastComponent({ toast, onRemove }: ToastComponentProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isVisible) return;

    const timer = setTimeout(() => {
      setIsVisible(false);
    }, toast.duration || 4000);

    return () => clearTimeout(timer);
  }, [isVisible, toast.duration]);

  useEffect(() => {
    if (!isVisible) {
      const timer = setTimeout(() => onRemove(toast.id), 300);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onRemove, toast.id]);

  const baseClasses = "relative flex items-center p-4 rounded-lg shadow-lg overflow-hidden max-w-sm w-full";
  const typeClasses = {
    success: "bg-green-500 text-white",
    error: "bg-red-500 text-white",
    info: "bg-blue-500 text-white",
  };

  const defaultIcons = {
    success: <CheckCircle className="w-5 h-5" />,
    error: <AlertTriangle className="w-5 h-5" />,
    info: <Info className="w-5 h-5" />,
  };

  return (
    <div className={`${baseClasses} ${typeClasses[toast.type]} ${isVisible ? 'animate-slide-in' : 'animate-slide-out'}`}>
      <div className="flex-shrink-0 mr-3">
        {toast.icon || defaultIcons[toast.type]}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm">{toast.title}</h3>
        <p className="text-xs opacity-90">{toast.message}</p>
      </div>
      <button
        onClick={() => setIsVisible(false)}
        className="ml-4 p-1 rounded-full hover:bg-white/20 transition-colors flex-shrink-0"
        aria-label="Cerrar notificación"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}

interface SimpleToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export default function SimpleToastContainer({ toasts, onRemove }: SimpleToastContainerProps) {
  return (
    <div className="fixed top-20 right-4 z-50 space-y-3 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <ToastComponent toast={toast} onRemove={onRemove} />
        </div>
      ))}
    </div>
  );
}

interface ToastContextType {
  toasts: Toast[];
  success: (title: string, message: string, icon?: ReactNode) => void;
  error: (title: string, message: string, icon?: ReactNode) => void;
  info: (title: string, message: string, icon?: ReactNode) => void;
  removeToast: (id: string) => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export function useSimpleToast() {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error('useSimpleToast must be used within a ToastProvider');
  }
  return context;
}

export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (title: string, message: string, icon?: ReactNode) => {
    addToast({ type: 'success', title, message, icon });
  };

  const error = (title: string, message: string, icon?: ReactNode) => {
    addToast({ type: 'error', title, message, icon });
  };

  const info = (title: string, message: string, icon?: ReactNode) => {
    addToast({ type: 'info', title, message, icon });
  };

  return (
    <ToastContext.Provider value={{ toasts, success, error, info, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
}