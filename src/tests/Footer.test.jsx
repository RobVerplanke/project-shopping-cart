import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer Component', () => {
  it('renders the footer with the links', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // The column headings are rendered
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    expect(screen.getByText(/Customer Service/i)).toBeInTheDocument();
    expect(screen.getByText(/Legal/i)).toBeInTheDocument();

    // The links are rendered
    expect(screen.getByText(/Our Story/i)).toBeInTheDocument();
    expect(screen.getByText(/Meet the Team/i)).toBeInTheDocument();
    expect(screen.getByText(/Careers/i)).toBeInTheDocument();
    expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();

    expect(screen.getByText(/FAQ/i)).toBeInTheDocument();
    expect(screen.getByText(/Returns & Replacements/i)).toBeInTheDocument();
    expect(screen.getByText(/Shipping Information/i)).toBeInTheDocument();
    expect(screen.getByText(/Support/i)).toBeInTheDocument();

    expect(screen.getByText(/Terms of Service/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Cookie Policy/i)).toBeInTheDocument();
    expect(screen.getByText(/Sitemap/i)).toBeInTheDocument();

    // Github link is rendered correctly
    const githubIcon = screen.getByTestId('github-icon');
    expect(githubIcon).toBeInTheDocument();

    // Links to social media rendered correctly
    const facebookLink = screen.getByTestId('facebook-link');
    expect(facebookLink).toHaveAttribute('href', '/');

    const instagramLink = screen.getByTestId('instagram-link');
    expect(instagramLink).toHaveAttribute('href', '/');

    const twitterLink = screen.getByTestId('x-link');
    expect(twitterLink).toHaveAttribute('href', '/');
  });
});
