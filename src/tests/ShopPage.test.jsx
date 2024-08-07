import { vi, describe, it, expect, afterEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Shop from '../components/pages/ShopPage';
// import { useData } from '../context/DataContext';
import * as DataContext from '../context/DataContext';

// Mock context
vi.mock('../components/context/DataContext.jsx');

describe('ShopPage component', () => {
  // Reset mocks after each test
  afterEach(() => vi.clearAllMocks());

  it('Shows loading message while fetching data', () => {
    // Mock useData return value
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      items: [],
      isLoading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('Shows error message when fetching failed', () => {
    // Mock useData return value
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      items: [],
      isLoading: false,
      error: { message: 'Failed to fetch' },
    });

    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    expect(screen.getByText('Error: Failed to fetch')).toBeInTheDocument();
  });

  it('Displays items after succesful fetch', () => {
    // Mock useData return value
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      items: [
        {
          id: 1,
          title: 'product 1',
        },
        {
          id: 2,
          title: 'product 2',
        },
      ],
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <Shop />
      </MemoryRouter>
    );

    // Shop page renderd succesfully
    expect(screen.getByText('Shop page')).toBeInTheDocument();
    expect(screen.getByText('product 1')).toBeInTheDocument();
    expect(screen.getByText('product 2')).toBeInTheDocument();
  });
});
