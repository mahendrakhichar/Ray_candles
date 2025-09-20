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
    <footer className="bg-gray-50 text-gray-800 border-t border-gray-200">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Ray Candles Logo" className="w-20 sm:w-24 mb-4 sm:mb-6" />
            <p className="text-gray-600 text-sm sm:text-base mb-4 sm:mb-6 max-w-xs sm:max-w-sm leading-relaxed">
              Handcrafted luxury candles made with premium soy wax and essential oils. Each candle is carefully created to bring warmth and ambiance to your space.
            </p>
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://youtube.com/@RayOfCandles"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg hover:transform hover:scale-110 transition-all duration-300 border border-gray-200"
              >
                <FaYoutube className="text-xl sm:text-2xl text-gray-700 hover:text-red-500 transition-colors" />
              </a>
              <a
                href="https://www.instagram.com/rayofcandles/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white shadow-md hover:shadow-lg hover:transform hover:scale-110 transition-all duration-300 border border-gray-200"
              >
                <FaInstagram className="text-xl sm:text-2xl text-gray-700 hover:text-pink-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-base sm:text-lg font-semibold text-amber-600 mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.to}
                      className="text-gray-600 text-sm sm:text-base hover:text-amber-600 transition-colors duration-300 hover:underline"
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
      <div className="border-t border-gray-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 sm:py-6">
          <div className="flex flex-col items-center gap-4 sm:gap-6">
            <p className="text-gray-500 text-xs sm:text-sm">
              © 2025 Ray Candles. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <Link
                to="/privacy"
                className="text-gray-500 hover:text-amber-600 transition-colors duration-300 hover:underline"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-gray-500 hover:text-amber-600 transition-colors duration-300 hover:underline"
              >
                Terms of Service
              </Link>
              <Link
                to="/cookies"
                className="text-gray-500 hover:text-amber-600 transition-colors duration-300 hover:underline"
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