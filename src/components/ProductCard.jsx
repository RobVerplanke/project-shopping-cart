import '../styles/ProductCard.css';

function createProductCard(item) {
  // const { title, price, category, image } = item;
  const { title, price, category, image } = item;

  return (
    <div className="item-card">
      <div className="card-image">
        {/* Product image */}
        <img src={image} alt="Product image"></img>
      </div>

      {/* Product title, category and price information */}
      <div className="card-text">
        <h3>{title}</h3>
        <p>
          <i>{category}</i>
        </p>
      </div>
      <div className="card-price">
        <p>
          {'\u20AC'} {price}
        </p>
      </div>
    </div>
  );
}

export default createProductCard;
