import ShopItemCard from './ShopItemCard.jsx';
import { useData } from '../context/DataContext.jsx';
import { MAX_NEW_ITEMS } from '../lib/constants.js';

import '../styles/TopNewItems.css';

function TopNewItems() {
  const { items } = useData();

  // Since there is no added-date property in the object, just select an amount from the list
  const selectedItems = items.slice(
    MAX_NEW_ITEMS,
    MAX_NEW_ITEMS + MAX_NEW_ITEMS
  );

  return (
    <>
      <div className="top-items-title">
        <h2>Top new items</h2>
      </div>
      <div className="top-items" aria-label="Top new items">
        {selectedItems.map((item) => (
          <ShopItemCard key={item.id} item={item} />
        ))}
      </div>
    </>
  );
}

export default TopNewItems;
