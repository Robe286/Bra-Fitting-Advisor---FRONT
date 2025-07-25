import Select from "react-select";
import selectStylesTres from "../../styles/selectStylesTres.js";
import { categoryOptions } from "../../utils/filterOptions.js";

function CategoryFilter ({ filters, setFilters}) {
  
  const handleChange = selectedOptions => {
    const values = selectedOptions.map(opt => opt.value);
    setFilters(prev => ({ ...prev, category: values }));
  };

  return (
    <div>
      <label htmlFor="category">¿Qué tipo de sujetador estás buscando?</label>
      <Select
        isMulti
        inputId="category"
        styles={selectStylesTres}
        options={categoryOptions}
        value={categoryOptions.filter(opt => filters.category.includes(opt.value))}
        onChange={handleChange}
        placeholder="Escoge tipos de sujetador"
      />
    </div>
  );
}

export default CategoryFilter;

