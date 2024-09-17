/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext.jsx';
import QuantityController from './QuantityController.jsx';
import '../styles/CartItemCard.css';

function CartItemCard(item) {
  const { id, image, title, category, quantity, price } = item.value;
  const { cartItems, setCartItems } = useData();

  // Calculate the total costs for the amount of the same items, round the total
  function multiplyPriceQuantity(price, quantity) {
    const total = price * quantity;
    return total.toFixed(2);
  }
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

          {/* title */}
          <div className="cart-item-card__details__info__text-values">
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
          <QuantityController item={item} />
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
            {'\u20AC'} {multiplyPriceQuantity(price, quantity)}
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartItemCard;
