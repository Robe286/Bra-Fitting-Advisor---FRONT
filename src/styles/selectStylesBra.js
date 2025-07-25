const selectStylesBra = {
  control: (base, state) => ({
    ...base,
    backgroundColor: 'white',
    borderColor: state.isFocused ? 'var(--rosa-vibrante)' : 'var(--malva)',
    borderWidth: '2px',
    borderRadius: '20px',
    boxShadow: state.isFocused ? '0 0 0 2px var(--nude)' : 'none',
    padding: '4px 6px',
    transition: 'border-color 0.3s ease',
    fontFamily: 'var(--fuente-secundaria)',
    fontSize: '0.95rem',
    color: 'var(--texto)',
  }),
  placeholder: (base) => ({
    ...base,
    color: '#999',
    fontFamily: 'var(--fuente-secundaria)',
  }),
  singleValue: (base) => ({
    ...base,
    color: 'var(--texto)',
    fontWeight: '500',
    fontFamily: 'var(--fuente-secundaria)',
  }),
  menu: (base) => ({
    ...base,
    borderRadius: '15px',
    backgroundColor: 'white',
    padding: '0.3em 0',
    boxShadow: '0 8px 20px rgba(209, 75, 101, 0.1)',
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? 'var(--rosa-vibrante)'
      : state.isFocused
      ? 'var(--nude)'
      : 'white',
    color: state.isSelected || state.isFocused ? 'white' : 'var(--texto)',
    padding: '0.6em 1em',
    fontFamily: 'var(--fuente-secundaria)',
    borderRadius: '10px',
    margin: '2px 6px',
    cursor: 'pointer',
  }),
};

export default selectStylesBra;