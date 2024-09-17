import { DataProvider } from './context/DataContext';
import { Outlet } from 'react-router-dom';
import Header from './components/Header.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

import './styles/App.css';

// Reander each component in its own wrapper so they can be placed in a grid easily
function App() {
  return (
    <DataProvider>
      <div className="page-container">
        <div className="page-container__header">
          <Header />
        </div>
        <div className="page-container__navbar">
          <Navbar />
        </div>
        <div className="page-container__main-content">
          <Outlet />
        </div>
        <div className="page-container__footer">
          <Footer />
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
