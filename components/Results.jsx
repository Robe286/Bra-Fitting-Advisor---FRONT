import { useFavorites } from "../context/FavoriteContext";

function Results({ products }) {
  const { addToFavorites } = useFavorites();
  return (
    <div>
      {products && (
        <ul>
          {products.products.map((product) => (
            <li key={product._id}>
              <div>
                <img
                  src={product.image}
                  alt={product.description}
                  width={400}
                  height={500}
                />
              </div>
              <button onClick={() => addToFavorites(product)}>Añadir a mi lista de deseos</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Results;