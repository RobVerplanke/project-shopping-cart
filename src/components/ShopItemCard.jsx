/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';

import '../styles/ShopItemCard.css';

function ShopItemCard({ item }) {
  const { id, title, price, category, image } = item;

  return (
    <div className="shop-card-container">
      <div className="shop-card-container__card-image-holder">
        {/* Product image */}
        <img src={image} alt="Product image" />
      </div>

      {/* Product title, category and price information */}
      <div className="shop-card-container__card-category">
        <p>
          <i>{category}</i>
        </p>
      </div>
      <div className="shop-card-container__card-text">
        <h4>{title}</h4>
      </div>

      {/* View details button */}
      <Link
        aria-label={`View details for ${title}`}
        to={`../shop/product/${id}`}
        key={id}
      >
        <div className="shop-card-container__details-button">VIEW DETAILS</div>
      </Link>

      {/* Price */}
      <div className="shop-card-container__card-price">
        <p>
          {'\u20AC'} {price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default ShopItemCard;
