import { useData } from '../../context/DataContext';
import ShopItemCard from '../ShopItemCard.jsx';

import '../../styles/pages/ShopPage.css';

function Shop() {
  const { items, isLoading, error } = useData();

  // Handle situations where the data is not available (yet)
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message} </p>;

  return (
    <main aria-label="Shop page">
      <h2>Discover our latest selections...</h2>
      <div className="shop-content-holder">
        {/* Itererate through all available products and render each of them on a productcard */}
        {items.map((item) => (
          <ShopItemCard key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
}

export default Shop;
