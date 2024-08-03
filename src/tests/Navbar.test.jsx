import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, useRoutes } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Navbar from '../components/Navbar';
import routes from '../components/routes';

function AppWithRoutes() {
  return useRoutes(routes);
}

describe('Navbar component', () => {
  it('renders navigation links correctly', () => {
    const { asFragment } = render(
      <MemoryRouter>
        <Navbar />
      </MemoryRouter>
    );

    // Snapshot test
    expect(asFragment()).toMatchSnapshot();

    // The links to Home, Shop and Cart are rendered
    expect(screen.getByText(/Home/i)).toBeInTheDocument();
    expect(screen.getByText(/Shop/i)).toBeInTheDocument();
    expect(screen.getByText(/Cart/i)).toBeInTheDocument();
  });

  it('Home component renders initially', async () => {
    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // Home page is rendered
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();
  });

  it('Loads Shop component after click on the Shop button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // Home page is initially rendered
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();

    // Simulate a click on the Shop button
    await user.click(screen.getByText(/Shop/i));

    // Shop page is rendered
    expect(screen.getByText(/Shop page/i)).toBeInTheDocument();
  });

  it('Loads Cart component after click on the Cart button', async () => {
    const user = userEvent.setup();

    render(
      <MemoryRouter initialEntries={['/']}>
        <AppWithRoutes />
      </MemoryRouter>
    );

    // Home page is initially rendered
    expect(screen.getByText(/Home page/i)).toBeInTheDocument();

    // Simulate a click on the Cart button
    await user.click(screen.getByText(/Cart/i));

    // Cart page is rendered
    expect(screen.getByText(/Cart page/i)).toBeInTheDocument();
  });

  // it('Loads error page on invalid route', async () => {
  //   render(
  //     <MemoryRouter initialEntries={['/invalid-route']}>
  //       <AppWithRoutes />
  //     </MemoryRouter>
  //   );

  //   await waitFor(() =>
  //     expect(screen.getByText(/Error page/i)).toBeInTheDocument()
  //   );
  // });
});
