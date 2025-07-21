import { useState } from "react";
import { useFilters } from "../hooks/useFilters.js";
import BrandFilter from "./filtersComponents/BrandFilter.jsx";

function FilterProductsForm () {
  const { filters, setFilters, resetFilters } = useFilters();
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const urlAPI = 'http://localhost:3001/api/products/filter'

  const getFilterProducts = async () => {
    const payload = {} // Rellenar el payload
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
    getFilterProducts();
  };

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <BrandFilter filters={filters} setFilters={setFilters} />
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

export default FilterProductsForm;