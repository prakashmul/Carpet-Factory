import { type Product } from "../../data/products";

type Props = {
  product: Product;
};

export default function ProductDetail({ product }: Props) {
  return (
    <div className="p-6">
      <div className="grid grid-cols-2 gap-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover rounded"
        />
        <div>
          <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
          <p className="text-gray-600 mb-2">
            {product.mainType} → {product.subType}
          </p>
          <p className="mb-4">{product.description}</p>
        </div>
      </div>
    </div>
  );
}
