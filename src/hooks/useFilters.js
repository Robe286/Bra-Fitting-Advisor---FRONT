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

  const filtersAreEmpty = () => {

    const isEmptyText = (value) => {
      return typeof value === 'string' && value.trim() === '';
    }
    const isEmptyArray = (value) => {
      return Array.isArray(value) && value.length === 0;
    }
    const {priceMin, priceMax, ...rest} = filters;
    const defaultPrice = priceMin === 0 && priceMax === 100;
    const othersEmpties = Object.entries(rest).every(([Key, value]) => {
      return isEmptyText(value) || isEmptyArray(value);
    });
    return defaultPrice && othersEmpties;
  };

  return { filters, setFilters, resetFilters, filtersAreEmpty };
}