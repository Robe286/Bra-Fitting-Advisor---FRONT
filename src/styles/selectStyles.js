const selectStyles = {
  control: (base, state) => ({
    ...base,
    backgroundColor: '#fff',
    borderColor: state.isFocused ? '#6b21a8' : '#e5e7eb', // púrpura oscuro o gris claro
    boxShadow: state.isFocused ? '0 0 0 2px rgba(107, 33, 168, 0.4)' : 'none',
    borderRadius: '0.75rem', // 12px
    padding: '2px 4px',
    transition: 'all 0.2s ease',
    '&:hover': {
      borderColor: '#6b21a8',
    },
    minHeight: '42px',
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#6b21a8'
      : state.isFocused
      ? '#f3e8ff'
      : '#fff',
    color: state.isSelected ? '#fff' : '#111827',
    padding: '10px 15px',
    cursor: 'pointer',
    transition: 'background 0.2s ease',
  }),

  menu: (base) => ({
    ...base,
    borderRadius: '0.75rem',
    overflow: 'hidden',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    marginTop: '4px',
    zIndex: 20,
  }),

  singleValue: (base) => ({
    ...base,
    color: '#111827', // texto oscuro
    fontWeight: 500,
  }),

  placeholder: (base) => ({
    ...base,
    color: '#9ca3af', // gris claro
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? '#6b21a8' : '#9ca3af',
    '&:hover': {
      color: '#6b21a8',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export default selectStyles;