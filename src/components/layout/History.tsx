import React from "react";

const History: React.FC = () => {
  return (
    <section id="history" className="bg-gray-50 p-8 rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Our History</h2>
      <ul className="list-disc list-inside text-gray-700 space-y-2">
        <li>1995: Company founded with a focus on quality car parts.</li>
        <li>2005: Expanded production to include advanced suspension components.</li>
        <li>2015: Opened international distribution networks.</li>
        <li>2023: ISO-certified manufacturing facility and industry awards.</li>
      </ul>
    </section>
  );
};

export default History;
