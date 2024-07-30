import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Shop from '../components/pages/ShopPage';

describe('ShopPage component', () => {
  it('renders correct heading', () => {
    render(<Shop />);
    expect(screen.getByRole('heading').textContent).toMatch(/Shop page/i);
  });
});
