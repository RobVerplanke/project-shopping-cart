import ShopItemCard from './ShopItemCard.jsx';
import { useData } from '../context/DataContext.jsx';

import '../styles/TopNewItems.css';

function TopNewItems() {
  const { items } = useData();

  // Since there is no added-date property on the object, just select items 4 to 8
  const selectedItems = items.slice(4, 8);

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
