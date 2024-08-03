import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductDetail from '../components/pages/ProductDetailPage';

describe('ProductDetailPage component', () => {
  it('renders correct heading', () => {
    render(<ProductDetail />);
    expect(screen.getByRole('heading').textContent).toMatch(
      /ProductDetail page/i
    );
  });
});
