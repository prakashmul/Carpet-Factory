import React from "react";

const CompanyOverview: React.FC = () => {
  return (
    <section
      id="overview"
      className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center"
    >
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-8">
          About Our Company
        </h2>
        <p className="text-gray-700 text-lg md:text-xl leading-relaxed">
          We are a leading carpet manufacturer dedicated to delivering high-quality
          handmade carpets. Founded in 2000, our mission is to provide reliable,
          durable, and innovative products to clients worldwide.
        </p>
      </div>
    </section>
  );
};

export default CompanyOverview;
