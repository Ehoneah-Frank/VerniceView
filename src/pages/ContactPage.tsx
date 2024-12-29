import { Mail, Phone, MapPin, Clock } from "lucide-react";

const ContactPage = () => {
  const contactInfo = [
    {
      icon: <Phone className="w-8 h-8 text-teal-600" />,
      title: "Phone",
      details: ["+233 244 311 634", "+233 244 311 635"],
    },
    {
      icon: <Mail className="w-8 h-8 text-teal-600" />,
      title: "Email",
      details: ["info@veniceviewhotel.com", "reservations@veniceviewhotel.com"],
    },
    {
      icon: <MapPin className="w-8 h-8 text-teal-600" />,
      title: "Location",
      details: ["Nzema Beach Road", "Western Region, Ghana"],
    },
    {
      icon: <Clock className="w-8 h-8 text-teal-600" />,
      title: "Reception Hours",
      details: ["24/7 Front Desk", "Check-in: 2 PM | Check-out: 11 AM"],
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-serif text-teal-900 mb-6">Contact Us</h1>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Get in touch with us for any inquiries,
            reservations, or feedback.
          </p>
        </div>

        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="mb-4">{info.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{info.title}</h3>
              {info.details.map((detail, idx) => (
                <p key={idx} className="text-gray-600">
                  {detail}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-md mb-16">
          <h2 className="text-3xl font-serif text-gray-900 mb-6 text-center">
            Send Us a Message
          </h2>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-teal-900 text-white py-3 rounded-md hover:bg-teal-800 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Google Map */}
        <div className="rounded-lg shadow-md overflow-hidden">
          <iframe
            title="Venice View Hotel Location"
            src="https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d63597.11657145456!2d-2.5394631121000324!3d4.969602232325716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0xfe80733933f6983%3A0x9f61d1f8ab0a9d1e!2sVenice%20View%20Beach%20Resort%2C%20Venice%20View%20Ave%2C%20Beku!3m2!1d4.969518!2d-2.4982631!4m5!1s0xfe80733933f6983%3A0x9f61d1f8ab0a9d1e!2sVenice%20View%20Ave%2C%20Beku!3m2!1d4.969518!2d-2.4982631!5e0!3m2!1sen!2sgh!4v1732346675791!5m2!1sen!2sgh"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;