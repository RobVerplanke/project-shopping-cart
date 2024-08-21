import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import '../styles/NavBar.css';

function Navbar() {
  const { cartQuantityCounter } = useData();
  return (
    <nav className="navbar" aria-label="Main navigation">
      <ul className="navbar-items">
        <li>
          <Link to="home" aria-label="Go to Home Page">
            Home
          </Link>
        </li>
        <li>
          <Link to="shop" aria-label="Go to Shop Page">
            Shop
          </Link>
        </li>
      </ul>
      <ul className="navbar-cart">
        <li>
          <Link to="cart" aria-label="Go to Shopping Cart">
            Cart
          </Link>
        </li>
        <span className="counter-holder">{cartQuantityCounter}</span>
      </ul>
    </nav>
  );
}

export default Navbar;
