import { Link } from 'react-router-dom';
import TrendingItems from '../TrendingItems.jsx';
import TopNewItems from '../TopNewItems.jsx';
import '../../styles/pages/HomePage.css';

function Home() {
  return (
    <main aria-label="Home page">
      <div className="home-content-container">
        {/* Introduction text */}
        <div className="home-content-container__home-text">
          <h1>Your new favorite place to shop!</h1>
          <h3>
            We’re here to spoil you with the best picks and exclusive offers.
            Unwrap happiness today.
          </h3>
        </div>

        {/* Call-to-action button */}
        <Link
          id="home-content-container__shop-now-button"
          to="/shop"
          tabIndex="-1"
        >
          SHOP NOW
        </Link>

        {/* Overview of most trending items of the moment */}
        <div className="home-content-container__trending-items-holder">
          <TrendingItems />
        </div>

        {/* Overview of newest items */}
        <div className="home-content-container__top-items-holder">
          <TopNewItems />
        </div>
      </div>
    </main>
  );
}

export default Home;
