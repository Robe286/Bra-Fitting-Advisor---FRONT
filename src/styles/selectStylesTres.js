const selectStylesTres = {
  
  control: (base, state) => ({
    ...base,
    backgroundColor: '#fff',
    borderColor: state.isFocused ? '#6b21a8' : '#dce0e9ff',
    boxShadow: state.isFocused
      ? '0 0 0 3px rgba(107, 33, 168, 0.25)'
      : '0 1px 3px rgba(0, 0, 0, 0.05)',
    borderRadius: '1rem',
    padding: '6px 10px',
    minHeight: '48px',
    transition: 'all 0.25s ease-in-out',
    cursor: 'pointer',
    fontSize: '1rem',
    '&:hover': {
      borderColor: '#6b21a8',
      boxShadow: '0 0 0 2px rgba(107, 33, 168, 0.15)',
    },
  }),

  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#6b21a8'
      : state.isFocused
      ? '#f3e8ff'
      : '#fff',
    color: state.isSelected ? '#fff' : '#6b21a8',
    padding: '12px 18px',
    fontWeight: state.isSelected ? 1000 : 200,
    cursor: 'pointer',
    transition: 'background 0.2s ease',
    letterSpacing: '0.01em',
  }),

  menu: (base) => ({
    ...base,
    borderRadius: '1rem',
    overflow: 'hidden',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08)',
    marginTop: '8px',
    zIndex: 20,
  }),

  singleValue: (base) => ({
    ...base,
    color: '#111827',
    fontWeight: 500,
    letterSpacing: '0.01em',
  }),

  placeholder: (base) => ({
    ...base,
    color: '#be97deff',
    fontStyle: 'italic',
    opacity: 0.9,
  }),

  dropdownIndicator: (base, state) => ({
    ...base,
    color: state.isFocused ? '#6b21a8' : '#c4b5fd',
    transform: state.isFocused ? 'rotate(180deg)' : 'rotate(0deg)',
    transition: 'all 0.2s ease',
    '&:hover': {
      color: '#6b21a8',
    },
  }),

  indicatorSeparator: () => ({
    display: 'none',
  }),
};

export default selectStylesTres;