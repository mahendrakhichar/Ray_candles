import { useState } from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';
import { href } from 'react-router-dom';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  const footerLinks = [
    {
      title: 'Shop',
      links: [
        { name: 'All Candles', href: '/candles' },

      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/Contactus' },
      ]
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Shipping', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'FAQ', href: '/faq' },
      ]
    }
  ];

  return (
    <footer className="bg-black text-white">

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Logo" className="w-20 sm:w-24 mb-4 sm:mb-6" />
            <p className="text-gray-400 text-sm sm:text-base mb-4 sm:mb-6 max-w-xs sm:max-w-sm">
              Handcrafted luxury candles made with premium soy wax and essential oils. 
              Each candle is carefully created to bring warmth and ambiance to your space.
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
              <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">{section.title}</h4>
              <ul className="space-y-2 sm:space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 text-sm sm:text-base hover:text-amber-400 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
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
            {/* <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;