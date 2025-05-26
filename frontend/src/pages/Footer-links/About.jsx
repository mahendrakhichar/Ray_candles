import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <h1 className="text-2xl sm:text-3xl font-playfair font-bold text-center text-gray-800 mb-6 sm:mb-8 tracking-wide">
          About Ray Candles
        </h1>

        {/* Main Content */}
        <div className="flex flex-col gap-8 sm:gap-12">
          {/* Introduction */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Welcome to Our World</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Welcome to Ray Candles, where passion meets craftsmanship. We’re a small, dedicated team committed to creating handcrafted candles that bring warmth, serenity, and a touch of luxury to your everyday moments.
            </p>
          </div>

          {/* Our Story */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Our Story</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Our journey began with a simple spark—an idea to transform spaces with the gentle glow and soothing scents of candles. Founded in 2023, Ray Candles was born from a love for creativity and a desire to make every moment special. From cozy evenings at home to thoughtful gifts for loved ones, our candles are designed to light up your life.
            </p>
          </div>

          {/* Our Craftsmanship */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Handcrafted with Care</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Every Ray Candle is hand-poured using premium, eco-friendly ingredients, including natural soy wax and pure essential oils. Our meticulous process ensures each candle burns cleanly and fills your space with consistent, long-lasting fragrance. From selecting sustainable materials to crafting elegant designs, we pour our heart into every detail.
            </p>
            <ul className="list-disc pl-5 mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-gray-600">
              <li><strong>Eco-Friendly Materials:</strong>  natural soy wax and lead-free cotton wicks</li>
              <li><strong>Artisanal Process:</strong> Hand-poured in small batches for quality control</li>
              <li><strong>Unique Scents:</strong> Blended with essential oils for a calming experience</li>
            </ul>
          </div>

          {/* Our Values */}
          <div>
            <h2 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Our Values</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              At Ray Candles, we believe in:
            </p>
            <ul className="list-disc pl-5 mt-3 sm:mt-4 space-y-2 text-sm sm:text-base text-gray-600">
              <li><strong>Sustainability:</strong> Using eco-conscious materials to protect our planet</li>
              <li><strong>Quality:</strong> Crafting candles that exceed your expectations</li>
              <li><strong>Community:</strong> Supporting local artisans and small businesses</li>
              <li><strong>Joy:</strong> Creating moments of warmth and connection</li>
            </ul>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <h2 className="text-lg sm:text-xl font-semibold text-amber-700 mb-3 sm:mb-4">Join Our Journey</h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              Thank you for supporting our small business. Explore our collection and let our candles light up your moments—one glow at a time.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6 mt-4 sm:mt-6">
              <Link
                to="/candles"
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 bg-amber-600 text-white rounded-full text-sm sm:text-base font-raleway tracking-wide transition-all hover:bg-amber-700 hover:shadow-lg"
              >
                Shop Our Candles
              </Link>
              <Link
                to="/Contactus"
                className="inline-block px-6 py-2 sm:px-8 sm:py-3 border border-amber-600 text-amber-600 rounded-full text-sm sm:text-base font-raleway tracking-wide transition-all hover:bg-amber-600 hover:text-white hover:shadow-lg"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;