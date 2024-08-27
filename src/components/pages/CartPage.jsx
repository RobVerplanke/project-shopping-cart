import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import '../../styles/CartPage.css';

function Cart() {
  const { cartItems, setCartItems } = useData();

  // Show message if shopping cart is empty instead of rendering an empty table
  if (!cartItems.length) {
    return (
      <main aria-label="Empty shopping cart">
        <p>No items in your shopping cart</p>
      </main>
    );
  }

  // Calculate total costs
  const totalCosts = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  // Handle situations when the user clicks on Payment button
  const handleSubmit = () => {
    alert('Sorry, this is a front-end project only');
  };

  // Remove item from cart
  const handleRemove = (itemIdToRemove) => {
    setCartItems(cartItems.filter((item) => item.id !== itemIdToRemove));
  };

  return (
    <main className="main-content-cart" aria-label="Shopping cart">
      <h2>Products in your cart</h2>
      <table>
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
          {cartItems.map((item) => (
            <tr key={item.id} rowSpan={3}>
              {/* Product image */}
              <td className="image-cell">
                <img src={item.image} alt={`Image of ${item.title}`} />
              </td>
              {/* Product complete information */}
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
          ))}
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
        <button className="button-pay" onClick={handleSubmit}>
          Go to payment
        </button>
      </div>
    </main>
  );
}

export default Cart;
