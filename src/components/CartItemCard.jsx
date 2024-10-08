/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext.jsx';
import { multiplyPriceQuantity } from '../utils/helperFunctions.js';
import '../styles/CartItemCard.css';

function CartItemCard({ item }) {
  const { id, image, title, category, quantity, price } = item;
  const [itemQuantityCounter, setItemQuantityCounter] = useState(quantity);
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
    const inputValue = parseInt(e.target.value, 10);
    if (!isNaN(inputValue)) {
      setItemQuantityCounter(inputValue);
    }
  };

  // Update the quantity with the given action (add/subtract one)
  const handleQuantityButtonClick = (action) => {
    setItemQuantityCounter((prevValue) => {
      return action === 'add' ? prevValue + 1 : Math.max(prevValue - 1, 1);
    });
  };
  // Replace the itemslist with a new list that has the corresponding item filtered out
  const handleRemove = (itemIdToRemove) => {
    setCartItems((prevVal) =>
      prevVal.filter((item) => item.id !== itemIdToRemove)
    );
  };

  return (
    <div className="cart-item-card" aria-label="Item in cart">
      <div className="cart-item-card__details">
        <div className="cart-item-card__details__title">
          <p>PRODUCT DETAILS</p>
        </div>
        <div className="cart-item-card__details__info">
          {/* Image */}
          <div className="cart-item-card__details__info__image">
            <img src={image} alt={`picture of ${title}`} />
          </div>

          <div className="cart-item-card__details__info__text-values">
            {/* title */}
            <p
              className="cart-item-card__details__info__text-values__title"
              aria-label="Show item details page"
            >
              <Link to={`../shop/product/${id}`}>{title}</Link>
            </p>

            {/* category */}
            <p className="cart-item-card__details__info__text-values__cat">
              {category}
            </p>

            {/* Product code */}
            <p>Product Code: {id}</p>

            {/* Remove-from-cart button */}
            <a
              className="cart-item-card__details__info__text-values__del"
              aria-label="Remove item from cart"
              tabIndex="0"
              onClick={() => {
                handleRemove(id);
              }}
            >
              Remove from cart
            </a>
          </div>
        </div>
      </div>

      {/* Quantity controller */}
      <div className="cart-item-card__quantity">
        <div className="cart-item-card__quantity__title">
          <p>QUANTITY</p>
        </div>
        <div
          className="cart-item-card__quantity__value"
          aria-label="Amount of items"
        >
          <div className="counter-container">
            {/* Button to subtract one item from the quantity value */}
            <button
              className="counter-container__button"
              aria-label="Subtract item"
              type="button"
              onClick={() => handleQuantityButtonClick('subtract')}
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
              onClick={() => handleQuantityButtonClick('add')}
            >
              +
            </button>
          </div>
        </div>
      </div>

      {/* Item price */}
      <div className="cart-item-card__price">
        <div className="cart-item-card__price__title">
          <p>PRICE</p>
        </div>
        <div
          className="cart-item-card__price__value"
          aria-label="Price of current item"
        >
          <p>
            {'\u20AC'} {price.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Total costs */}
      <div className="cart-item-card__total">
        <div className="cart-item-card__total__title">
          <p>TOTAL</p>
        </div>
        <div
          className="cart-item-card__total__value"
          aria-label="Total costs of current item"
        >
          <p>
            {'\u20AC'} {multiplyPriceQuantity(price, itemQuantityCounter)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
