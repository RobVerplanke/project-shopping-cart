import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from '../components/pages/HomePage';

describe('HomePage component', () => {
  it('renders correct heading', () => {
    render(<Home />);
    expect(screen.getByRole('heading').textContent).toMatch(/Home page/i);
  });
});
