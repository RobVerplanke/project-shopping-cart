import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import Cart from '../components/pages/CartPage';
import { MemoryRouter } from 'react-router-dom';
import * as DataContext from '../context/DataContext';

vi.mock('../components/context/DataContext.jsx');

describe('CartPage component', () => {
  afterEach(() => vi.clearAllMocks());

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

    expect(
      screen.getByText(/No items in your schopping cart/i)
    ).toBeInTheDocument();
  });

  it('renders items in cart', async () => {
    // Mock useData return value
    vi.spyOn(DataContext, 'useData').mockReturnValue({
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

    await waitFor(() => {
      expect(screen.getByText(/Product 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Description 1/i)).toBeInTheDocument();
      expect(screen.getByText(/Amount: 2/i)).toBeInTheDocument();
    });
  });
});
