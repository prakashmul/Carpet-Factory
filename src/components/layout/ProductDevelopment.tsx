import React from "react";
import { FaDraftingCompass, FaPalette, FaHandshake } from "react-icons/fa";

const ProductDevelopment: React.FC = () => {
  const services = [
    {
      icon: <FaDraftingCompass size={28} className="text-indigo-600" />,
      title: "Custom Carpet Design",
      desc: "We create bespoke carpet designs tailored to your space, style, and requirements.",
    },
    {
      icon: <FaPalette size={28} className="text-indigo-600" />,
      title: "Material Selection & Weaving",
      desc: "Choosing the finest yarns and using traditional weaving techniques to ensure durability and beauty.",
    },
    {
      icon: <FaHandshake size={28} className="text-indigo-600" />,
      title: "Collaboration & Consultation",
      desc: "Working closely with clients to meet specifications, including size, patterns, and color schemes.",
    },
  ];

  return (
    <section id="product-development" className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Our Handmade Carpet Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-white p-8 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
              <p className="text-gray-700 leading-relaxed">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductDevelopment;
