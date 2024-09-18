/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
import { getShopData } from '../api/shopApi';

const DataContext = createContext();

export function DataProvider({ children }) {
  // All available items from the shop
  const [items, setItems] = useState([]);
  // Items in cart have an extra 'quantity' property
  const [cartItems, setCartItems] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate total amount of items in cart
  const cartQuantityCounter = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0
  );

  useEffect(() => {}, [cartItems]);

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
