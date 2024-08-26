import { vi, describe, it, expect } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter, useRoutes } from 'react-router-dom';
import routes from '../components/routes';
import * as DataContext from '../context/DataContext';
import { mockedItems } from './__mocks__/mockCartItems.js';

vi.mock('../components/context/DataContext.jsx');

function AppWithRoutes() {
  return useRoutes(routes);
}

describe('HomePage component', () => {
  it('renders correct heading', () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );
    expect(
      screen.getByText('Your new favorite place to shop!')
    ).toBeInTheDocument();
  });

  it('Renders Trending items section', async () => {
    // Mock products to load them on the homepage
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      items: mockedItems,
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // Trending section is rendered
    await waitFor(() =>
      expect(screen.getByText('Trending')).toBeInTheDocument()
    );
  });

  it('Renders New items section', async () => {
    // Mock products to load them on the homepage
    vi.spyOn(DataContext, 'useData').mockReturnValue({
      items: mockedItems,
    });

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // New items section is rendered
    await waitFor(() =>
      expect(screen.getByText('Top new items')).toBeInTheDocument()
    );
  });
});
