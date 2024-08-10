import React from 'react';
import { useData } from '../../context/DataContext';
import '../../styles/CartPage.css';

function Cart() {
  const { cartItems } = useData();

  return (
    <>
      <h2>Cart page</h2>
      <table>
        <caption>Products in your cart</caption>
        <thead>
          <tr>
            <th>Product</th>
            <th></th>
            <th>Costs</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map((item) => {
            return (
              <React.Fragment key={item.id}>
                <tr>
                  <td rowSpan={3}>
                    <img src={item.image} alt="Product image" />
                  </td>
                  <td>{item.title}</td>
                </tr>
                <tr>
                  <td>{item.description}</td>
                </tr>
                <tr>
                  <td>Amount: {item.quantity}</td>
                  <td>{item.price}</td>
                </tr>
              </React.Fragment>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            <td></td>
            <td>Total costs</td>
            <td>234,00</td>
          </tr>
        </tfoot>
      </table>
    </>
  );
}

export default Cart;
