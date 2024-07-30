import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Product from '../components/pages/ProductPage';

describe('ProductPage component', () => {
  it('renders correct heading', () => {
    render(<Product />);
    expect(screen.getByRole('heading').textContent).toMatch(/Product page/i);
  });
});
