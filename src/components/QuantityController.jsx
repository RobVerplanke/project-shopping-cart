/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import { useData } from '../context/DataContext';

import '../styles/QuantityController.css';

function QuantityController({ item }) {
  const { id, quantity } = item.value;
  const { setCartItems } = useData();

  const [itemQuantityCounter, setItemQuantityCounter] = useState(1);

  // Update the amount with the latest value (displayed in the input field)
  useEffect(() => {
    setItemQuantityCounter(quantity);
  }, []);

  // When input amount changes, update the quantity value in the corresponding cart item
  // so the total costs can directly be recalculated
  useEffect(() => {
    setCartItems((prevCart) => {
      return prevCart.map((item) =>
        item.id === id ? { ...item, quantity: itemQuantityCounter } : item
      );
    });
  }, [itemQuantityCounter]);

  // Controlled component - Update the input value when user changes it
  const handleOnChange = (e) => {
    setItemQuantityCounter(parseInt(e.target.value));
  };

  // Update the amount with the given action (add/subtract)
  const handleAdjustQuantity = (action) => {
    setItemQuantityCounter((prevValue) => {
      return action === 'add' ? prevValue + 1 : Math.max(prevValue - 1, 1);
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
