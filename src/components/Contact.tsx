import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6 text-teal-900" />,
      title: "Phone",
      details: ["+233 244 311 634", "+233 244 311 635"],
    },
    {
      icon: <Mail className="w-6 h-6 text-teal-900" />,
      title: "Email",
      details: ["veniceviewbeach@gmail.com", "booking@veniceviewhotel.com"],
    },
    {
      icon: <MapPin className="w-6 h-6 text-teal-900" />,
      title: "Location",
      details: ["Baku in", "Western Region, Ghana"],
    },
    {
      icon: <Clock className="w-6 h-6 text-teal-900" />,
      title: "Reception Hours",
      details: ["24/7 Front Desk"],
    },
  ];

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-serif text-teal-900 mb-6">Get in Touch</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We're here to assist you with any inquiries or special requests. Reach out to us for a memorable stay.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{info.icon}</div>
              <h4 className="text-lg font-semibold text-teal-900 mb-2">{info.title}</h4>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">{detail}</p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Us Button */}
        <div className="mt-8">
          <Link to="/contact">
            <button className="bg-teal-900 text-white px-8 py-3 rounded-md hover:bg-teal-800 transition duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Contact;
