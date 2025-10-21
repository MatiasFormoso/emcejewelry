'use client';

import { useEffect, useState } from 'react';
import { CheckCircle, X, ShoppingCart, Heart } from 'lucide-react';

export type ToastType = 'success' | 'error' | 'info';

export interface Toast {
  id: string;
  type: ToastType;
  title: string;
  message: string;
  icon?: React.ReactNode;
  duration?: number;
}

interface ToastProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

function SimpleToastComponent({ toast, onRemove }: ToastProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    // Show toast immediately
    const showTimer = setTimeout(() => setIsVisible(true), 10);
    
    // Auto remove timer
    const removeTimer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration || 4000);

    // Progress bar animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev - (100 / ((toast.duration || 4000) / 100));
        return newProgress <= 0 ? 0 : newProgress;
      });
    }, 100);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(removeTimer);
      clearInterval(progressInterval);
    };
  }, [toast.id, toast.duration, onRemove]);

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-green-500 to-emerald-500',
          border: 'border-green-400/30',
          icon: toast.icon || <CheckCircle className="w-5 h-5" />
        };
      case 'error':
        return {
          bg: 'bg-gradient-to-r from-red-500 to-rose-500',
          border: 'border-red-400/30',
          icon: toast.icon || <X className="w-5 h-5" />
        };
      case 'info':
        return {
          bg: 'bg-gradient-to-r from-blue-500 to-cyan-500',
          border: 'border-blue-400/30',
          icon: toast.icon || <ShoppingCart className="w-5 h-5" />
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-gray-500 to-gray-600',
          border: 'border-gray-400/30',
          icon: <CheckCircle className="w-5 h-5" />
        };
    }
  };

  const styles = getToastStyles();

  return (
    <div
      className={`
        relative overflow-hidden rounded-xl shadow-lg border backdrop-blur-sm
        ${styles.bg} ${styles.border}
        min-w-[320px] max-w-[400px] w-full text-white
        transition-all duration-300 ease-out
        ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'}
      `}
      style={{
        transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(0.95)',
        opacity: isVisible ? 1 : 0,
      }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      
      <div className="relative p-4 flex items-start space-x-3">
        {/* Icon */}
        <div className="flex-shrink-0 mt-0.5">
          {styles.icon}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-sm text-white">
            {toast.title}
          </h3>
          <p className="text-xs text-white/90 mt-1 leading-relaxed">
            {toast.message}
          </p>
        </div>
        
        {/* Close button */}
        <button
          onClick={() => {
            setIsVisible(false);
            setTimeout(() => onRemove(toast.id), 300);
          }}
          className="flex-shrink-0 p-1 rounded-full hover:bg-white/20 transition-colors duration-200"
          aria-label="Cerrar notificación"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 h-1 bg-white/30 w-full">
        <div 
          className="h-full bg-white/60 transition-all duration-100 ease-linear"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  );
}

interface SimpleToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export default function SimpleToastContainer({ toasts, onRemove }: SimpleToastContainerProps) {
  // Debug: Log toasts in production
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    console.log('SimpleToastContainer: Current toasts:', toasts.length);
  }
  
  return (
    <div className="fixed top-20 right-4 z-50 space-y-3 pointer-events-none">
      {toasts.map((toast) => (
        <div key={toast.id} className="pointer-events-auto">
          <SimpleToastComponent toast={toast} onRemove={onRemove} />
        </div>
      ))}
    </div>
  );
}

// Hook para usar toasts
export function useSimpleToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (type: ToastType, title: string, message: string, icon?: React.ReactNode, duration?: number) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      id,
      type,
      title,
      message,
      icon,
      duration
    };
    
    setToasts(prev => [...prev, newToast]);
    
    // Debug log
    if (typeof window !== 'undefined') {
      console.log(`Toast added: ${type} - ${title}`);
    }
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (title: string, message: string, icon?: React.ReactNode) => 
    addToast('success', title, message, icon);
  
  const error = (title: string, message: string, icon?: React.ReactNode) => 
    addToast('error', title, message, icon);
  
  const info = (title: string, message: string, icon?: React.ReactNode) => 
    addToast('info', title, message, icon);

  return {
    toasts,
    success,
    error,
    info,
    removeToast
  };
}
