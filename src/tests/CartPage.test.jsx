import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Cart from '../components/pages/CartPage';
import { MemoryRouter } from 'react-router-dom';
import * as DataContext from '../context/DataContext';
import CartItemCard from '../components/CartItemCard.jsx';

// Mock the data
vi.mock('../components/context/DataContext.jsx');

// Mock the cartpage card component
vi.mock('../components/CartItemCard.jsx', () => {
  return {
    default: vi.fn(() => <div>Mocked CartItemCard</div>),
  };
});

describe('CartPage component', () => {
  afterEach(() => vi.clearAllMocks());

  // Shows message if cart is empty
  it(`Doesn't render a empty table when cart is empty`, () => {
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      cartItems: [],
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    // renders message
    expect(
      screen.getByText(/No items in your shopping cart/i)
    ).toBeInTheDocument();
  });

  // Items in the cart are rendered
  it('renders card in cart', async () => {
    // Mock useData return value
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      setCartItems: vi.fn(),
      cartItems: [
        {
          id: 1,
          image: '',
          title: 'Product 1',
          category: 'Category 1',
          description: 'Description 1',
          price: 25,
          quantity: 2,
        },
      ],
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Cart />
      </MemoryRouter>
    );

    // Check if cartItemCard component is called with the correct props
    await waitFor(() => {
      expect(CartItemCard).toHaveBeenCalled();
      expect(CartItemCard).toHaveBeenCalledWith(
        {
          item: {
            id: 1,
            image: '',
            title: 'Product 1',
            category: 'Category 1',
            description: 'Description 1',
            price: 25,
            quantity: 2,
          },
        },
        {}
      );
    });
  });
});
