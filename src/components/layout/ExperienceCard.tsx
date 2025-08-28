import React from "react";

interface ExperienceCardProps {
  icon: React.ReactNode;
  value: string;
  label: string;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ icon, value, label }) => {
  return (
    <div className="bg-beige p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition-transform hover:scale-105 hover:shadow-2xl">
      <div className="text-4xl mb-4">{icon}</div>
      <h2 className="text-3xl font-bold mb-2">{value}</h2>
      <p className="text-gray-700 uppercase tracking-wider">{label}</p>
    </div>
  );
};

export default ExperienceCard;