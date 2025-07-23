import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'
import { FavoritesProvider } from '../context/FavoriteContext';
import { AuthProvider } from '../context/AuthContext';

function App() {
  return (
    <AuthProvider>
      <FavoritesProvider>
        <RouterProvider router={router} />
      </FavoritesProvider>
    </AuthProvider>
)}

export default App
