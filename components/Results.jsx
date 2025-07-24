function Results({ products }) {

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
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Results;