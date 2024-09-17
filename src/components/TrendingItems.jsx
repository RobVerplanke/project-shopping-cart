import ShopItemCard from './ShopItemCard.jsx';
import { useData } from '../context/DataContext';

import '../styles/TrendingItems.css';

function TrendingItems() {
  const { items } = useData();

  // Since there is no trending property on the object, just select items 0 to 4
  const selectedItems = items.slice(0, 4);

  return (
    <>
      <div className="trending-items-title">
        <h2>Trending</h2>
      </div>
      <div className="trending-items">
        {selectedItems.map((item) => (
          <ShopItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default TrendingItems;
