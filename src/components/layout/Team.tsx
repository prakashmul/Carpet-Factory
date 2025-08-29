import React from "react";

const Team: React.FC = () => {
  return (
    <section id="team" className="text-center">
      <h2 className="text-2xl font-semibold mb-10">Meet Our Team</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {/* Team Member */}
        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/1.jpg"
            alt="Jane Doe"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-gray-200"
          />
          <h3 className="font-bold text-lg">Biplav Thapa</h3>
          <p className="text-gray-700">CEO & Founder</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/2.jpg"
            alt="John Smith"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-gray-200"
          />
          <h3 className="font-bold text-lg">Safal Thapa</h3>
          <p className="text-gray-700">Head of Production</p>
        </div>

        <div className="flex flex-col items-center">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            alt="Emily Brown"
            className="w-32 h-32 rounded-full mb-4 object-cover border-4 border-gray-200"
          />
          <h3 className="font-bold text-lg">Prakash Mul</h3>
          <p className="text-gray-700">Lead Engineer</p>
        </div>
      </div>
    </section>
  );
};

export default Team;
