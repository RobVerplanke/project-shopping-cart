import { Link } from 'react-router-dom';
import logo from '../assets/header-logo.png';
import '../styles/pages/Header.css';

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
