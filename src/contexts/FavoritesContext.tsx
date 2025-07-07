import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Character } from '../types/api';

interface FavoritesContextType {
  favorites: Character[];
  addFavorite: (character: Character) => void;
  removeFavorite: (characterId: number) => void;
  isFavorite: (characterId: number) => boolean;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

interface FavoritesProviderProps {
  children: ReactNode;
}
/**
 * Provider that handles business logic for favorites feature
 * @param children React component
 * @returns 
 */
export const FavoritesProvider = ({ children }: FavoritesProviderProps) => {
  const [favorites, setFavorites] = useState<Character[]>([]);

  const addFavorite = (character: Character) => {
    if (!favorites.some(fav => fav.id === character.id)) {
      setFavorites(prevFavorites => [...prevFavorites, character]);
    }
  };

  const removeFavorite = (characterId: number) => {
    setFavorites(prevFavorites => prevFavorites.filter(fav => fav.id !== characterId));
  };

  const isFavorite = (characterId: number) => {
    return favorites.some(fav => fav.id === characterId);
  };

  const value = {
    favorites,
    addFavorite,
    removeFavorite,
    isFavorite,
  };

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error('useFavorites must be used within a FavoritesProvider');
  }
  return context;
};
