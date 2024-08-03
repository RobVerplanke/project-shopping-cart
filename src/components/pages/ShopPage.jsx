import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import ProductCard from '../ProductCard';
import '../../styles/ShopPage.css';

function Shop() {
  const { items, isLoading, error } = useData();

  // While data is feteched, show loading message or show a error message if fetching failed
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <>
      <h2>Shop page</h2>
      <div className="card-holder">
        <ul>
          {/* Itererate through all available products and render each of them on a productcard */}
          {items.map((item) => (
            <li key={item.id}>
              <Link to={`product/${item.id}`}>{ProductCard(item)}</Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Shop;
