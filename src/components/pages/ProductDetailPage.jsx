import { Link, useParams } from 'react-router-dom';

function ProductDetail() {
  const { id } = useParams();

  return (
    <article>
      <h1>ProductDetail page</h1>
      <h2>Product {id}</h2>
      <Link to="/shop">Back to shop</Link>
    </article>
  );
}

export default ProductDetail;
