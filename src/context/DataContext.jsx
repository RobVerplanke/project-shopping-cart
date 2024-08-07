/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { BASE_URL, MAX_ITEMS } from '../lib/constants';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Get a limited amount of fake products from fakestoreapi.com
  useEffect(() => {
    fetch(`${BASE_URL}?limit=${MAX_ITEMS}`)
      .then((response) => response.json())
      .then((response) => {
        setItems(response);
        setError(null);
      })
      .catch((error) => {
        setError(error);
        setItems(null);
      })
      .finally(() => setIsLoading(false));
  }, []);

  return (
    <DataContext.Provider value={{ items, cartItems, error, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
