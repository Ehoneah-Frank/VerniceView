import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import FaviconLogo from "../images/FaviconLogo.jpg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { title: "Home", to: "/" },
    { title: "About", to: "/about" },
    { title: "Rooms", to: "/rooms" },
    // { title: "Amenities", to: "#amenities" },
    // { title: "Dining", to: "#dining" },
    { title: "Gallery", to: "/gallery" },
    { title: "Contact", to: "/contact" },
  ];

  return (
    <>
      <div className="bg-teal-900 text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <span className="flex items-center">
              <Phone size={16} className="mr-2" /> +233 244 311 634
            </span>
            <span className="hidden md:flex items-center">
              <Mail size={16} className="mr-2" /> veniceviewbeach@gmail.com
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a 
                href="https://facebook.com/veniceviewbeach" 
                className="hover:text-teal-200"
                target="_blank"
                rel="noopener noreferrer"
            >
                Facebook
            </a>
            <a href="https://instagram.com/veniceviewbeach" className="hover:text-teal-200">
              Instagram
            </a>
            <a href="https://twitter.com/veniceviewbeach" className="hover:text-teal-200">
              Twitter
            </a>
          </div>
        </div>
      </div>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo Section */}
            <div className="flex items-center">
              <Link to="/" className="flex items-center space-x-2">
                {/* Favicon Logo */}
                <img
                  src={FaviconLogo}
                  alt="Venice View Hotel Logo"
                  className="w-20 h-20"
                />
                <span className="text-2x2 font-serif text-teal-900">
                  Venice View Beach Resort
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className="text-gray-700 hover:text-teal-900 px-3 py-2 rounded-md text-sm font-medium transition duration-150 ease-in-out"
                >
                  {item.title}
                </Link>
              ))}

              <Link to="/booking">
                <button className="bg-teal-900 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition duration-150 ease-in-out">
                  Book Now
                </button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-teal-900"
                aria-label={isOpen ? "Close menu" : "Open menu"}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navItems.map((item) => (
                <Link
                  key={item.title}
                  to={item.to}
                  className="text-gray-700 hover:text-teal-900 block px-3 py-2 rounded-md text-base font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ))}
              <Link to="/booking" className="w-full">
                <button className="w-full bg-teal-900 text-white px-6 py-2 rounded-md hover:bg-teal-800 transition duration-150 ease-in-out">
                  Book Now
                </button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
