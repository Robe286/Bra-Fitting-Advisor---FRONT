/*
import { createContext, useContext, useState } from 'react';
import { AuthContext } from "../../context/AuthContext";
import API from '../api/axiosConfig';

const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const { token } = useContext(AuthContext);


  const addToFavorites = async (product) => {
   try {
    await API.post(`/api/favorites/${product._id}`, null, {
      headers: { Authorization: `Bearer ${token}`},
    });
    setFavorites(prev => [...prev, product]);

   } catch  (error) {
    console.error('error al guardar favorito', error)
   }
  };


  return (
    <FavoritesContext.Provider value={{ favorites, addToFavorites }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavorites = () => useContext(FavoritesContext);
*/
