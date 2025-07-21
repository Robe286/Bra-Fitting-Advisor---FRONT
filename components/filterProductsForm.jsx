import { useState } from "react";
import { useFilters } from "../hooks/useFilters.js";
import BrandFilter from "./filtersComponents/BrandFilter.jsx";
import PriceFilter from "./filtersComponents/priceFilter.jsx";
import StuffedFilter from "./filtersComponents/stuffedFilter.jsx";
import CategoryFilter from "./filtersComponents/categoryFilter.jsx";
import CupFilter from "./filtersComponents/cupFilter.jsx";
import SizeFilter from "./filtersComponents/sizeFilter.jsx";
import ColorFilter from "./filtersComponents/colorFilter.jsx";

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
        <SizeFilter filters={filters} setFilters={setFilters} />
        <CupFilter filters={filters} setFilters={setFilters} />
        <CategoryFilter filters={filters} setFilters={setFilters} />
        <StuffedFilter filters={filters} setFilters={setFilters} />
        <BrandFilter filters={filters} setFilters={setFilters} />
        <PriceFilter filters={filters} setFilters={setFilters} />
        <ColorFilter filters={filters} setFilters={setFilters} />
        <button type="submit">Obtener recomendaciónes</button>
        <button type="button" onClick={resetFilters}>Comienza de nuevo</button>
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