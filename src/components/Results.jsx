function Results({ products }) {
  
  if (products === null) return null; // No mostrar nada al inicio
  
  if (products.products.length === 0) {
    return <span className="info-span">
      No se han encontrado productos para estas indicaciónes
      </span>
  }
  
  return (
    <div>
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
            </li>
          ))}
        </ul>
    </div>
  );
}

export default Results;