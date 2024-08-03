import '../styles/ProductCard.css';

function ProductCard(item) {
  const { title, price, category, image } = item;

  return (
    <div className="item-card">
      <div className="card-image">
        <img src={image}></img>
      </div>
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

export default ProductCard;
