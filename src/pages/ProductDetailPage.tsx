import { useParams, Link } from "react-router-dom";
import { products } from "../data/products";
import ProductDetail from "../components/layout/ProductDetail";

export default function ProductDetailPage() {
  const { subtype } = useParams();
  const product = products.find(
    (p) => p.subType.toLowerCase().replace(/\s+/g, "-") === subtype
  );

  if (!product) {
    return <p className="p-6">Product not found.</p>;
  }

  return (
    <div className="p-6">
      <Link
        to="/product"
        className="inline-block mb-4 px-4 py-2 bg-gray-200 rounded hover:bg-gray-300"
      >
        ← Back to Products
      </Link>
      <ProductDetail product={product} />
    </div>
  );
}
