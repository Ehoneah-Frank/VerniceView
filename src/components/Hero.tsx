import { useState, useEffect, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import backdrop from "../images/backdrop.jpg";
import entrance from "../images/entrance.jpg";
import venice_view_black_star from "../images/venice_view_black_star.jpg";
import twilight from "../images/twilight.jpg";

const Hero = () => {
  const images = useMemo(
    () => [backdrop, entrance, venice_view_black_star, twilight],
    []
  );

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <motion.div
      className="relative h-screen overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>

      {/* Content */}
      <div className="relative h-full flex items-center justify-center text-center text-white px-4 z-10">
        <motion.div
          className="max-w-4xl"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif mb-6">
            Experience Luxury on Ghana's Finest Beach
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100">
            Where comfort meets the pristine shores of Nzema
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            
            <Link to="/booking">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="bg-teal-900 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition duration-300"
              >
                Book Your Stay
              </motion.button>
            </Link>

            <Link to="/rooms">
              <motion.button
                whileHover={{ scale: 1.1 }}
                className="border-2 border-white text-white px-8 py-3 rounded-md hover:bg-white hover:text-teal-900 transition duration-300"
              >
                View Our Rooms
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Hero;
