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
    setItemQuantityCounter(parseInt(e.target.value, 10) || 1);
  };

  // Update the quantity with the given action (add/subtract)
  const handleQuantityChange = (action) => {
    setItemQuantityCounter((prevValue) => {
      const newItemQuantity =
        action === 'add' ? prevValue + 1 : Math.max(prevValue - 1, 1);
      return newItemQuantity;
    });
  };

  return (
    <div className="counter-container">
      <button
        className="counter-container__button"
        type="button"
        aria-label="Subtract item"
        onClick={() => handleQuantityChange('subtract')}
      >
        -
      </button>

      {/* Input quantity */}
      <input
        className="counter-container__counter-value"
        onChange={handleOnChange}
        type="text"
        name="item-quantity"
        value={itemQuantityCounter}
      />

      {/* Add to quantity input */}
      <button
        className="counter-container__button"
        type="button"
        aria-label="Add item"
        onClick={() => handleQuantityChange('add')}
      >
        +
      </button>
    </div>
  );
}

export default QuantityController;
