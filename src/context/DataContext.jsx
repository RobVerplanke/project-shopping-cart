/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { getShopData } from '../api/shopApi';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantityCounter, setItemQuantityCounter] = useState(1);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate total amount of items in cart
  const cartQuantityCounter = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0
  );

  // Get a limited amount of fake products from fakestoreapi.com
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      await getShopData(setItems, setError, setIsLoading);
    };

    fetchData();
  }, []);

  return (
    <DataContext.Provider
      value={{
        items,
        cartItems,
        setCartItems,
        itemQuantityCounter,
        setItemQuantityCounter,
        cartQuantityCounter,
        error,
        isLoading,
      }}
    >
      {children}
    </DataContext.Provider>
  );
}

export function useData() {
  return useContext(DataContext);
}
