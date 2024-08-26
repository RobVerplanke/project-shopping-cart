import { Link } from 'react-router-dom';
import { useData } from '../../context/DataContext';
import createProductCard from '../ProductCard';
import { MAX_TRENDING_ITEMS, MAX_NEW_ITEMS } from '../../lib/constants.js';
import '../../styles/HomePage.css';

function Home() {
  const { items } = useData();

  // Helper function to generate product cards
  function generateItemCards(startIndex, itemCount) {
    const selectedItems = items.slice(startIndex, startIndex + itemCount);

    // Make the card link to the Product page
    return selectedItems.map((item) => (
      <Link
        key={item.id}
        to={`../shop/product/${item.id}`}
        aria-label={`View details for ${item.title}`}
      >
        {createProductCard(item)}
      </Link>
    ));
  }

  return (
    <main aria-label="Home page">
      <div className="content-container">
        <div className="home-text">
          <h1>Your new favorite place to shop!</h1>
          <h3>
            We’re here to spoil you with the best picks and exclusive offers.
            Unwrap happiness today.
          </h3>
        </div>

        <Link to="/shop">
          <button className="shop-now-button">Shop now</button>
        </Link>

        <div className="trending-items-holder">
          <div className="trending-items-title">
            <h2>Trending</h2>
          </div>
          <div className="trending-items">
            {generateItemCards(0, MAX_TRENDING_ITEMS)}
          </div>
        </div>

        <div className="new-items-holder">
          <div className="new-items-title">
            <h2>Top new items</h2>
          </div>
          <div className="new-items">{generateItemCards(5, MAX_NEW_ITEMS)}</div>
        </div>
      </div>
    </main>
  );
}

export default Home;
