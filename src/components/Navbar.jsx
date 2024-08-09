import { Link } from 'react-router-dom';
import { useData } from '../context/DataContext';

function Navbar() {
  const { cartQuantityCounter } = useData();
  return (
    <nav>
      <ul>
        <li>
          <Link to="home">Home</Link>
        </li>
        <li>
          <Link to="shop">Shop</Link>
        </li>
        <li>
          <Link to="cart">Cart: {cartQuantityCounter}</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
