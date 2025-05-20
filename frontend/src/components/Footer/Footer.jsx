import { useState } from 'react';
import { FaYoutube, FaInstagram, FaFacebook } from 'react-icons/fa';

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
        { name: 'New Arrivals', href: '/new-arrivals' },
        { name: 'Best Sellers', href: '/best-sellers' },
        { name: 'Gift Sets', href: '/gift-sets' }
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', href: '/about' },
        { name: 'Contact', href: '/contact' },
        { name: 'Sustainability', href: '/sustainability' },
        { name: 'Wholesale', href: '/wholesale' }
      ]
    },
    {
      title: 'Customer Care',
      links: [
        { name: 'Shipping', href: '/shipping' },
        { name: 'Returns', href: '/returns' },
        { name: 'FAQ', href: '/faq' },
        { name: 'Track Order', href: '/track' }
      ]
    }
  ];

  return (
    <footer className="bg-black text-white">
      {/* Newsletter Section */}
      <div className="border-b border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-light mb-2">Join Our Newsletter</h3>
              <p className="text-gray-400">Stay updated with our latest collections and exclusive offers.</p>
            </div>
            <form onSubmit={handleSubmit} className="w-full md:w-auto">
              <div className="flex gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="px-6 py-3 bg-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-amber-500 flex-grow md:w-80"
                />
                <button
                  type="submit"
                  className="px-8 py-3 bg-amber-600 text-white rounded-full hover:bg-amber-700 transition-colors duration-300"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <img src="/logo.png" alt="Logo" className="w-24 mb-6" />
            <p className="text-gray-400 mb-6 max-w-sm">
              Handcrafted luxury candles made with premium soy wax and essential oils. 
              Each candle is carefully created to bring warmth and ambiance to your space.
            </p>
            <div className="flex gap-6">
              <a 
                href="https://youtube.com/@yourchannel" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:transform hover:scale-110 transition-transform duration-300"
              >
                <FaYoutube className="text-2xl hover:text-red-500 transition-colors" />
              </a>
              <a 
                href="https://instagram.com/yourhandle" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:transform hover:scale-110 transition-transform duration-300"
              >
                <FaInstagram className="text-2xl hover:text-pink-500 transition-colors" />
              </a>
              <a 
                href="https://facebook.com/yourpage" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:transform hover:scale-110 transition-transform duration-300"
              >
                <FaFacebook className="text-2xl hover:text-blue-500 transition-colors" />
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="text-lg font-medium mb-4">{section.title}</h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <a 
                      href={link.href}
                      className="text-gray-400 hover:text-amber-400 transition-colors duration-300"
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © 2025 Ray Candles. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="/privacy" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Terms of Service
              </a>
              <a href="/cookies" className="text-gray-400 hover:text-amber-400 transition-colors duration-300">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;