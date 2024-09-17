/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useData } from '../context/DataContext';

import '../styles/QuantityController.css';

function QuantityController({ item }) {
  const { id, quantity } = item.value;
  const { setCartItems } = useData();

  const [itemQuantityCounter, setItemQuantityCounter] = useState(1);

  // Update value of input field
  useEffect(() => {
    setItemQuantityCounter(quantity);
  }, [quantity]);

  // Synchronize value of the quantity input field with the latest value
  const handleOnChange = (e) => {
    setItemQuantityCounter(e.target.value);
  };

  // Update the value of the input field with the choosen action
  const handleAdjustQuantity = (action) => {
    setItemQuantityCounter((prevValue) => {
      const newValue =
        action === 'add' ? prevValue + 1 : Math.max(prevValue - 1, 1);

      // Update the cart directly with the new value
      setCartItems((prevCart) => {
        return prevCart.map((item) =>
          item.id === id ? { ...item, quantity: newValue } : item
        );
      });

      return newValue;
    });
  };

  return (
    <div className="counter-container">
      <button
        className="counter-container__button"
        type="button"
        aria-label="Subtract item"
        onClick={() => handleAdjustQuantity('subtract')}
      >
        -
      </button>

      {/* Input quantity */}
      <input
        className="counter-container__counter-value"
        onChange={handleOnChange}
        type="text"
        name="item-quantity"
        value={itemQuantityCounter || 1}
      />

      {/* Add to quantity input */}
      <button
        className="counter-container__button"
        type="button"
        aria-label="Add item"
        onClick={() => handleAdjustQuantity('add')}
      >
        +
      </button>
    </div>
  );
}

export default QuantityController;
