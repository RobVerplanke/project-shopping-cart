import React from 'react';
import { useData } from '../../context/DataContext';
import '../../styles/CartPage.css';

function Cart() {
  const { cartItems, setCartItems } = useData();
  let totalCosts = 0;

  // Show message if shopping cart is empty instead of render a empty table
  if (!cartItems.length) return <p>No items in your schopping cart</p>;

  // Return a new array in which the item with a corresponding id is filtered out
  function handleRemove(itemIdToRemove) {
    setCartItems(cartItems.filter((item) => item.id != itemIdToRemove));
  }

  return (
    <main>
      <h2>Cart page</h2>
      <table>
        <caption>Products in your cart</caption>
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th></th>
            <th></th>
            <th id="heading-costs">Costs</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => {
            totalCosts += item.price * item.quantity; // Accumulate the total costs
            return (
              <React.Fragment key={item.id}>
                <tr rowSpan={3}>
                  <td id="image-column">
                    <img src={item.image} alt="Product image" />
                  </td>
                  <td>
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
                  <td>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                  <td></td>
                  <td className="product-total">
                    € {(item.price * item.quantity).toFixed(2)}
                  </td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>

        <tfoot>
          <tr>
            <td></td>
            <td></td>
            <td className="cart-total">Total</td>
            <td></td>
            <td className="cart-total-price">€ {totalCosts.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </main>
  );
}

export default Cart;
