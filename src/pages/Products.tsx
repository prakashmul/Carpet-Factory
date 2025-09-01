import ProductSidebar from "../components/layout/ProductSidebar";
import ProductGrid from "../components/layout/ProductGrid";

export default function Products() {
  return (
    <div className="flex min-h-screen p-6 gap-6">
      {/* Left Sidebar */}
      <div className="w-1/4 border-r pr-4">
        <ProductSidebar />
      </div>

      {/* Right Product Grid */}
      <div className="w-3/4">
        <ProductGrid />
      </div>
    </div>
  );
}
