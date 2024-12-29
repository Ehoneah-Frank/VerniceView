import { Dumbbell, Wifi, UtensilsCrossed, Waves, Flower2, Users, Coffee } from "lucide-react";
// import { SwimmingPool } from "lucide-react";

const Amenities = () => {
  const amenities = [
    // {
    //   icon: SwimmingPool,
    //   title: "Infinity Pool",
    //   description: "Stunning beachfront pool with panoramic ocean views",
    //   color: "text-blue-500",
    // },
    {
      icon: Flower2,
      title: "Luxury Spa",
      description: "Rejuvenating treatments and massage services",
      color: "text-pink-500",
    },
    {
      icon: Dumbbell,
      title: "Fitness Center",
      description: "State-of-the-art equipment and personal training",
      color: "text-yellow-500",
    },
    {
      icon: UtensilsCrossed,
      title: "Fine Dining",
      description: "Multiple restaurants serving local and international cuisine",
      color: "text-red-500",
    },
    {
      icon: Waves,
      title: "Private Beach",
      description: "Direct access to pristine sandy beaches",
      color: "text-blue-400",
    },
    {
      icon: Users,
      title: "Event Spaces",
      description: "Versatile venues for meetings and celebrations",
      color: "text-green-500",
    },
    {
      icon: Wifi,
      title: "High-Speed WiFi",
      description: "Complimentary wireless internet throughout",
      color: "text-purple-500",
    },
    {
      icon: Coffee,
      title: "Beach Bar",
      description: "Refreshing drinks and light snacks by the shore",
      color: "text-orange-500",
    },
  ];

  return (
    <section id="amenities" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Resort Amenities</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Indulge in our world-class facilities and services designed to make your stay exceptional
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {amenities.map((amenity, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className={`mb-4 ${amenity.color}`}>
                <amenity.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
              <p className="text-gray-600">{amenity.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Amenities;
