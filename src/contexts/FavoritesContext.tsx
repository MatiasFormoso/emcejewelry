'use client';

import React, { createContext, useContext, useReducer, useEffect } from 'react';
import { Product } from '@/lib/products';

interface FavoritesState {
  items: Product[];
}

type FavoritesAction =
  | { type: 'ADD_FAVORITE'; payload: Product }
  | { type: 'REMOVE_FAVORITE'; payload: string }
  | { type: 'CLEAR_FAVORITES' }
  | { type: 'LOAD_FAVORITES'; payload: Product[] };

const initialState: FavoritesState = {
  items: [],
};

function favoritesReducer(state: FavoritesState, action: FavoritesAction): FavoritesState {
  switch (action.type) {
    case 'ADD_FAVORITE': {
      const existingItem = state.items.find(item => item.id === action.payload.id);
      
      if (existingItem) {
        return state; // Ya está en favoritos
      }
      
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }
    
    case 'REMOVE_FAVORITE':
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload),
      };
    
    case 'CLEAR_FAVORITES':
      return {
        ...state,
        items: [],
      };
    
    case 'LOAD_FAVORITES':
      return {
        ...state,
        items: action.payload,
      };
    
    default:
      return state;
  }
}

interface FavoritesContextType {
  state: FavoritesState;
  addFavorite: (product: Product) => void;
  removeFavorite: (productId: string) => void;
  clearFavorites: () => void;
  isFavorite: (productId: string) => boolean;
  getTotalFavorites: () => number;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(favoritesReducer, initialState);

  // Cargar favoritos desde localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedFavorites = localStorage.getItem('emc-jewelry-favorites');
      if (savedFavorites) {
        try {
          const parsedFavorites = JSON.parse(savedFavorites);
          dispatch({ type: 'LOAD_FAVORITES', payload: parsedFavorites });
        } catch (error) {
          console.error('Error loading favorites from localStorage:', error);
        }
      }
    }
  }, []);

  // Guardar favoritos en localStorage cuando cambien
  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('emc-jewelry-favorites', JSON.stringify(state.items));
    }
  }, [state.items]);

  const addFavorite = (product: Product) => {
    dispatch({ type: 'ADD_FAVORITE', payload: product });
  };

  const removeFavorite = (productId: string) => {
    dispatch({ type: 'REMOVE_FAVORITE', payload: productId });
  };

  const clearFavorites = () => {
    dispatch({ type: 'CLEAR_FAVORITES' });
  };

  const isFavorite = (productId: string) => {
    return state.items.some(item => item.id === productId);
  };

  const getTotalFavorites = () => {
    return state.items.length;
  };

  return (
    <FavoritesContext.Provider
      value={{
        state,
        addFavorite,
        removeFavorite,
        clearFavorites,
        isFavorite,
        getTotalFavorites,
      }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
}








