import '../styles/ProductCard.css';

function createProductCard(item) {
  // const { title, price, category, image } = item;
  const { title, price, category, image } = item;

  return (
    <div className="item-card">
      <div className="card-image-holder">
        {/* Product image */}
        <img src={image} alt="Product image" />
      </div>

      {/* Product title, category and price information */}
      <div className="card-text">
        <h4>{title}</h4>
        <p>
          <i>{category}</i>
        </p>
      </div>
      <div className="card-price">
        <p>
          {'\u20AC'} {price.toFixed(2)}
        </p>
      </div>
    </div>
  );
}

export default createProductCard;
