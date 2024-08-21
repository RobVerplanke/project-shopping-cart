import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import createProductCard from '../ProductCard';
import '../../styles/ShopPage.css';

function Shop() {
  const { items, isLoading, error } = useData();

  // Handle situations where the data is not available (yet)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <main aria-label="Shop page">
      <h2>Our products...</h2>
      <div className="card-holder">
        {/* Itererate through all available products and render each of them on a productcard */}
        {items.map((item) => (
          <Link
            key={item.id}
            to={`product/${item.id}`}
            aria-label={`View details for ${item.title}`}
          >
            {createProductCard(item)}
          </Link>
        ))}
      </div>
    </main>
  );
}

export default Shop;
