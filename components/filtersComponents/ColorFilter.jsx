import Select from "react-select";
import { colorOptions } from "../../utils/filterOptions.js";

function ColorFilter ({ filters, setFilters }) {

  const handleChange = selectedOptions => {
    const values = selectedOptions.map(opt => opt.value);
    setFilters(prev => ({ ...prev, color: values }));
  };

  return (
    <div>
      <label htmlFor="color">¿Buscas algún color en especial?</label>
      <Select
        isMulti
        inputId="color"
        options={colorOptions}
        value={colorOptions.filter(opt => filters.color.includes(opt.value))}
        onChange={handleChange}
        placeholder="Selecciona colores"
      />
    </div>
  );
}

export default ColorFilter;