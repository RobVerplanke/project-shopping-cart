import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <div className="page-container">
      <Header />
      <DataProvider>
        <Navbar />
        <Outlet />
      </DataProvider>
      <Footer />
    </div>
  );
}

export default App;
