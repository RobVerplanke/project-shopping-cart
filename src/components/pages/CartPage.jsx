/* eslint-disable no-unused-vars */
import { useData } from '../../context/DataContext';
import CartItemCard from '../CartItemCard.jsx';
import CartSumary from '../CartSummary.jsx';
import '../../styles/pages/CartPage.css';

function Cart() {
  const { cartItems, setCartItems } = useData();

  // Show message if shopping cart is empty instead of rendering an empty table
  if (!cartItems.length) {
    return (
      <main aria-label="Empty shopping cart">
        <p>No items in your shopping cart.</p>
      </main>
    );
  }

  return (
    <main className="cart-content-container">
      <h2>Products in your cart</h2>
      <div
        className="cart-content-container__content-holder"
        aria-label="Shopping cart"
      >
        <div className="cart-content-container__content-holder__cards">
          {cartItems.map(
            (
              item // Generate a card for each cart item
            ) => (
              <CartItemCard key={item.id} value={item} />
            )
          )}
        </div>
        {/* Generate overview of total costs */}
        <div className="cart-content-container__content-holder__summary">
          <CartSumary value={cartItems} />
        </div>
      </div>
    </main>
  );
}

export default Cart;
