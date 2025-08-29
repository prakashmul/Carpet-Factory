import React from "react";

const Team: React.FC = () => {
  const teamMembers = [
    {
      name: "Biplav Thapa",
      role: "CEO & Founder",
      img: "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      name: "Safal Thapa",
      role: "Head of Production",
      img: "https://randomuser.me/api/portraits/men/2.jpg",
    },
    {
      name: "Prakash Mul",
      role: "Lead Engineer",
      img: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

  return (
    <section id="team" className="py-20 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50 text-center">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-12">
          Meet Our Team
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-gray-200 transition-transform duration-300 hover:scale-105"
              />
              <h3 className="font-bold text-xl text-gray-900 mb-1">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
