/* eslint-disable react-hooks/exhaustive-deps */
import { Link, useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import { useState, useRef } from 'react';
import QuantityController from '../QuantityController.jsx';
import CheckIcon from '@mui/icons-material/Check';
import { setConfirmMessageVisible } from '../../utils/helperFunctions.js';

import '../../styles/pages/ProductDetailPage.css';

function ProductDetail() {
  const { id } = useParams();
  const { items, setCartItems, isLoading, error } = useData();

  // Control the quantity input value
  const [itemQuantityCounter, setItemQuantityCounter] = useState(1);

  // Select the confirm icon so it can be manipulated (visibility) when needed
  const confirmIcon = useRef(null);

  // Get all the data of the item that was selected in the shop
  const activeItem = items.find((item) => item.id === parseInt(id));

  // Handle situations where the data is not available (yet)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  // Add or update current item in the list with cart items
  function HandleSubmit() {
    setCartItems((prevCart) => {
      // Iterate through the cart items and select the current item
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

    // Show confirm icon after click on button
    setConfirmMessageVisible(confirmIcon);
  }

  return (
    <main aria-label="Product details">
      <h2>Product information</h2>
      <div className="details-content-container">
        {/* Product image */}
        <div className="details-content-container__product-image">
          <img src={activeItem.image} alt={activeItem.title} />
        </div>

        {/* Product title, category label, full description, price and quantity input*/}
        <div className="details-content-container__product-text">
          <div>
            <h3>{activeItem.title}</h3>
          </div>
          <div>
            <p>
              <i>{activeItem.category}</i>
            </p>
          </div>
          <div>
            <p>{activeItem.description}</p>
          </div>
          <div className="details-content-container__product-price">
            {'\u20AC'}&nbsp;
            <h4>{activeItem.price.toFixed(2)}</h4>
          </div>

          <div className="details-content-container__quantity-holder">
            <QuantityController
              item={activeItem}
              itemQuantityCounter={itemQuantityCounter}
              setItemQuantityCounter={setItemQuantityCounter}
            />

            {/* Add to cart button */}
            <button
              className="details-content-container__add-button"
              aria-label="Add to cart"
              onClick={HandleSubmit}
            >
              Add to cart
            </button>

            {/* Confirm icon */}
            <div
              ref={confirmIcon}
              className="details-content-container__add-button--confirmed"
            >
              <CheckIcon />
            </div>
          </div>
          <div className="details-content-container__keep-shopping-button">
            <Link to="/shop">Keep shopping</Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductDetail;
