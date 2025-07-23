import Select from "react-select";
import { stuffedOptions } from "../../utils/filterOptions.js";

function StuffedFilter ({ filters, setFilters }) {

  const handleChange = selectedOptions => {
    const values = selectedOptions.map(opt => opt.value);
    setFilters(prev => ({ ...prev, stuffed: values }));
  };

  return (
    <div>
      <label htmlFor="stuffed">¿Qué tipo de relleno buscas?</label>
      <Select
        isMulti
        inputId="stuffed"
        options={stuffedOptions}
        value={stuffedOptions.filter(opt => filters.stuffed.includes(opt.value))}
        onChange={handleChange}
        placeholder="Selecciona tipos de relleno"
      />
    </div>
  );
}

export default StuffedFilter;