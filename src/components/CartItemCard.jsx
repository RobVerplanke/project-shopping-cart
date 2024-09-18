/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext.jsx';
import QuantityController from './QuantityController.jsx';
import { multiplyPriceQuantity } from '../utils/helperFunctions.js';
import '../styles/CartItemCard.css';

function CartItemCard({ item }) {
  const { id, image, title, category, quantity, price } = item;
  const [itemQuantityCounter, setItemQuantityCounter] = useState(quantity);
  const { setCartItems } = useData();

  // Replace the itemslist with a new list, without the corresponding item
  const handleRemove = (itemIdToRemove) => {
    setCartItems((prevVal) =>
      prevVal.filter((item) => item.id !== itemIdToRemove)
    );
  };

  return (
    <div className="cart-item-card">
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
            <p className="cart-item-card__details__info__text-values__title">
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
        <div className="cart-item-card__quantity__value">
          <QuantityController
            item={item}
            itemQuantityCounter={itemQuantityCounter}
            setItemQuantityCounter={setItemQuantityCounter}
          />
        </div>
      </div>

      {/* Item price */}
      <div className="cart-item-card__price">
        <div className="cart-item-card__price__title">
          <p>PRICE</p>
        </div>
        <div className="cart-item-card__price__value">
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
        <div className="cart-item-card__total__value">
          <p>
            {'\u20AC'} {multiplyPriceQuantity(price, itemQuantityCounter)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
