import React from "react";

const QualityAssurance: React.FC = () => {
  return (
    <section id="quality-assurance" className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Quality Assurance</h2>
      <p className="text-gray-700 mb-2">
        Every product undergoes strict quality checks to ensure reliability, durability, and safety.
      </p>
      <ul className="list-disc list-inside text-gray-700">
        <li>ISO-certified quality control</li>
        <li>Automated and manual inspections</li>
        <li>Continuous process improvement</li>
      </ul>
    </section>
  );
};

export default QualityAssurance;
