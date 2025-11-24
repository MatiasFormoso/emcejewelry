'use client';

import { useState, useCallback } from 'react';

interface CartFeedbackState {
  isAnimating: boolean;
  lastAddedItem: string | null;
}

export function useCartFeedback() {
  const [feedbackState, setFeedbackState] = useState<CartFeedbackState>({
    isAnimating: false,
    lastAddedItem: null,
  });

  const triggerCartAnimation = useCallback((itemName: string) => {
    setFeedbackState({
      isAnimating: true,
      lastAddedItem: itemName,
    });

    // Reset animation after 2 seconds
    setTimeout(() => {
      setFeedbackState(prev => ({
        ...prev,
        isAnimating: false,
      }));
    }, 2000);

    // Clear last added item after 3 seconds
    setTimeout(() => {
      setFeedbackState(prev => ({
        ...prev,
        lastAddedItem: null,
      }));
    }, 3000);
  }, []);

  return {
    feedbackState,
    triggerCartAnimation,
  };
}







