import { Link } from 'react-router-dom';

function ErrorPage() {
  return (
    <>
      <h2>Error page</h2>
      <Link to="/">
        You can go back to the home page by clicking here, though!
      </Link>
    </>
  );
}

export default ErrorPage;
