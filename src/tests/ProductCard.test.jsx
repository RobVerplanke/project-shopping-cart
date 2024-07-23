import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<ProductCard />);
    expect(screen.getByRole('heading').textContent).toMatch(/Product card/i);
  });
});
