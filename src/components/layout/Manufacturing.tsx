import React from "react";

const Manufacturing: React.FC = () => {
  return (
    <section id="manufacturing" className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Manufacturing & Quality</h2>
      <p className="text-gray-700 mb-4">
        Our factory is equipped with state-of-the-art machinery and follows strict
        quality control measures to ensure every component meets international standards.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>ISO-certified quality management systems</li>
        <li>Advanced production lines with automation</li>
        <li>Rigorous testing for durability and safety</li>
      </ul>
    </section>
  );
};

export default Manufacturing;
