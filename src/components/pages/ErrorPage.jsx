import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <main aria-label="Error page">
      <h2>Error page</h2>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </main>
  );
}

export default ErrorPage;
