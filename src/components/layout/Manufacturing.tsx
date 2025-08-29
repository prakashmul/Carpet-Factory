import React from "react";
import { FaCheckCircle, FaCogs, FaShieldAlt } from "react-icons/fa";

const Manufacturing: React.FC = () => {
  return (
    <section id="manufacturing" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Manufacturing & Quality
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed mb-8">
          Our handmade carpet factory combines traditional craftsmanship with
          meticulous quality control to produce high-quality, durable, and
          beautiful carpets that meet international standards.
        </p>

        <ul className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <li className="flex items-start space-x-3">
            <FaCheckCircle className="text-indigo-600 mt-1 w-6 h-6" />
            <span>Handmade using traditional weaving techniques</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaCogs className="text-indigo-600 mt-1 w-6 h-6" />
            <span>State-of-the-art looms and dyeing facilities</span>
          </li>
          <li className="flex items-start space-x-3">
            <FaShieldAlt className="text-indigo-600 mt-1 w-6 h-6" />
            <span>Strict quality checks for durability, texture, and color</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Manufacturing;
