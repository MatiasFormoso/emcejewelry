'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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

function ToastComponent({ toast, onRemove }: ToastProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(toast.id);
    }, toast.duration || 4000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

  const getToastStyles = () => {
    switch (toast.type) {
      case 'success':
        return {
          bg: 'bg-gradient-to-r from-green-50 to-emerald-50',
          border: 'border-green-200',
          icon: 'text-green-600',
          title: 'text-green-800',
          message: 'text-green-700'
        };
      case 'error':
        return {
          bg: 'bg-gradient-to-r from-red-50 to-rose-50',
          border: 'border-red-200',
          icon: 'text-red-600',
          title: 'text-red-800',
          message: 'text-red-700'
        };
      default:
        return {
          bg: 'bg-gradient-to-r from-blue-50 to-indigo-50',
          border: 'border-blue-200',
          icon: 'text-blue-600',
          title: 'text-blue-800',
          message: 'text-blue-700'
        };
    }
  };

  const styles = getToastStyles();

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ 
        type: "spring", 
        stiffness: 300, 
        damping: 30,
        duration: 0.3 
      }}
      className={`
        relative overflow-hidden rounded-xl shadow-lg border backdrop-blur-sm
        ${styles.bg} ${styles.border}
        min-w-[320px] max-w-[400px] w-full
        animate-slide-in
      `}
      style={{
        // Fallback CSS animation
        animation: 'slideIn 0.3s ease-out',
      }}
    >
      {/* Shimmer effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full animate-shimmer" />
      
      <div className="relative p-4 flex items-start space-x-3">
        {/* Icon */}
        <div className={`flex-shrink-0 ${styles.icon}`}>
          {toast.icon || <CheckCircle className="w-6 h-6" />}
        </div>
        
        {/* Content */}
        <div className="flex-1 min-w-0">
          <h4 className={`text-sm font-semibold ${styles.title}`}>
            {toast.title}
          </h4>
          <p className={`text-sm mt-1 ${styles.message}`}>
            {toast.message}
          </p>
        </div>
        
        {/* Close button */}
        <button
          onClick={() => onRemove(toast.id)}
          className={`
            flex-shrink-0 p-1 rounded-full transition-colors duration-200
            hover:bg-black/5 active:bg-black/10
            ${styles.icon}
          `}
          aria-label="Cerrar notificación"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
      
      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-black/10">
        <motion.div
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500"
          initial={{ width: "100%" }}
          animate={{ width: "0%" }}
          transition={{ duration: (toast.duration || 4000) / 1000, ease: "linear" }}
        />
      </div>
    </motion.div>
  );
}

interface ToastContainerProps {
  toasts: Toast[];
  onRemove: (id: string) => void;
}

export default function ToastContainer({ toasts, onRemove }: ToastContainerProps) {
  // Debug: Log toasts in production
  if (typeof window !== 'undefined' && process.env.NODE_ENV === 'production') {
    console.log('ToastContainer: Current toasts:', toasts.length);
  }
  
  return (
    <div className="fixed top-20 right-4 z-50 space-y-3 pointer-events-none">
      <AnimatePresence mode="popLayout">
        {toasts.map((toast) => (
          <div key={toast.id} className="pointer-events-auto">
            <ToastComponent toast={toast} onRemove={onRemove} />
          </div>
        ))}
      </AnimatePresence>
    </div>
  );
}

// Hook para usar toasts
export function useToast() {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const addToast = (toast: Omit<Toast, 'id'>) => {
    const id = Math.random().toString(36).substr(2, 9);
    setToasts(prev => [...prev, { ...toast, id }]);
  };

  const removeToast = (id: string) => {
    setToasts(prev => prev.filter(toast => toast.id !== id));
  };

  const success = (title: string, message: string, icon?: React.ReactNode) => {
    addToast({ type: 'success', title, message, icon });
  };

  const error = (title: string, message: string, icon?: React.ReactNode) => {
    addToast({ type: 'error', title, message, icon });
  };

  const info = (title: string, message: string, icon?: React.ReactNode) => {
    addToast({ type: 'info', title, message, icon });
  };

  return {
    toasts,
    success,
    error,
    info,
    removeToast
  };
}
