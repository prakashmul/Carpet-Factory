import React from "react";
import CompanyOverview from "../components/layout/CompanyOverview";
import Manufacturing from "../components/layout/Manufacturing";
import MissionVision from "../components/layout/MissionVision";
import Team from "../components/layout/Team";
import Values from "../components/layout/Values";
import History from "../components/layout/History";


const About: React.FC = () => {
  return (
    <div className="space-y-16 px-6 py-12 max-w-7xl mx-auto">
      <CompanyOverview />
      <History />
      <MissionVision />
      <Manufacturing />
      <Team />
      <Values />
    </div>
  );
};

export default About;