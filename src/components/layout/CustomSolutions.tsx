import React from "react";
import { FaCogs } from "react-icons/fa";

const CustomSolutions: React.FC = () => {
  return (
    <section
      id="custom-solutions"
      className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-indigo-600 mb-6">
            <FaCogs size={36} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Custom Solutions
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            We provide tailor-made carpet solutions to meet the unique requirements
            of your projects. From small batches to large-scale orders, we adapt our
            processes to deliver quality, beauty, and craftsmanship every time.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CustomSolutions;
