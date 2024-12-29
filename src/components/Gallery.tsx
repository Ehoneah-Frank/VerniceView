import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom"; // Add this for navigation

// Import all the images
import backdrop from "../images/backdrop.jpg";
import entrance from "../images/entrance.jpg";
import venice_view_black_star from "../images/venice_view_black_star.jpg";
import twilight from "../images/twilight.jpg";
import ocean from "../images/ocean.jpg";
import serv2 from "../images/serv2.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const images = [
    { url: backdrop, title: "Pool Side Bliss" },
    { url: entrance, title: "Entrance view" },
    { url: venice_view_black_star, title: "Venice View Black Star" },
    { url: twilight, title: "Twilight Ambiance" },
    { url: ocean, title: "Sunset View" },
    { url: serv2, title: "Premium Service" },
  ];

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? images.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === images.length - 1 ? 0 : selectedImage + 1);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-serif text-gray-900 mb-4">Experience Paradise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the beauty and luxury of Venice View Hotel through our gallery
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg aspect-[4/3]"
              onClick={() => setSelectedImage(index)}
            >
              <img
                src={image.url}
                alt={image.title}
                className="object-cover w-full h-full transform transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <p className="text-white text-lg font-semibold">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <Link to="/gallery">
            <button className="bg-teal-900 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition duration-300">
              View More
            </button>
          </Link>
        </div> */}
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
          >
            <X size={32} />
          </button>

          <button
            onClick={handlePrevious}
            className="absolute left-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronLeft size={32} />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-4 text-white hover:text-gray-300 transition-colors"
          >
            <ChevronRight size={32} />
          </button>

          <div className="max-w-7xl mx-auto px-4 h-[80vh] flex items-center">
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-h-full max-w-full mx-auto object-contain"
            />
          </div>

          <p className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white text-lg">
            {images[selectedImage].title}
          </p>
        </div>
      )}
    </section>
  );
};

export default Gallery;
