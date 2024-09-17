function getQuantityCount(cartItems) {
  return cartItems.value.reduce((acc, item) => (acc += item.quantity), 0);
}

export default getQuantityCount;
