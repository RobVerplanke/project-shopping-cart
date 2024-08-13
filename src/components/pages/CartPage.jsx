import React from 'react';
import { useData } from '../../context/DataContext';
import '../../styles/CartPage.css';

function Cart() {
  const { cartItems, setCartItems } = useData();
  let totalCosts = 0;

  // Show message if shopping cart is empty instead of render a empty table
  if (!cartItems.length) return <p>No items in your schopping cart</p>;

  // Return a new array in which the corresponding item is filtered out
  function handleRemove(itemIdToRemove) {
    setCartItems(cartItems.filter((item) => item.id != itemIdToRemove));
  }

  return (
    <>
      <h2>Cart page</h2>
      <table>
        <caption>Products in your cart</caption>
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th></th>
            <th></th>
            <th>Costs</th>
          </tr>
        </thead>

        <tbody>
          {cartItems.map((item) => {
            totalCosts += item.price * item.quantity; // Accumulate the total costs
            return (
              <React.Fragment key={item.id}>
                <tr rowSpan={3}>
                  <td>
                    <img src={item.image} alt="Product image" />
                  </td>
                  <td>
                    {item.title}
                    <br></br>
                    {item.description}
                    <br></br>
                    Amount: {item.quantity}
                  </td>
                  <td>
                    <br></br>
                    <br></br>
                    <button onClick={() => handleRemove(item.id)}>
                      Remove
                    </button>
                  </td>
                  <td></td>
                  <td>
                    <br></br>
                    <br></br>
                    {item.price * item.quantity}
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
            <td>Total</td>
            <td></td>
            <td>{totalCosts.toFixed(2)}</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Cart;
