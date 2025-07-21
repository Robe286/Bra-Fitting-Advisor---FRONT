function PriceFilter ({ filters, setFilters }) {
 
  const handleMinChange = (e) => {
    const value = Number(e.target.value);
    if (value <= filters.priceMax) {
      setFilters(prev => ({ ...prev, priceMin: value }))
    }
  };

  const handleMaxChange = (e) => {
    const value = Number(e.target.value);
    if (value >= filters.priceMin) {
      setFilters(prev => ({ ...prev, priceMax: value }))
    }
  };

  return (
    <div>
      <label>¿Cuál es tu presupuesto mínimo? {filters.priceMin} €</label>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={filters.priceMin}
        onChange={handleMinChange}
      />
      <label>¿Cuál es tu presupuesto máximo? {filters.priceMax}</label>
      <input
        type="range"
        min={0}
        max={100}
        step={5}
        value={filters.priceMax}
        onChange={handleMaxChange}
      />
    </div>
  )
}

export default PriceFilter;