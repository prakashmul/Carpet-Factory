import React from "react";

const ServiceOverview: React.FC = () => {
  return (
    <section
      id="service-overview"
      className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          Our Services
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          We specialize in creating exquisite handmade carpets, crafted with
          precision and care. From custom designs to bulk production and restoration
          services, our team ensures beauty, quality, and durability in every carpet.
        </p>
      </div>
    </section>
  );
};

export default ServiceOverview;
