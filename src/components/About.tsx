import { Waves, UtensilsCrossed } from "lucide-react";
// import { Palm } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Waves className="w-8 h-8 text-blue-500" />,
      title: "Beachfront Location",
      description:
        "Direct access to pristine sandy beaches and breathtaking ocean views",
    },
    // {
    //   icon: <Palm className="w-8 h-8 text-green-500" />,
    //   title: "Tropical Paradise",
    //   description: "Surrounded by lush gardens and natural beauty of Ghana's coastline",
    // },
    {
      icon: <UtensilsCrossed className="w-8 h-8 text-red-500" />,
      title: "Fine Dining",
      description:
        "Experience exquisite local and international cuisine at our restaurants",
    },
  ];

  const handleNavigation = (): void => {
    window.location.href = "/about";
  };

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Section */}
          <div className="space-y-6">
            <h2 className="text-4xl font-serif text-gray-900">
              Welcome to Venice View Hotel
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Nestled along the pristine shores of Nzema, Venice View Hotel
              offers an unparalleled luxury experience. Our resort combines
              traditional Ghanaian hospitality with modern amenities to create
              an unforgettable stay for our guests.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Whether you're seeking a romantic getaway, a family vacation, or a
              corporate retreat, our dedicated staff ensures every moment of
              your stay is perfect.
            </p>
            <button
              onClick={handleNavigation}
              className="bg-teal-900 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition duration-300 ease-in-out"
            >
              Learn More
            </button>
          </div>

          {/* Features Section */}
          <div className="grid grid-cols-1 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
