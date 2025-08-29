import React from "react";
import { FaCheckCircle, FaShieldAlt, FaTools } from "react-icons/fa";

const QualityAssurance: React.FC = () => {
  const checks = [
    {
      icon: <FaCheckCircle size={28} className="text-indigo-600" />,
      title: "Handmade Quality Checks",
      desc: "Each carpet is meticulously inspected to ensure the highest craftsmanship standards.",
    },
    {
      icon: <FaShieldAlt size={28} className="text-indigo-600" />,
      title: "Durability Testing",
      desc: "Rigorous testing of fibers, texture, and color to guarantee long-lasting beauty.",
    },
    {
      icon: <FaTools size={28} className="text-indigo-600" />,
      title: "Continuous Process Improvement",
      desc: "We constantly refine our techniques to maintain premium quality across all products.",
    },
  ];

  return (
    <section
      id="quality-assurance"
      className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center"
    >
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Quality Assurance
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {checks.map((check) => (
            <div
              key={check.title}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{check.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{check.title}</h3>
              <p className="text-gray-700 leading-relaxed">{check.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default QualityAssurance;
