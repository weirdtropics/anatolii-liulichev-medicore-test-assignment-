import { useState } from 'react';
import { getFromLocalStorage, setToLocalStorage } from '@/utils/storageUtils';
import { FAVORITES_KEY } from '@/constants';

export const useFavorites = () => {
  const [favorites, setFavorites] = useState<number[]>(() =>
    getFromLocalStorage<number[]>(FAVORITES_KEY, []),
  );

  const isFavorite = (id: number) => favorites.includes(id);

  const toggleFavorite = (id: number) => {
    const updated = favorites.includes(id)
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id];

    setToLocalStorage(FAVORITES_KEY, updated);
    setFavorites(updated);
  };

  return { favorites, isFavorite, toggleFavorite };
};
