import { Link } from "react-router-dom";
import { Waves, UtensilsCrossed, Flower2, Wifi, Coffee } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHorse } from "@fortawesome/free-solid-svg-icons";
import beachView from "../images/backdrop.jpg";
// import roomView from "../images/room.jpg"; 
// import sunset from "../images/sunset.jpg";
import backdrop1 from "../images/backdrop1.jpg";



const AboutPage = () => {
  const features = [
    {
      icon: <Waves className="w-12 h-12 text-blue-500" />,
      title: "Beachfront Serenity",
      description: "Experience the calming effect of pristine sandy beaches and breathtaking ocean views.",
    },
    {
      icon: <UtensilsCrossed className="w-12 h-12 text-red-500" />,
      title: "Gourmet Dining",
      description: "Taste exquisite local and international dishes crafted by our world-class chefs.",
    },
    {
      icon: <Flower2 className="w-12 h-12 text-green-500" />,
      title: "Luxury Spa",
      description: "Relax and rejuvenate with holistic treatments at our tranquil spa.",
    },
    {
      icon: <Wifi className="w-12 h-12 text-yellow-500" />,
      title: "High-Speed WiFi",
      description: "Stay connected with complimentary high-speed internet throughout the hotel.",
    },
    {
      icon: <Coffee className="w-12 h-12 text-purple-500 " />,
      title: "Beach Bar",
      description: "Enjoy refreshing cocktails and snacks at our scenic beachfront bar.",
    },
    {
      icon: <FontAwesomeIcon icon={faHorse} className="text-orange-500 w-12 h-12" />,
      title: "Horse Riding",
      description: "Gallop along the beach and enjoy a thrilling horse-riding experience.",
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Centered "About Us" */}
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase text-teal-700">About Us</h2>
        </div>

        {/* A Luxuries Beach Resort Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Section (Image Container) */}
          <div className="flex justify-right">
            <div className="grid grid-cols-1 gap-4 w-4/5">
              <img
                src={beachView}
                alt="Beachfront Serenity"
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Right Section (Text) */}
          <div>
            <h1 className="text-5xl font-serif text-gray-900 mb-6 leading-tight">
              A Luxuries Beach Resort
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Nestled along the pristine shores of Nzema, Venice View Hotel is a luxurious haven that
              blends traditional Ghanaian hospitality with modern sophistication. Whether you're looking
              for a tranquil escape or a venue for your next event, we promise an experience like no other.
            </p>
            <Link to="/contact">
              <button className="text-teal-700 underline hover:text-teal-900 transition duration-300">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Our Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Section (Text) */}
          <div>
            <h2 className="text-4xl font-serif text-gray-900 mb-6 leading-tight">Our Story</h2>
            <p className="text-gray-600 leading-relaxed mb-6">
              Venice View Hotel was founded with the vision of creating a perfect blend of cultural
              charm and world-class luxury. Overlooking the serene beaches of Nzema, our resort
              offers unparalleled views, bespoke services, and unforgettable memories.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We believe in sustainability and supporting the local community, integrating eco-friendly
              practices in every aspect of our operations.
            </p>
            <Link to="/contact">
              <button className="bg-teal-900 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition duration-300 ease-in-out mt-10">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Right Section (Image Container) */}
          <div className="flex justify-left">
            <div className="grid grid-cols-1 gap-4 w-4/5">
              <img
                src={backdrop1}
                alt="Luxurious Room"
                className="w-full h-90 object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-6">Why Choose Us</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex justify-center items-center mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-center">{feature.title}</h3>
                <p className="text-gray-600 text-center">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
