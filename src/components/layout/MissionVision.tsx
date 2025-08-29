import React from "react";
import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision: React.FC = () => {
  return (
    <section id="mission-vision" className="py-16 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Mission & Vision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Mission Card */}
          <div className="relative p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-indigo-600 mb-4">
              <FaBullseye size={36} />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To craft high-quality handmade carpets that combine traditional artistry
              with durable materials, delivering beauty and reliability to every client.
            </p>
          </div>

          {/* Vision Card */}
          <div className="relative p-8 bg-white rounded-2xl shadow-xl border border-gray-200 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
            <div className="text-indigo-600 mb-4">
              <FaEye size={36} />
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-gray-900">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To become a globally recognized handmade carpet brand, celebrated
              for craftsmanship, innovation, and sustainable production practices.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
