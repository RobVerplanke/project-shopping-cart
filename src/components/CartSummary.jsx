// import { Link } from 'react-router-dom';
// import { useEffect, useRef } from 'react';
import { DELIVERY_DISCOUNT_LIMIT, DELIVERY_COSTS } from '../lib/constants.js';
import {
  getQuantityCount,
  getTotalCartCosts,
  getTotalItemCosts,
} from '../utils/helperFunctions.js';

import '../styles/CartSummary.css';

function CartSumary(cartItems) {
  // Get the total amount of items that are in the cart
  const cartQuantityCounter = getQuantityCount(cartItems);

  // Calculate the total costs of all items in the cart
  const totalItemCosts = getTotalItemCosts(cartItems);

  // Inform user that this is a mock webshop without a backend when clicked on the checkout button
  const handleSubmit = () => {
    alert('Sorry, this is a front-end only project');
  };

  return (
    <div className="summary-container">
      <div className="summary-container__title">
        <p>ORDER SUMMARY</p>
      </div>
      <div className="summary-container__items-total-price">
        {/* Display total amount of items in cart */}
        <div className="summary-container__items-price__title">
          <p>ITEMS ({cartQuantityCounter})</p>
        </div>
        <div className="summary-container__items-price__price">
          <p>
            {'\u20AC'} {totalItemCosts.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Show delivery costs */}
      <div className="summary-container__delivery-costs">
        <div className="summary-container__delivery-costs__title">
          <p>DELIVERY COSTS</p>
        </div>
        <div>
          <p
            className={
              totalItemCosts >= DELIVERY_DISCOUNT_LIMIT
                ? 'summary-container__delivery-costs__price'
                : 'summary-container__delivery-costs__price active'
            }
          >
            {'\u20AC'} {DELIVERY_COSTS}
          </p>
        </div>
      </div>
      <div className="summary-container__delivery-costs__delivery-message">
        <p>
          Free delivery above {'\u20AC'} {DELIVERY_DISCOUNT_LIMIT.toFixed(2)}!
        </p>
      </div>

      {/* Redeem a fictional discount code */}
      <div className="summary-container__redeem-code">
        <div className="summary-container__redeem-code__title">
          <p>REDEEM CODE</p>
        </div>
        <div className="summary-container__redeem-code__input">
          <input type="text" />
        </div>
      </div>

      {/* Display total costs */}
      <div className="summary-container__total-price">
        <div className="summary-container__total-price__title">
          <p>TOTAL COST:</p>
        </div>
        <div>
          <p>
            {'\u20AC'} {getTotalCartCosts(totalItemCosts)}
          </p>
        </div>
      </div>

      {/* Checkout button */}
      <div className="summary-container__buttons">
        <button
          className="summary-container__buttons__pay"
          onClick={handleSubmit}
        >
          CHECKOUT
        </button>
      </div>
    </div>
  );
}

export default CartSumary;
