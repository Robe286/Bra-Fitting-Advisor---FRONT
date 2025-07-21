import Select from "react-select";
import { brandOptions } from "../../utils/filterOptions.js";

function BrandFilter ({ filters, setFilters}) {
  
  const handleChange = (brandOptions) => {
    const values = brandOptions.map(opt => opt.value);
    setFilters(prev => ({ ...prev, brand: values}));
  };

  return (
    <div>
      <label>¿Qúe marca de sujetador sueles gastar?</label>
      <Select
        isMulti
        options={brandOptions}
        value={brandOptions.filter(opt => filters.brand.includes(opt.value))}
        onChange={handleChange}
        placeholder="Selecciona las marcas que desees"
      />
    </div>
  );
}

export default BrandFilter;