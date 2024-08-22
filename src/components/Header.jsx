import { Link } from 'react-router-dom';
import '../styles/Header.css';
import logo from '../assets/header-logo.jpg';

function Header() {
  return (
    <header>
      <div className="header-logo-container">
        <Link to="/home">
          <img src={logo} alt="App logo" />
        </Link>
      </div>
    </header>
  );
}

export default Header;
