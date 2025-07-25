const selectStylesdos = {
  control: (base, state) => ({
    ...base,
    backgroundColor: '#FDF6F9',
    borderColor: state.isFocused ? '#D94A61' : '#F3C3B4',
    boxShadow: state.isFocused ? '0 0 0 2px rgba(217, 74, 97, 0.3)' : 'none',
    borderRadius: '14px',
    padding: '6px 10px',
    fontFamily: "'Playfair Display', serif",
    fontSize: '1rem',
    color: '#6A3A3A',
    transition: 'all 0.3s ease',
    '&:hover': {
      borderColor: '#D94A61',
    },
  }),
  menu: base => ({
    ...base,
    borderRadius: '12px',
    backgroundColor: '#FFF0F4',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
    zIndex: 20,
  }),
  option: (base, state) => ({
    ...base,
    backgroundColor: state.isSelected
      ? '#F3C3B4'
      : state.isFocused
      ? '#F4DDC1'
      : 'white',
    color: '#D94A61',
    fontWeight: state.isSelected ? 600 : 400,
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.95rem',
    padding: '10px 16px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  }),
  singleValue: base => ({
    ...base,
    color: '#D94A61',
    fontWeight: 500,
  }),
  placeholder: base => ({
    ...base,
    color: '#C28D9B',
    fontStyle: 'italic',
  }),
};

export default selectStylesdos;