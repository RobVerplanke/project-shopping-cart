import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Navbar from '../components/Navbar';

describe('App component', () => {
  it('renders correct heading', () => {
    render(<Navbar />);
    expect(screen.getByRole('heading').textContent).toMatch(/Navigation bar/i);
  });
});
