import React from "react";

const Values: React.FC = () => {
  return (
    <section id="values" className="bg-gray-50 p-8 rounded-lg text-center">
      <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-bold mb-2">Quality</h3>
          <p className="text-gray-700">Delivering top-notch products with precision and care.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-bold mb-2">Innovation</h3>
          <p className="text-gray-700">Constantly improving products and processes for better solutions.</p>
        </div>
        <div className="p-4 border rounded-lg shadow-sm">
          <h3 className="font-bold mb-2">Integrity</h3>
          <p className="text-gray-700">Transparent, honest, and reliable in all business dealings.</p>
        </div>
      </div>
    </section>
  );
};

export default Values;
