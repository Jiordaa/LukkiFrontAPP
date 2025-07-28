import { Link } from "react-router";

export default function ProductsPage() {
  const products = [
    { id: 1, name: "Товар 1" },
    { id: 2, name: "Товар 2" },
  ];

  return (
    <div>
      <h2>Все товары</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}