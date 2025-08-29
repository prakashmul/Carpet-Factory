import React from "react";
import { FaHeadset } from "react-icons/fa";

const Support: React.FC = () => {
  return (
    <section
      id="support"
      className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <div className="bg-white p-10 rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
          <div className="text-indigo-600 mb-6">
            <FaHeadset size={36} />
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Customer Support
          </h2>
          <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
            Our dedicated support team is always ready to assist with inquiries,
            guidance on carpet selection, and after-sales care, ensuring your
            experience is seamless and satisfying.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Support;
