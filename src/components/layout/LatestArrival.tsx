const carpets = [
  { id: 1, name: "Persian Elegance", image: "assets/img/home/1.jpeg" },
  { id: 2, name: "Modern Geometric", image: "assets/img/home/2.jpeg" },
  { id: 3, name: "Handmade Classic", image: "assets/img/home/3.jpeg" },
  { id: 4, name: "Vintage Charm", image: "assets/img/home/4.jpeg" },
  { id: 5, name: "Luxury Soft", image: "assets/img/home/5.jpeg" },
  { id: 6, name: "Colorful Delight", image: "assets/img/home/6.jpeg" },
  { id: 7, name: "Eco Natural", image: "assets/img/home/7.jpeg" },
  { id: 8, name: "Royal Heritage", image: "assets/img/home/8.jpeg" },
];

export default function LatestArrivals() {
  return (
    <div className="bg-gray-50 py-12"> {/* background full */}
      <div className="w-4/5 mx-auto px-4">
        <h1 className="text-3xl font-bold mb-12 text-center">Latest Arrivals</h1>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {carpets.map((carpet) => (
            <div
              key={carpet.id}
              className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transform transition duration-300"
            >
              <img
                src={carpet.image}
                alt={carpet.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-800 text-center">
                  {carpet.name}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
