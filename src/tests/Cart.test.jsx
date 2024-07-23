import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Cart from '../components/Cart';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<Cart />);
    expect(screen.getByRole('heading').textContent).toMatch(/Cart page/i);
  });
});
