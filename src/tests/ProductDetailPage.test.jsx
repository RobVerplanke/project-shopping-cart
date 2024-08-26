import { vi, describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import * as DataContext from '../context/DataContext';
import ProductDetail from '../components/pages/ProductDetailPage';

// Partially mock react-router-dom
vi.mock('react-router-dom', async (importOriginal) => {
  const actual = await importOriginal();
  return {
    ...actual,
    useParams: () => ({ id: '1' }), // Only mock useParams
  };
});

describe('ProductDetail Component', () => {
  it('renders the correct product information based on the id', () => {
    const mockItems = [
      {
        id: 1,
        title: 'Product 1',
        category: 'Category 1',
        description: 'Description 1',
        price: 10,
        image: 'image1.jpg',
      },
      {
        id: 2,
        title: 'Product 2',
        category: 'Category 2',
        description: 'Description 2',
        price: 20,
        image: 'image2.jpg',
      },
    ];

    vi.spyOn(DataContext, 'useData').mockReturnValue({
      items: mockItems,
      itemQuantityCounter: 1,
      setItemQuantityCounter: vi.fn(),
      setCartItems: vi.fn(),
      isLoading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <ProductDetail />
      </MemoryRouter>
    );

    // Check if the correct product information is displayed
    expect(screen.getByText('Product 1')).toBeInTheDocument();
    expect(screen.getByText('Category 1')).toBeInTheDocument();
    expect(screen.getByText('Description 1')).toBeInTheDocument();
    expect(screen.getByText('10.00')).toBeInTheDocument();
  });
});
