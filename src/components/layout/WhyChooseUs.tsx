import { ThumbsUp, Users, Cog, Heart } from "lucide-react";

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <ThumbsUp className="w-10 h-10 text-black" />,
      title: "Quality",
      text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      gradient: "from-teal-400 to-cyan-500",
    },
    {
      icon: <Users className="w-10 h-10 text-black" />,
      title: "Personnel",
      text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      gradient: "from-blue-400 to-indigo-500",
    },
    {
      icon: <Cog className="w-10 h-10 text-black" />,
      title: "Innovation",
      text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      gradient: "from-indigo-400 to-purple-500",
    },
    {
      icon: <Heart className="w-10 h-10 text-black" />,
      title: "Commitment",
      text: "This slide is 100% editable. Adapt it to your needs and capture your audience's attention.",
      gradient: "from-purple-400 to-pink-500",
    },
  ];

  return (
    <section className="w-full bg-white py-16">
      <div className="w-4/5 mx-auto text-center">
        <h2 className="text-3xl font-bold mb-12">WHY CHOOSE US?</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {reasons.map((reason, i) => (
            <div key={i} className="flex flex-col items-center text-center">
              {/* Gradient Circle Border */}
              <div
                className={`w-28 h-28 rounded-full flex items-center justify-center border-4 bg-white border-transparent bg-gradient-to-r ${reason.gradient} p-[2px]`}
              >
                <div className="w-full h-full rounded-full flex items-center justify-center bg-white">
                  {reason.icon}
                </div>
              </div>

              {/* Title */}
              <h3
                className={`mt-4 text-lg font-semibold ${
                  i === 0
                    ? "text-teal-500"
                    : i === 1
                    ? "text-blue-500"
                    : i === 2
                    ? "text-indigo-500"
                    : "text-purple-500"
                }`}
              >
                {reason.title}
              </h3>

              {/* Description */}
              <p className="mt-2 text-sm text-gray-600">{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
