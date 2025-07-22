import Select from "react-select";
import { sizeOptions } from "../../utils/filterOptions.js";

function SizeFilter ({ filters, setFilters }) {

  const handleChange = selected => {
    setFilters(prev => ({ ...prev, size: selected ?.value || '' }));
  };

  return (
    <div>
      <label htmlFor="size">Dinos cual es tu talla</label>
      <Select
        inputId="size"
        options={sizeOptions}
        value={sizeOptions.find(opt => opt.value === filters.size)}
        onChange={handleChange}
        placeholder="Selecciona tu medida"
      />
    </div>
  );
}

export default SizeFilter;

