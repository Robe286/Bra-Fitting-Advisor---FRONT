import Select from "react-select";
import selectStylesTres from "../../styles/selectStylesTres.js";
import { cupOptions } from "../../utils/filterOptions.js";

function CupFilter ({ filters, setFilters}) {

  const handleChange = selected => {
    setFilters(prev => ({ ...prev, cup: selected ?.value || ''  }));
  };

  return (
    <div>
      <label htmlFor="cup">Dinos cual es tu talla de copa</label>
      <Select
        inputId="cup"
        styles={selectStylesTres}
        options={cupOptions}
        value={cupOptions.find(opt => opt.value === filters.cup) || null}
        onChange={handleChange}
        placeholder="Selecciona tu medida de copa"
      />
    </div>
  );
}

export default CupFilter;