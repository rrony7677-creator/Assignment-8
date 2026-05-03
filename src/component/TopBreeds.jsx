import { Card } from "@heroui/react";


export default function TopBreeds() {
  const breeds = [
    {
      title: "Black Bengal Goat",
      desc: "One of the most popular goat breeds in Bangladesh. Known for tender meat, high demand, and fast growth."
    },
    {
      title: "Sahiwal Cow",
      desc: "A strong dairy and meat breed with high resistance to heat and diseases. Ideal for Qurbani and farming."
    },
    {
      title: "Jamunapari Goat",
      desc: "Large-sized goat breed known for its impressive height, meat quality, and calm behavior."
    },
    {
      title: "Deshi Cow",
      desc: "Local Bangladeshi cow breed, strong, healthy, and easily adaptable to local environments."
    },
    {
      title: "Boer Goat",
      desc: "Imported high-quality goat breed known for fast weight gain and premium meat production."
    },
    {
      title: "River Buffalo",
      desc: "Heavy and strong buffalo breed, commonly used for meat and milk production in rural areas."
    }
  ];

  return (
    <div className="py-12 px-6 bg-white">
     
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-2">Top Breeds for Qurbani</h2>
        <p className="text-gray-500 max-w-xl mx-auto text-sm">
          Explore the most popular and healthy livestock breeds chosen for Qurbani. These animals are well-fed, strong, and carefully selected from trusted farms.
        </p>
      </div>

      <div className="max-w-5xl mx-auto  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {breeds.map((item, index) => (
          <Card key={index} className="border-none shadow-sm bg-gray-500 hover:bg-black hover:shadow-md transition-all cursor-pointer">
            <Card className="p-6 hover:bg-green-400">
              <h3 className="text-green-700 font-bold text-lg mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </Card>
          </Card>
        ))}
      </div>
    </div>
  );
}