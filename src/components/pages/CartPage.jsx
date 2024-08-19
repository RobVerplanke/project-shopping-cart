import React from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import '../../styles/CartPage.css';

function Cart() {
  const { cartItems, setCartItems } = useData();
  let totalCosts = 0;

  // Show message if shopping cart is empty instead of render a empty table
  if (!cartItems.length)
    return (
      <main aria-label="Empty schopping cart">
        <p>No items in your schopping cart</p>
      </main>
    );

  // Show message when user clicks on Payment button
  function handleSubmit() {
    console.log('not available');
  }

  // Return a new array in which a item with the corresponding id is filtered out
  function handleRemove(itemIdToRemove) {
    setCartItems(cartItems.filter((item) => item.id != itemIdToRemove));
  }

  return (
    <main aria-label="Shopping cart">
      <h2>Cart page</h2>
      <table>
        <caption>Products in your cart</caption>
        <thead>
          <tr>
            <th colSpan={3} scope="col">
              Product
            </th>
            <th className="heading-costs" scope="col">
              Costs
            </th>
          </tr>
        </thead>

        <tbody>
          {/* Display each item in the shopping cart */}
          {cartItems.map((item) => {
            totalCosts += item.price * item.quantity; // Accumulate the total costs
            return (
              <React.Fragment key={item.id}>
                {/* Product image */}
                <tr rowSpan={3}>
                  <td className="image-column">
                    <img src={item.image} alt="Product image" />
                  </td>
                  <td>
                    {/* Product complete information */}
                    <div className="product-info">
                      <span className="product-title">{item.title}</span>
                      <span className="product-description">
                        {item.description}
                      </span>
                      <span className="product-quantity">
                        Amount: {item.quantity}
                      </span>
                    </div>
                  </td>
                  {/* Remove button */}
                  <td>
                    <button
                      className="remove-button"
                      aria-label="Remove from cart"
                      onClick={() => handleRemove(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                  {/* Product price */}
                  <td className="product-total">
                    € {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>

        {/* Display total price */}
        <tfoot>
          <tr>
            <td colSpan={3} className="cart-total-label">
              TOTAL
            </td>
            <td className="cart-total-price">€ {totalCosts.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>

      {/* Link to shop and link to "Payment" */}
      <div className="cart-buttons">
        <Link to="/shop">Back to shop</Link>
        <button className="button-pay" onClick={() => handleSubmit()}>
          Go to payment
        </button>
      </div>
    </main>
  );
}

export default Cart;
