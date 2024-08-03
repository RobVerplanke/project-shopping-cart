/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';

const BASE_URL = 'https://fakestoreapi.com/products';
const DataContext = createContext();

export function DataProvider({ children }) {
  const [items, setItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Retreive fake product items from fakestoreapi.com
  useEffect(() => {
    fetch(`${BASE_URL}?limit=15`)
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
    <DataContext.Provider value={{ items, error, isLoading }}>
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
