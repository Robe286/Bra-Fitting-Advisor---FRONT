import Select from "react-select";
import { sizeOptions } from "../../utils/filterOptions.js";

function SizeFilter ({ filters, setFilters }) {

  const handleChange = selected => {
    setFilters(prev => ({ ...prev, size: selected ?.value || '' }));
  };

  return (
    <div>
      <label>Dinos cual es tu talla</label>
      <Select
        options={sizeOptions}
        value={sizeOptions.find(opt => opt.value === filters.size)}
        onChange={handleChange}
        placeholder="Selecciona tu medida"
      />
    </div>
  );
}

export default SizeFilter;

