import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ShoppingCart } from 'lucide-react';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { cartCount } = useContext(CartContext);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Candles', path: '/Candles' },
    { name: 'Gifts', path: '/Gifts' },
    { name: 'Contact Us', path: '/Contactus' },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-black text-white px-6 py-4 flex justify-between items-center shadow-lg sticky top-0 z-50 transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } font-poppins`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3">
        <Link to="/">
          <img
            src="/logoHome.png"
            alt="Logo"
            className="w-26 h-26 object-contain transition-transform duration-300 hover:scale-105 cursor-pointer"
          />
        </Link>
        {/* <span className="text-2xl font-semibold tracking-tight">GlowVibe</span> */}
      </div>

      {/* Hamburger Icon */}
      <button
        className="md:hidden text-white text-3xl focus:outline-none"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Links (Desktop) */}
      <div className="hidden md:flex gap-10 items-center text-lg font-medium">
        {navLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className={({ isActive }) =>
              `relative transition-all duration-300 ${
                isActive
                  ? 'text-amber-300 after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-amber-300'
                  : 'hover:text-amber-200 hover:after:absolute hover:after:bottom-0 hover:after:left-0 hover:after:w-full hover:after:h-0.5 hover:after:bg-amber-200'
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* Cart Icon */}
      <div className="relative">
        <ShoppingCart className="w-8 h-8 transition-colors duration-300 hover:text-amber-200" />
        {cartCount > 0 && (
          <span className="absolute -top-3 -right-3 w-5 h-5 flex items-center justify-center text-xs font-bold rounded-full bg-amber-400 text-black">
            {cartCount}
          </span>
        )}
      </div>

      {/* Links (Mobile Dropdown) */}
      {menuOpen && (
        <div
          className="absolute top-20 left-0 w-full bg-gradient-to-b from-gray-900 to-black md:hidden px-8 py-6 flex flex-col gap-6 shadow-xl z-40 text-lg font-medium transform transition-all duration-300 ease-in-out"
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className={({ isActive }) =>
                `transition-all duration-300 ${
                  isActive
                    ? 'text-amber-300 border-l-4 border-amber-300 pl-4'
                    : 'hover:text-amber-200 hover:border-l-4 hover:border-amber-200 hover:pl-4'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;