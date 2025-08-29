import React from "react";
import { FaGem, FaLightbulb, FaLeaf } from "react-icons/fa";

const Values: React.FC = () => {
  const values = [
    {
      title: "Craftsmanship",
      desc: "Every carpet is handmade with meticulous attention to detail and traditional weaving techniques.",
      icon: <FaGem size={28} className="text-indigo-600" />,
    },
    {
      title: "Innovation",
      desc: "Blending traditional artistry with modern designs and techniques to create unique carpets.",
      icon: <FaLightbulb size={28} className="text-indigo-600" />,
    },
    {
      title: "Sustainability",
      desc: "Using eco-friendly materials and processes to ensure sustainable and responsible production.",
      icon: <FaLeaf size={28} className="text-indigo-600" />,
    },
  ];

  return (
    <section id="values" className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Our Values
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value) => (
            <div
              key={value.title}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{value.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Values;
