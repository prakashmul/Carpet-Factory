import React from "react";
import CustomSolutions from "../components/layout/CustomSolutions";
import ProductDevelopment from "../components/layout/ProductDevelopment";
import QualityAssurance from "../components/layout/QualityAssurance";
import ServiceOverview from "../components/layout/ServiceOverview";
import Support from "../components/layout/Support";


const Services: React.FC = () => {
  return (
    <div className="space-y-16 px-6 py-12 max-w-7xl mx-auto">
      <ServiceOverview />
      <ProductDevelopment />
      <CustomSolutions />
      <QualityAssurance />
      <Support />
    </div>
  );
};

export default Services;
