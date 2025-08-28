import React from "react";

const Team: React.FC = () => {
  return (
    <section id="team" className="text-center">
      <h2 className="text-2xl font-semibold mb-6">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="font-bold">Jane Doe</h3>
          <p className="text-gray-700">CEO & Founder</p>
        </div>
        <div>
          <h3 className="font-bold">John Smith</h3>
          <p className="text-gray-700">Head of Production</p>
        </div>
        <div>
          <h3 className="font-bold">Emily Brown</h3>
          <p className="text-gray-700">Lead Engineer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
