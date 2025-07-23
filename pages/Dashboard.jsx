import { useFavorites } from "../context/FavoriteContext";

function Dashboard() {
  const { favorites, deleteFavorite } = useFavorites();

  return (
    <div>
      <h1>Mis productos guardados</h1>
      {favorites.length > 0 ? (
        <ul>
          {favorites.map(product => (
            <li key={product._id}>
              <div>
                <img src={product.image} alt={product.description}/>
              </div>
              <button onClick={() => deleteFavorite(product._id)}>Eliminar</button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No has guardado ningún producto.</p>
      )}
    </div>
  );
}

export default Dashboard;