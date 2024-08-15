import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';
import '../styles/NavBar.css';

function Navbar() {
  const { cartQuantityCounter } = useData();
  return (
    <nav>
      <ul className="navbar-items">
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
      </ul>
      <ul className="navbar-cart">
        <li>
          <Link to="cart">Cart</Link>
        </li>
        <li>{cartQuantityCounter}</li>
      </ul>
    </nav>
  );
}

export default Navbar;
