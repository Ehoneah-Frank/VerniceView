import { FC } from "react";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";

const Footer: FC = () => {
  return (
    <footer className="bg-teal-900 text-white py-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-semibold mb-4">About Venice View Hotel</h3>
            <p className="text-gray-300 text-sm">
              Venice View Hotel, nestled along the pristine shores of Nzema, offers an unparalleled
              luxury experience. Crafted with care and passion, this masterpiece reflects the vision of
              Ehoneah Frank—a true innovator in digital design and creativity.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-300">
              {[
                { title: "About Us", href: "#about" },
                { title: "Rooms", href: "#rooms" },
                { title: "Amenities", href: "#amenities" },
                { title: "Dining", href: "#dining" },
                { title: "Contact", href: "#contact" },
              ].map((link) => (
                <li key={link.title}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-center">
                <MapPin size={20} className="mr-2" />
                Nzema Beach Road, Western Region, Ghana
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2" />
                +233 244 311 634
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2" />
                info@veniceviewhotel.com
              </li>
            </ul>
          </div>
        </div>

        {/* Social and Credits */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-col md:flex-row items-center justify-between">
          <div className="flex space-x-4">
            {[
              { href: "#", icon: <Facebook size={24} /> },
              { href: "#", icon: <Instagram size={24} /> },
              { href: "#", icon: <Twitter size={24} /> },
            ].map((social, index) => (
              <a key={index} href={social.href} className="text-gray-300 hover:text-white">
                {social.icon}
              </a>
            ))}
          </div>
          <p className="text-gray-400 text-sm text-center mt-4 md:mt-0">
            © {new Date().getFullYear()} Venice View Hotel. Crafted by the Ehoneah Frank.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
