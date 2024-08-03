import '../styles/ProductCard.css';

function ProductCard(item) {
  const { title, price, category, description, image } = item;

  return (
    <div className="item-card">
      <div className="card-image">
        <img src={image}></img>
      </div>
      <h3>{title}</h3>
      <p>{category}</p>
      <p>{description}</p>
      <p>{price}</p>
    </div>
  );
}

export default ProductCard;
