import { useState } from 'react';
import { FaWhatsapp, FaTelegramPlane, FaEnvelope, FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.pexels.com/photos/4207891/pexels-photo-4207891.jpeg"
          alt="Candle Contact"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-light mb-4">Get in Touch</h1>
            <p className="text-xl text-gray-200">We'd love to hear from you</p>
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: <FaMapMarkerAlt className="w-6 h-6" />,
              title: 'Visit Us',
              content: 'shuagan fashion mall, bettiah, Bihar, 845438'
            },
            {
              icon: <FaPhone className="w-6 h-6" />,
              title: 'Call Us',
              content: '+918210293504'
            },
            {
              icon: <FaClock className="w-6 h-6" />,
              title: 'Business Hours',
              content: 'Mon - Sun: 9AM - 6PM'
            }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex justify-center text-amber-600 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-medium mb-2">{item.title}</h3>
              <p className="text-gray-600">{item.content}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-light mb-8">Send Us a Message</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Additional Information */}
          <div>
            <h2 className="text-3xl font-light mb-8">Connect With Us</h2>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>
                Whether you have questions about our products, need assistance with an order, 
                or want to explore wholesale opportunities, we're here to help. Reach out 
                through any of our channels, and we'll get back to you promptly.
              </p>
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-medium mb-4">Social Channels</h3>
              <div className="flex gap-6">
                <a
                  href="https://wa.me/8210293504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-green-500 transition-colors duration-300"
                >
                  <FaWhatsapp className="text-2xl" />
                  <span>WhatsApp</span>
                </a>
                <a
                  href="https://t.me/8210293504"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-600 hover:text-blue-500 transition-colors duration-300"
                >
                  <FaTelegramPlane className="text-2xl" />
                  <span>Telegram</span>
                </a>
                <a
                  href="mailto:your-email@example.com"
                  className="flex items-center gap-3 text-gray-600 hover:text-red-400 transition-colors duration-300"
                >
                  <FaEnvelope className="text-2xl" />
                  <span>Email</span>
                </a>
              </div>
            </div>

            <div className="mt-12 p-6 bg-amber-50 rounded-xl">
              <h3 className="text-xl font-medium mb-4">Gifting Services</h3>
              <p className="text-gray-600">
                Looking for the perfect gift? Our candles make elegant and thoughtful presents 
                for any occasion. We offer gift wrapping, personalized messages, and corporate 
                gifting solutions. Contact us to discuss your gifting needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;