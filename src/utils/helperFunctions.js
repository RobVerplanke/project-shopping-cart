import { DELIVERY_COSTS } from '../lib/constants.js';

// Calculate the total costs for all items together
export function getCartTotalQuantity(cartItems) {
  return cartItems.value.reduce((acc, item) => (acc += item.quantity), 0);
}

// Calculate the total costs for the amount of the same items, round the total
export function multiplyPriceQuantity(price, quantity) {
  const total = price * quantity;
  return total.toFixed(2);
}

// Calculate total costs, including additional costs like delivery costs
export function getCartTotalCosts(totalItemCosts) {
  if (totalItemCosts >= 50) {
    return totalItemCosts.toFixed(2);
  } else {
    return (totalItemCosts + DELIVERY_COSTS).toFixed(2);
  }
}

// Calculate the total costs of all items in the cart
export function getAllItemsCosts(cartItems) {
  const total = cartItems.value.reduce((acc, item) => {
    return (acc = acc + item.quantity * item.price);
  }, 0);
  return total;
}
