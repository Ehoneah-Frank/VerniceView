
const RoomsPage = () => {
  const rooms = [
    {
      title: "Ocean View Suite",
      description: "Luxurious suite with panoramic ocean views and private balcony",
      price: 450,
      image: "https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["King Size Bed", "Ocean View", "Private Balcony", "Mini Bar", "Room Service"],
    },
    {
      title: "Beach Villa",
      description: "Spacious villa steps away from the beach with private garden",
      price: 750,
      image: "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["2 Bedrooms", "Private Garden", "Living Area", "Kitchen", "Beach Access"],
    },
    {
      title: "Deluxe Room",
      description: "Elegant room with modern amenities and garden views",
      price: 300,
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      features: ["Queen Size Bed", "Garden View", "Work Desk", "En-suite Bathroom", "Daily Housekeeping"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Our Rooms</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore all of our meticulously designed rooms and suites, crafted for ultimate comfort and elegance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rooms.map((room, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2"
            >
              <div className="relative h-64">
                <img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold">{room.title}</h3>
                  <div className="text-right">
                    <span className="text-2xl font-bold text-teal-900">${room.price}</span>
                    <span className="text-gray-600 text-sm">/night</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{room.description}</p>

                <ul className="space-y-2 mb-6">
                  {room.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-gray-600">
                      <span className="w-1.5 h-1.5 bg-teal-900 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <button className="w-full bg-teal-900 text-white py-3 rounded-md hover:bg-teal-800 transition duration-300">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsPage;
