import BrandFilter from "./filtersComponents/BrandFilter";
import { useState } from "react";

function filterProductsForm () {
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const urlAPI = 'http://localhost:3001/api/products/filter'

  getFilterProducts = async () => {
    const payload = {}
    try {
      const filters = await fetch(urlAPI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if(!filters.ok) { throw new Error(`Error ${filters.status}: ${filters.statusText}`)}

      const data = await filters.json();
      setResult(data.products);

    } catch (error) {
      setError(error.message)
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <button type="submit">Obtener recomendaciónes</button>
      </form>
      {error && (
        <div>Error: {error}</div>
      )}
      {result && (
        <div>{result}</div>
      )}
    </section>
  )
}

export default filterProductsForm;