import ShopItemCard from './ShopItemCard.jsx';
import { useData } from '../context/DataContext';
import { MAX_TRENDING_ITEMS } from '../lib/constants.js';

import '../styles/TrendingItems.css';

function TrendingItems() {
  const { items } = useData();

  // Since there is no trending property on the object, just select an amount from the list
  const selectedItems = items.slice(0, MAX_TRENDING_ITEMS);

  return (
    <>
      <div className="trending-items-title">
        <h2>Trending</h2>
      </div>
      <div className="trending-items" aria-label="Top new items">
        {selectedItems.map((item) => (
          <ShopItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default TrendingItems;
