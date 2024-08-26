import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Header from '../components/Header';
import { MemoryRouter } from 'react-router-dom';

describe('Header Component', () => {
  it('renders the header with the logo and link', () => {
    render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>
    );

    // Header is rendered
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // Logo image is rendered
    expect(screen.getByAltText('App logo')).toBeInTheDocument();

    // The logo links to the Home page
    expect(screen.getByRole('link')).toHaveAttribute('href', '/home');
  });
});
