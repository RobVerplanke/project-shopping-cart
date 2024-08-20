import '../styles/Header.css';
import logo from '../assets/header-logo.jpg';

function Header() {
  return (
    <header>
      <div className="header-logo-container">
        <img src={logo} alt="App logo" />
      </div>
    </header>
  );
}

export default Header;
