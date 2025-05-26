import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaYoutube, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription (e.g., send to backend or WhatsApp)
    setEmail('');
  };

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Candles', to: '/candles' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', to: '/about' },
        { name: 'Contact', to: '/Contactus' },
      ],
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Shipping', to: '/shipping' },
        { name: 'Returns', to: '/returns' },
        { name: 'FAQ', to: '/faq' },
      ],
    },
  ];

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
          <div className="flex flex-col items-center gap-6 sm:gap-8">
            <div className="text-center">
              <h3 className="text-xl sm:text-2xl font-playfair font-light mb-2 text-amber-300">Join Our Newsletter</h3>
              <p className="text-gray-400 text-sm sm:text-base">Stay updated with our latest collections and exclusive offers.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full max-w-md">
              <div className="flex flex-col sm:flex-row gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-4 py-2 sm:px-6 sm:py-3 bg-gray-900 text-white rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 w-full"
                  required
                />
                <button
                  type="submit"
                  className="px-6 py-2 sm:px-8 sm:py-3 bg-amber-600 text-white rounded-full text-sm sm:text-base font-raleway tracking-wide transition-all hover:bg-amber-700 hover:shadow-lg"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Ray Candles Logo" className="w-20 sm:w-24 mb-4 sm:mb-6" />
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-xs sm:max-w-sm">
              Handcrafted luxury candles made with premium soy wax and essential oils. Each candle is carefully created to bring warmth and ambiance to your space.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://youtube.com/@RayOfCandles"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:transform hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="text-xl sm:text-2xl hover:text-red-500 transition-colors" />
              </a>
              <a
                href="https://instagram.com/sentedcandles_by_ray"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:transform hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-xl sm:text-2xl hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-base sm:text-lg font-medium text-amber-300 mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-400 text-sm sm:text-base hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <p className="text-gray-400 text-xs sm:text-sm">
              © 2025 Ray Candles. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                to="/privacy"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;