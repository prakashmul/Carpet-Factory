import { useState } from "react";
import { categories } from "../../data/products";
import { Link } from "react-router-dom";

export default function ProductSidebar() {
  const [openMain, setOpenMain] = useState<string | null>(null);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Product Categories</h2>
      <ul className="space-y-2">
        {categories.map((cat) => (
          <li key={cat.mainType}>
            <div
              className="cursor-pointer font-medium hover:text-blue-600"
              onClick={() =>
                setOpenMain(openMain === cat.mainType ? null : cat.mainType)
              }
            >
              {cat.mainType}
            </div>
            {openMain === cat.mainType && (
              <ul className="ml-4 mt-1 space-y-1 text-sm">
                {cat.subTypes.map((sub) => (
                  <li key={sub}>
                    <Link
                      to={`/products/${sub.toLowerCase().replace(/\s+/g, "-")}`}
                      className="hover:text-blue-500"
                    >
                      {sub}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
