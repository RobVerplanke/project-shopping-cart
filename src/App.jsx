import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import Navbar from './components/Navbar';
import { DataProvider } from './context/DataContext';

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <DataProvider>
        <Outlet />
      </DataProvider>
    </>
  );
}

export default App;
