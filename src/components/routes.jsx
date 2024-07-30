import App from '../App';
import Home from './pages/HomePage';
import Shop from './pages/ShopPage';
import Cart from './pages/CartPage';
import ProductDetail from './pages/ProductDetailPage';
import Errorpage from './pages/ErrorPage';

const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <Errorpage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'shop',
        element: <Shop />,
      },
      {
        path: 'shop/product/:id',
        element: <ProductDetail />,
      },
    ],
  },
];

export default routes;
