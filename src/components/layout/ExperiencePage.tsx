import React from "react";
import { Briefcase, Award, Box, Users } from "lucide-react";
import ExperienceCard from "./ExperienceCard";

const ExperiencePage: React.FC = () => {
  const stats = [
    { icon: <Briefcase />, value: "20+", label: "Experience" },
    { icon: <Award />, value: "10+", label: "Certificates" },
    { icon: <Box />, value: "1000+", label: "Products" },
    { icon: <Users />, value: "200+", label: "Workers" },
  ];

  return (
    <div className="mt-16 mb-16 md:w-[4/5] md:mx-auto flex items-center justify-center bg-gray">
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 md:gap-12 gap-6">
        {stats.map((stat, index) => (
          <ExperienceCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>
    </div>
  );
};

export default ExperiencePage;
