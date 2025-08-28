import React from "react";

const ProductDevelopment: React.FC = () => {
  return (
    <section id="product-development" className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Product Development</h2>
      <p className="text-gray-700 mb-2">
        We design and develop high-quality automotive components using advanced engineering techniques.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>Prototype design and testing</li>
        <li>Material selection and engineering analysis</li>
        <li>Collaboration with OEMs for custom specifications</li>
      </ul>
    </section>
  );
};

export default ProductDevelopment;
