import { Link, Outlet } from 'react-router-dom';

function Shop() {
  return (
    <>
      <h1>Shop page</h1>
      <ul>
        <li>
          <Link to="product/1">Product 1</Link>
          <Outlet />
        </li>
      </ul>
    </>
  );
}

export default Shop;
