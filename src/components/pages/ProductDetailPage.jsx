import { Link, useParams } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import '../../styles/ProductDetailPage.css';

function ProductDetail() {
  const { id } = useParams();
  const { items, isLoading, error } = useData();

  // Select the corresponding product
  const activeItem = items.find((item) => parseInt(item.id) == id);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

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
            <button type="button">-</button>
            <input type="text" />
            <button type="button">+</button>
            <button id="add-button">Add</button>
          </div>
        </div>
      </div>

      <Link to="/shop">Back to shop</Link>
    </main>
  );
}

export default ProductDetail;
