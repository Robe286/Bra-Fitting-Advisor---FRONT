import Select from "react-select";

const BrandOptions = [
  { value: 'Dim', label: "Dim" },
  { value: 'Gisela', label: 'Gisela' },
  { value: 'Passionata', label: 'Passionata' },
  { value: 'Rosa Faia', label: 'Rosa Faia' },
  { value: 'Selene', label: 'Selene' },
  { value: 'Selmark', label: 'Selmark' },
  { value: 'Shok Absorber', label: 'Shok Absorber' },
  { value: 'Sportex', label: 'Sportex' },
  { value: 'Triumph', label: 'Triumph' },
  { value: 'Ysabel Mora', label: 'Ysabel Mora' },
  { value: 'Variance', label: 'Variance' }
];

function BrandSelect ({ value, onChange }) {
  return (
    <div>
      <label>Marcas:</label>
      <Select
        isMulti
        options={BrandOptions}
        value={value}
        onChange={onChange}
        placeholder="Selecciona las marcas"
      />
    </div>
  );
}

export default BrandSelect;


