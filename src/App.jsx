import { RouterProvider } from 'react-router-dom'
import router from './router'
import './App.css'
import { FavoritesProvider } from '../context/FavoriteContext'

function App() {
  return (
    <FavoritesProvider>
      <RouterProvider router={router} />
    </FavoritesProvider>
)}

export default App
