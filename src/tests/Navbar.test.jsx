import { vi, describe, it, expect, afterEach, beforeEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, useRoutes, Routes, Route } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import routes from '../components/routes';
import { mockedItems } from './__mocks__/mockCartItems.js';
import * as DataContext from '../context/DataContext';
import ErrorPage from '../components/pages/ErrorPage';
import Navbar from '../components/Navbar';
import Home from '../components/pages/HomePage';
import ProductDetail from '../components/pages/ProductDetailPage';
import Cart from '../components/pages/CartPage';
import Shop from '../components/pages/ShopPage';
import App from '../App';

vi.mock('../components/context/DataContext.jsx');

function AppWithRoutes() {
  return useRoutes(routes);
}

describe('Navbar component', () => {
  // Mock data before each test
  beforeEach(() => {
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      cartQuantityCounter: 0,
      items: [],
      isLoading: false,
      error: null,
    });
  });

  afterEach(() => {
    vi.restoreAllMocks();
  });

  it('renders navigation links correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Snapshot test
    expect(asFragment()).toMatchSnapshot();

    // The links to Home, Shop, and Cart are rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByLabelText('Go to Shopping Cart')).toBeInTheDocument();
  });

  it('Home component renders initially', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // Home page title is rendered
    expect(
      screen.getByText(/Your new favorite place to shop!/i)
    ).toBeInTheDocument();
  });

  it('Loads Shop component after click on the Shop button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // Simulate a click on the Shop button
    await user.click(screen.getByLabelText('Go to Shop Page'));

    // Shop page title is rendered after loading items
    await waitFor(() =>
      expect(
        screen.getByText('Discover our latest selections...')
      ).toBeInTheDocument()
    );
  });

  it('Loads Cart component after click on the Cart button', async () => {
    const user = userEvent.setup();

    // Mock products to render homepage and mock products in cart to render cartpage
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      items: mockedItems,
      cartItems: mockedItems,
      setCartItems: vi.fn(),
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // Simulate a click on the Cart button
    await user.click(screen.getByLabelText('Go to Shopping Cart'));

    // Cart page is rendered
    await waitFor(() =>
      expect(screen.getByText('Products in your cart')).toBeInTheDocument()
    );
  });

  // Copy routing paths from routes.jsx
  it('Loads error page on invalid route', async () => {
    render(
      <MemoryRouter initialEntries={['/invalid-path']}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="cart" element={<Cart />} />
            <Route path="shop" element={<Shop />} />
            <Route path="shop/product/:id" element={<ProductDetail />} />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
      </MemoryRouter>
    );

    // Renders error page when url path is invalid
    await waitFor(() => {
      expect(screen.getByText('Error page')).toBeInTheDocument();
    });
  });
});
