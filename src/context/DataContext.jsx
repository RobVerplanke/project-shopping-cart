/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from 'react';
// import { BASE_URL, MAX_ITEMS } from '../lib/constants';

const DataContext = createContext();

export function DataProvider({ children }) {
  const [items, setItems] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [itemQuantityCounter, setItemQuantityCounter] = useState(0);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Calculate total amount of items in cart
  const cartQuantityCounter = cartItems.reduce(
    (total, item) => (total += item.quantity),
    0
  );

  // Get a limited amount of fake products from fakestoreapi.com
  useEffect(() => {
    // fetch(`${BASE_URL}?limit=${MAX_ITEMS}`)
    //   .then((response) => response.json())
    //   .then((response) => {
    //     setItems(response);
    //     setError(null);
    //   })
    //   .catch((error) => {
    //     setError(error);
    //     setItems(null);
    //   })
    //   .finally(() => setIsLoading(false));
    setItems([
      {
        id: 1,
        title: 'title 1',
        description: 'desc',
        category: 'cat',
        price: '1',
        image:
          'https://rlv.zcache.com/champagne_tower_couple_bride_groom_names_self_inking_stamp-r2a6898770aa44bf0ae4126683d2c10ae_6ogvz_170.jpg',
      },
      {
        id: 2,
        title: 'title 2',
        description: 'desc',
        category: 'cat',
        price: '2',
        image:
          'https://rlv.zcache.com/champagne_tower_couple_bride_groom_names_self_inking_stamp-r2a6898770aa44bf0ae4126683d2c10ae_6ogvz_170.jpg',
      },
      {
        id: 3,
        title: 'title 3',
        description: 'desc',
        category: 'cat',
        price: '3',
        image:
          'https://rlv.zcache.com/champagne_tower_couple_bride_groom_names_self_inking_stamp-r2a6898770aa44bf0ae4126683d2c10ae_6ogvz_170.jpg',
      },
    ]);
    setError(null);
    setIsLoading(false);
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
