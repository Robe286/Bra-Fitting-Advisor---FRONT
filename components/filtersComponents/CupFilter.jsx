import Select from "react-select";
import { cupOptions } from "../../utils/filterOptions.js";

function CupFilter ({ filters, setFilters}) {

  const handleChange = selected => {
    setFilters(prev => ({ ...prev, cup: selected ?.value || ''  }));
  };

  return (
    <div>
      <label>Dinos cual es tu talla de copa</label>
      <Select
        options={cupOptions}
        value={cupOptions.find(opt => opt.value === filters.cup)}
        onChange={handleChange}
        placeholder="Selecciona tu medida de copa"
      />
    </div>
  );
}

export default CupFilter;