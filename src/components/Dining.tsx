// import { UtensilsCrossed, Wine, Coffee } from 'lucide-react';

const Dining = () => {
  const restaurants = [
    {
      name: "Ocean's Edge Restaurant",
      description: "Fine dining with panoramic ocean views, serving international cuisine with a local twist",
      image: "https://images.unsplash.com/photo-1592861956120-e524fc739696?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      hours: "7:00 AM - 11:00 PM",
      type: "Fine Dining"
    },
    {
      name: "Sunset Beach Bar & Grill",
      description: "Casual beachfront dining featuring fresh seafood and refreshing cocktails",
      image: "https://images.unsplash.com/photo-1601191362988-ac6ebec629c8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      hours: "11:00 AM - 10:00 PM",
      type: "Casual Dining"
    },
    {
      name: "The Lobby Café",
      description: "Artisanal coffee, pastries, and light bites in an elegant setting",
      image: "https://images.unsplash.com/photo-1445116572660-236099ec97a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      hours: "6:00 AM - 8:00 PM",
      type: "Café"
    }
  ];

  return (
    <section id="dining" className="py-20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Culinary Excellence</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Embark on a gastronomic journey through our diverse dining venues
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {restaurants.map((restaurant, index) => (
            <div key={index} className="bg-white rounded-lg overflow-hidden shadow-lg">
              <div className="relative h-64">
                <img
                  src={restaurant.image}
                  alt={restaurant.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="text-sm font-medium">{restaurant.type}</p>
                  <p className="text-xs opacity-75">{restaurant.hours}</p>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{restaurant.name}</h3>
                <p className="text-gray-600 mb-4">{restaurant.description}</p>
                <button className="w-full bg-teal-900 text-white py-2 rounded-md hover:bg-teal-800 transition duration-300">
                  View Menu
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            For reservations or special dietary requirements, please contact our dining concierge
          </p>
          <button className="bg-teal-900 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition duration-300">
            Make a Reservation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Dining;