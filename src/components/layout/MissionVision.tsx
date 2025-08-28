import React from "react";

const MissionVision: React.FC = () => {
  return (
    <section id="mission-vision" className="text-center">
      <h2 className="text-2xl font-semibold mb-6">Mission & Vision</h2>
      <div className="grid md:grid-cols-2 gap-8">
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-bold mb-2">Our Mission</h3>
          <p className="text-gray-700">
            To deliver high-quality car parts that meet and exceed customer expectations,
            ensuring safety, reliability, and performance.
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm">
          <h3 className="font-bold mb-2">Our Vision</h3>
          <p className="text-gray-700">
            To become a global leader in automotive components while embracing innovation
            and sustainability.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
