import { Link } from "react-router-dom";

const Product = () => {
  return (
    <section>
      <h1>The Product page</h1>
      <ul>
        <li>
          <Link to="/Product/p1">A book</Link>
        </li>
        <li>
          <Link to="/Product/p2">A Carpet</Link>
        </li>
        <li>
          <Link to="/Product/p3">A Glass</Link>
        </li>
      </ul>
    </section>
  );
};
export default Product;
