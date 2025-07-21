import Select from "react-select";
import { categoryOptions } from "../../utils/filterOptions.js";

function CategoryFilter ({ filters, setFilters}) {

  const handleChange = selectedOptions => {
    const values = selectedOptions.map(opt => opt.value);
    setFilters(prev => ({ ...prev, category: values }));
  };

  return (
    <div>
      <label>¿Qué tipo de sujetador estás buscando?</label>
      <Select
        isMulti
        options={categoryOptions}
        value={categoryOptions.filter(opt => filters.category.includes(opt.value))}
        onChange={handleChange}
        placeholder="Escoge tipos de sujetador"
      />
    </div>
  );
}

export default CategoryFilter;

