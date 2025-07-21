import { useState } from "react";

export function useFilters () {
  const [filters, setFilters] = useState({
    size: '',
    cup: '',
    category: [],
    stuffed: [],
    brand: [],
    priceMin: 0,
    priceMax: 100,
    color: []
  });

  const resetFilters = () => {
    setFilters({
    size: '',  
    cup: '',
    category: [],
    stuffed: [],
    brand: [],
    priceMin: 0,
    priceMax: 100,
    color: []
    });
  };

  return { filters, setFilters, resetFilters };
}