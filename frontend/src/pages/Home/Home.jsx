import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import CounterAnimation from '../../components/CounterAnimation/CounterAnimation';

const Home = () => {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const imageSection = document.getElementById('scroll-image');
      if (imageSection) {
        const rect = imageSection.getBoundingClientRect();
        if (rect.top < window.innerHeight) setShowImage(true);
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="bg-black text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-start items-center overflow-hidden pt-16 sm:pt-20">
        <motion.img
          src="/desktop.gif"
          alt="Burning Candle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="container mx-auto px-4 sm:px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-base sm:text-lg md:text-xl uppercase tracking-widest text-amber-300 mb-3">
              Handcrafted with Love
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Shining Light, <span className="font-medium">Soothing Soul</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl sm:max-w-2xl mx-auto">
              Let the warmth and fragrance of our candles brighten your space and spirit.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-8 flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
          >
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/Candles"
                className="inline-block bg-amber-600 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg tracking-wide transition-all hover:bg-amber-700 hover:shadow-lg"
              >
                Shop Now
              </Link>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Link
                to="/About"
                className="inline-block border border-white text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg tracking-wide transition-all hover:bg-white hover:text-black"
              >
                Our Story
              </Link>
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.8 }}
          className="absolute bottom-6 sm:bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="flex flex-col items-center animate-bounce">
            <span className="text-xs sm:text-sm text-amber-300 mb-2">Discover More</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-amber-300"
            >
              <path d="M12 5v14"></path>
              <path d="m19 12-7 7-7-7"></path>
            </svg>
          </div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-semibold text-amber-700 mb-12 sm:mb-16"
          >
            Crafting Moments of Serenity
          </motion.h2>
          <div className="flex flex-col sm:flex-row justify-center gap-8 sm:gap-12 md:gap-20 text-black text-4xl sm:text-5xl font-bold">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <CounterAnimation end={29} duration={1000} />
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mt-2">Orders Last Week</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <CounterAnimation end={257} duration={1000} />
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-700 mt-2">Orders Last Month</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl text-amber-800 text-center mb-12 sm:mb-16 font-light"
          >
            What Our Customers Say
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                quote: "It lasted way longer than I thought. No black smoke, and the scent stays consistent. Loved the lavender one!",
                author: "Yogesh kumar",
              },
              {
                quote: "I tried your rose candle, The smell and design of the candle is amazing. I want to try some of your new candles also ",
                author: "Mahendra",
              },
              {
                quote: "I wasn’t expecting it to fill the whole room, but wow—it smells amazing! Super calming after a long day",
                author: "Nitesh jha",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-4 sm:p-6 rounded-xl shadow-md hover:shadow-amber-300/30 transition-shadow"
              >
                <p className="text-gray-600 italic mb-4 text-sm sm:text-base">"{testimonial.quote}"</p>
                <p className="text-amber-700 font-medium text-sm sm:text-base">{testimonial.author}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Teaser */}
      <section className="bg-gradient-to-t from-gray-100 to-white py-16 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-5xl font-light text-amber-800 mb-8 sm:mb-12"
          >
            Explore Our Bestsellers
          </motion.h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {[
              {
                name: "Lavender Bliss",
                image: "/images/lavender.jpg",
              },
              {
                name: "Ocean Blue",
                image: "/images/blue_ocean.jpg",
              },
              {
                name: "Velvet Rose",
                image: "/images/love_yourself.jpg",
              },
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 sm:h-64 object-cover rounded-xl shadow-md group-hover:shadow-amber-300/30 transition-shadow"
                />
                <p className="text-lg sm:text-xl text-amber-800 mt-4">{product.name}</p>
              </motion.div>
            ))}
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link
              to="/Candles"
              className="inline-block bg-amber-500 text-white px-6 py-2 sm:px-8 sm:py-3 rounded-full text-base sm:text-lg tracking-wide transition-all hover:bg-amber-600 hover:shadow-lg"
            >
              Shop All Candles
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;