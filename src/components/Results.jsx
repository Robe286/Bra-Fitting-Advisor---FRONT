function Results({ products }) {
  
  if (products === null) return null; // No mostrar nada al inicio
  
  if (products.products.length === 0) {
    return <span className="info-span">
      No se han encontrado productos para estas indicaciónes
      </span>
  }
  
  return (
    <section className="results-grid">
      {products.products.map(product => (
        <div className="product-card" key={product._id}>
          <div className="product-image-wrapper">
            <img src={product.image} alt={product.description}/>
          </div>
          <div className="product-info">
            <p className="product-brand">{product.brand}</p>
            <p className="product-description">{product.description}</p>
            <p className="product-category">{product.category} - {product.stuffed}</p>
            <p className="product-color">{product.color}</p>
            <p className="product-size">{product.size}{product.cup}</p>
            <div className="product-pricing">
              <span className="discount">(-{product.discount}%)</span>
              <span className="old-price">{product.price}€</span>
              <span className="new-price">{product.price}€</span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Results;