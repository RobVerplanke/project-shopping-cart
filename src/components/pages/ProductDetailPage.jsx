import { Link, useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import '../../styles/ProductDetailPage.css';

function ProductDetail() {
  const { id } = useParams();
  const {
    items,
    itemQuantityCounter,
    setItemQuantityCounter,
    setCartItems,
    isLoading,
    error,
  } = useData();

  // Handle situations where the data is not available (yet)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  // Get all data of the item that was selected in the shop
  const activeItem = items.find((item) => item.id === parseInt(id));

  // Synchronize value of the quantity input field with the latest value
  function handleOnChange(e) {
    setItemQuantityCounter(parseInt(e.target.value));
  }

  // Increase the value in the quantity input field by one
  function handleAddQuantity() {
    setItemQuantityCounter(itemQuantityCounter + 1);
  }

  // Decrease the value in the quantity input field by one
  function handleSubtractQuantity() {
    if (itemQuantityCounter >= 1)
      setItemQuantityCounter(itemQuantityCounter - 1);
  }

  // Add or update current item in list with cart items
  function HandleSubmit() {
    setCartItems((prevCart) => {
      // Iterate through cart items and select current item
      const foundItem = prevCart.find((item) => item.id === activeItem.id);

      // Item does exist in the cart list so the corresponding quantity counter has to be updated only
      if (foundItem) {
        return prevCart.map((item) => {
          return item.id === activeItem.id
            ? { ...item, quantity: item.quantity + itemQuantityCounter }
            : item; // The rest of the items are retured unchanged
        });
      } else {
        // If item doesn't exist in cart list, replace current list with a new list which includes
        // the new item and a up-to-date quantity property
        return [...prevCart, { ...activeItem, quantity: itemQuantityCounter }];
      }
    });

    // Reset the value in the quantity input field to one again
    setItemQuantityCounter(1);
  }

  return (
    <main aria-label="Product details">
      <h1>Product information</h1>
      <div className="details-container">
        {/* Product image */}
        <div className="product-image">
          <img src={activeItem.image} alt="Product image" />
        </div>

        {/* Product title, category label, full description, price and quantity input*/}
        <div className="product-text">
          <div>
            <h2>{activeItem.title}</h2>
          </div>
          <div>
            <p>
              <i>{activeItem.category}</i>
            </p>
          </div>
          <div>
            <p>{activeItem.description}</p>
          </div>
          <div className="product-price">
            {'\u20AC'}
            <h4>{activeItem.price}</h4>
          </div>

          {/* Subtract from quantity input */}
          <div className="product-add">
            <button
              type="button"
              aria-label="Subtract item"
              onClick={handleSubtractQuantity}
            >
              -
            </button>

            {/* Input quantity */}
            <input
              onChange={handleOnChange}
              type="text"
              name="item-quantity"
              value={itemQuantityCounter}
            />

            {/* Add to quantity input */}
            <button
              type="button"
              aria-label="Add item"
              onClick={handleAddQuantity}
            >
              +
            </button>

            {/* Add to cart button */}
            <button
              id="add-button"
              aria-label="Add to cart"
              onClick={HandleSubmit}
            >
              Add
            </button>
          </div>
        </div>
      </div>

      <Link to="/shop">Back to shop</Link>
    </main>
  );
}

export default ProductDetail;
