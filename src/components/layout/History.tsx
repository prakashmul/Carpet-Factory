import React from "react";

const History: React.FC = () => {
  const historyData = [
    { id: 1, year: "1995", event: "Company founded with a focus on quality handmade carpets." },
    { id: 2, year: "2005", event: "Expanded production to include advanced production." },
    { id: 3, year: "2015", event: "Opened international distribution networks." },
    { id: 4, year: "2023", event: "certified manufacturing facility and industry awards." },
  ];

  return (
    <section className="bg-gray-50 flex flex-col items-center p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-2 text-gray-900">Our History</h2>
        <p className="text-gray-600">Milestones of Our Journey</p>
      </div>

      <div className="relative w-full max-w-md">
        {/* Full vertical line connecting all dots except after the last one */}
        <div className="absolute left-5 top-5 bottom-10 w-1.5 bg-black z-0"></div>

        {historyData.map((item) => (
          <div key={item.id} className="flex items-start relative mb-10 last:mb-0 z-10">
            {/* Circle */}
            <div className="flex flex-col items-center">
              <div className="w-10 h-10 rounded-full flex items-center justify-center z-10 bg-black text-white">
                <svg
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4"
                >
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425z" />
                </svg>
              </div>
            </div>

            {/* Content */}
            <div className="ml-6">
              <h3 className="text-lg font-semibold text-gray-900">{item.year}</h3>
              <p className="text-gray-700">{item.event}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default History;
