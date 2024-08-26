import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '../components/Footer';
import { MemoryRouter } from 'react-router-dom';

describe('Footer Component', () => {
  it('renders the footer with the links', () => {
    // Collection of all links in the Footer component
    const linkList = [
      'About us',
      'Customer Service',
      'Legal',
      'Our Story',
      'Meet the Team',
      'Careers',
      'Contact Us',
      'FAQ',
      'Returns & Replacements',
      'Shipping Information',
      'Support',
      'Terms of Service',
      'Privacy Policy',
      'Cookie Policy',
      'Sitemap',
    ];

    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );

    // // The column headings and links are rendered
    linkList.forEach((link) => {
      expect(screen.getByText(new RegExp(link, 'i'))).toBeInTheDocument();
    });

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
