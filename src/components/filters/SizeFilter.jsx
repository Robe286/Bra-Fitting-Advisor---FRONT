import Select from "react-select";
import selectStylesdos from "../../styles/SelectStylesdos.js";
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
        styles={selectStylesdos}
        options={sizeOptions}
        value={sizeOptions.find(opt => opt.value === filters.size)}
        onChange={handleChange}
        placeholder="Selecciona tu talla"
      />
    </div>
  );
}

export default SizeFilter;

