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

  // Select the corresponding product
  const activeItem = items.find((item) => parseInt(item.id) == id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  function handleOnChange(e) {
    setItemQuantityCounter(parseInt(e.target.value));
  }

  function handleAddQuantity() {
    setItemQuantityCounter(itemQuantityCounter + 1);
  }

  function handleSubstractQuantity() {
    if (itemQuantityCounter >= 1)
      setItemQuantityCounter(itemQuantityCounter - 1);
  }

  function HandleSubmit() {
    setCartItems((prevCart) => {
      const foundItem = prevCart.find((item) => item.id === activeItem.id);

      if (foundItem) {
        return prevCart.map((item) => {
          return item.id === activeItem.id
            ? { ...item, quantity: item.quantity + itemQuantityCounter }
            : item;
        });
      } else {
        return [...prevCart, { ...activeItem, quantity: itemQuantityCounter }];
      }
    });

    // Reset amount of items to one
    setItemQuantityCounter(1);
  }

  return (
    <main>
      <h1>Product information</h1>
      <div className="details-container">
        <div className="product-image">
          <img src={activeItem.image} alt="Product image" />
        </div>
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
          <div className="product-add">
            <button type="button" onClick={handleSubstractQuantity}>
              -
            </button>
            <input
              onChange={handleOnChange}
              type="text"
              name="item-quantity"
              value={itemQuantityCounter}
            />
            <button type="button" onClick={handleAddQuantity}>
              +
            </button>
            <button id="add-button" onClick={HandleSubmit}>
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
