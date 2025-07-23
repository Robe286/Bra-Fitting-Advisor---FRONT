import { useState } from "react";
import { useFilters } from "../../hooks/useFilters.js";
import BrandFilter from "../filters/BrandFilter.jsx";
import PriceFilter from "../filters/priceFilter.jsx";
import StuffedFilter from "../filters/stuffedFilter.jsx";
import CategoryFilter from "../filters/categoryFilter.jsx";
import CupFilter from "../filters/cupFilter.jsx";
import SizeFilter from "../filters/sizeFilter.jsx";
import ColorFilter from "../filters/colorFilter.jsx";
import Results from "../Results.jsx";

function FilterProductsForm () {

  const { filters, setFilters, resetFilters, filtersAreEmpty } = useFilters();
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);
  const urlAPI = 'http://localhost:3001/api/products/filter'

  const getFilterProducts = async () => {
    const payload = { filters }
    try {
      const filters = await fetch(urlAPI, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      console.log('Filtros antes de enviar:', payload);

      if(!filters.ok) { throw new Error(`Error ${filters.status}: ${filters.statusText}`)}

      const data = await filters.json();
      setResult(data);
      console.log(data);

    } catch (error) {
      setError(error.message)
      console.error(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (filtersAreEmpty()) {
      alert('Debes rellenar al menos un filtro para que podamos asesorarte como te mereces');
      return;
    }
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
      <Results products={result}/>
    </section>
  )
}

export default FilterProductsForm;