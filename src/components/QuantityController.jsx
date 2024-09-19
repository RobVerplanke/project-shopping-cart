/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useEffect } from 'react';
import { useData } from '../context/DataContext';

import '../styles/QuantityController.css';

function QuantityController({
  item,
  itemQuantityCounter,
  setItemQuantityCounter,
}) {
  const { id } = item;
  const { setCartItems } = useData();

  // When input quantity changes, update the quantity value in the corresponding cart item
  // so the total costs can directly be recalculated
  useEffect(() => {
    setCartItems((prevCart) => {
      return prevCart.map((cartItem) =>
        cartItem.id === id
          ? { ...cartItem, quantity: itemQuantityCounter }
          : cartItem
      );
    });
  }, [itemQuantityCounter]);

  // Controlled component - update the input value when user changes it
  const handleOnChange = (e) => {
    setItemQuantityCounter(parseInt(e.target.value, 10));
  };

  // Update the quantity with the given action (add/subtract one)
  const handleQuantityChange = (action) => {
    setItemQuantityCounter((prevValue) => {
      return action === 'add' ? prevValue + 1 : Math.max(prevValue - 1, 1);
    });
  };

  return (
    <div className="counter-container">
      {/* Button to subtract one item from the quantity value */}
      <button
        className="counter-container__button"
        aria-label="Subtract item"
        type="button"
        onClick={() => handleQuantityChange('subtract')}
      >
        -
      </button>

      {/* Quantity input field */}
      <input
        className="counter-container__counter-value"
        aria-label="Item quantity"
        onChange={handleOnChange}
        type="text"
        name="item-quantity"
        value={itemQuantityCounter}
      />

      {/* Button to add one item to the quantity value */}
      <button
        className="counter-container__button"
        aria-label="Add item"
        type="button"
        onClick={() => handleQuantityChange('add')}
      >
        +
      </button>
    </div>
  );
}

export default QuantityController;
