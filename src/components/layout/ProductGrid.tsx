import { products } from "../../data/products";
import { Link } from "react-router-dom";

export default function ProductGrid() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <div className="grid grid-cols-2 gap-6">
        {products.map((p) => (
          <Link
            key={p.id}
            to={`/products/${p.subType.toLowerCase().replace(/\s+/g, "-")}`}
            className="border rounded-lg shadow hover:shadow-lg p-3"
          >
            <img
              src={p.image}
              alt={p.name}
              className="w-full h-48 object-cover rounded"
            />
            <p className="mt-2 text-sm">{p.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
