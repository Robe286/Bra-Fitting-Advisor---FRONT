import { createContext, useContext, useState } from 'react';

const FAVORITOS_KEY = 'Favoritos_guardados';
const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {

  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem(FAVORITOS_KEY);
    return saved ? JSON.parse(saved) : [];
  });

  const saveAtLocalStorage = (product) => {
    localStorage.setItem(FAVORITOS_KEY, JSON.stringify(product));
  }

  const addToFavorites = (product) => {
    setFavorites(prev => {
      const exist = prev.some(p => p._id === product._id);
      if (exist) return prev;
      const updated = [...prev, product];
      saveAtLocalStorage(updated);
      
      return updated;
    })
  };

  const deleteFavorite = (id) => {
    setFavorites(prev => {
      const updated = prev.filter(p => p._id !== id);
      saveAtLocalStorage(updated);
      
      return updated;
    });
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites, deleteFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);