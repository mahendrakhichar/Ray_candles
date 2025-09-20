import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Flame, Star, Heart, Gift, Sparkles, ArrowRight, ChevronDown } from 'lucide-react';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Beautiful candle images from Pexels
  const sliderImages = [
    'https://images.pexels.com/photos/3066868/pexels-photo-3066868.jpeg',
    'https://res.cloudinary.com/diivo2ggx/image/upload/eg44dplywvnzcfhffwvv.jpg',
    'https://res.cloudinary.com/diivo2ggx/image/upload/y9jhsveva0qp03il42ys.jpg',
    'https://res.cloudinary.com/diivo2ggx/image/upload/laylhwqen5srdemktkhu.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
    'https://res.cloudinary.com/diivo2ggx/image/upload/wabasim5pr0kibijiuwk.jpg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
  ];

  // Auto-slide effect
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 4000);

    return () => clearInterval(slideInterval);
  }, [sliderImages.length]);

  const features = [
    {
      icon: <Flame className="w-8 h-8" />,
      title: "Premium Soy Wax",
      description: "Made with 100% natural soy wax for clean, long-lasting burns"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Hand-Poured",
      description: "Each candle is carefully crafted by hand with love and attention"
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Luxury Fragrances",
      description: "Premium essential oils create captivating, long-lasting scents"
    },
    {
      icon: <Gift className="w-8 h-8" />,
      title: "Perfect Gifts",
      description: "Beautifully packaged candles perfect for any special occasion"
    }
  ];

  const testimonials = [
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
    }
  ];

  return (
    <div className="bg-white">

      {/* Hero - Image Slider Section */}
      <section className="relative overflow-hidden bg-gray-100 h-[500px] md:h-[600px]">
        <div className="absolute inset-0">
          <div
            className="flex h-full transition-transform duration-1000 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {sliderImages.map((image, index) => (
              <div key={index} className="min-w-full h-full relative flex items-center justify-center">
                <img
                  src={image}
                  alt={`Luxury Candle ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl shadow-lg"
                />
                {/* Optional overlay */}
                {/* <div className="absolute inset-0 bg-black bg-opacity-2 rounded-xl"></div> */}
              </div>
            ))}
          </div>
        </div>

        {/* Slider Indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3 z-20">
          {sliderImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 border ${currentSlide === index
                ? 'bg-amber-600 border-amber-600 scale-125'
                : 'bg-transparent border-white hover:bg-white hover:bg-opacity-30'
                }`}
            />
          ))}
        </div>

        {/* Slide Progress Bar */}
        {/* <div className="absolute bottom-0 left-0 right-0 h-1 bg-gray-300">
          <div
            className="h-full bg-amber-600 transition-all duration-1000 ease-in-out"
            style={{ width: `${((currentSlide + 1) / sliderImages.length) * 100}%` }}
          ></div>
        </div> */}

        {/* Image Counter */}
        {/* <div className="absolute top-6 right-6 bg-white bg-opacity-90 rounded-full px-3 py-1 text-gray-700 text-sm font-medium shadow">
          {currentSlide + 1} / {sliderImages.length}
        </div> */}
      </section>


      {/* Hero2 Section */}
      <section className="min-h-screen bg-gradient-to-br from-amber-50 via-orange-50 to-yellow-50 flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto text-center space-y-8">

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-6xl md:text-8xl font-light text-gray-800 leading-tight">
              <span className="font-semibold text-amber-600 block">Ray Candles</span>
              <span className="text-4xl md:text-6xl text-gray-700 block mt-4">
                Illuminate Your World
              </span>
            </h1>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Discover our collection of handcrafted luxury candles that transform any space
            into a sanctuary of warmth and tranquility.
          </p>

          {/* Decorative Elements */}
          <div className="flex justify-center pt-12">
            <div className="flex space-x-2">
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
              <div className="w-2 h-2 bg-amber-500 rounded-full animate-pulse delay-75"></div>
              <div className="w-2 h-2 bg-amber-600 rounded-full animate-pulse delay-150"></div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="pt-12 flex flex-col items-center animate-bounce">
            <span className="text-gray-500 text-sm mb-2 font-light">Explore our candles</span>
            <ChevronDown className="w-6 h-6 text-amber-600" />
          </div>

        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Why Choose <span className="text-amber-600 font-semibold">Ray Candles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Every candle is a masterpiece, crafted with passion and the finest materials
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-100 text-amber-600 rounded-full mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              Featured <span className="text-amber-600 font-semibold">Collection</span>
            </h2>
            <p className="text-xl text-gray-600">Discover our most loved candles</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              {
                name: "Rose Dreams",
                price: "₹249", // ruppes sign
                image: "https://res.cloudinary.com/diivo2ggx/image/upload/pgvhl5up518iaqdolxeo.png?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              },
              {
                name: "Strawberry Bliss",
                price: "₹269",
                image: "https://res.cloudinary.com/diivo2ggx/image/upload/krp98s6yx6hh7i3qxlub.png?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              },
              {
                name: "Ocean Breeze",
                price: "₹199",
                image: "https://res.cloudinary.com/diivo2ggx/image/upload/wwieruvzwmxpwbebsarf.png?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
              }
            ].map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group cursor-pointer"
              >
                <div className="relative overflow-hidden rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{product.name}</h3>
                  <p className="text-amber-600 font-bold text-lg">{product.price}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Link
                to="/Candles"
                className="inline-flex items-center bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-amber-700 hover:shadow-xl group"
              >
                View All Candles
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-4">
              What Our <span className="text-amber-600 font-semibold">Customers Say</span>
            </h2>
            <p className="text-xl text-gray-600">Real reviews from real candle lovers</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div>
                    <h4 className="font-semibold text-gray-800">{testimonial.author}</h4>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-amber-600 to-orange-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-light mb-6">
              Ready to Transform Your Space?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Join thousands of satisfied customers who have discovered the magic of Ray Candles
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/Candles"
                  className="inline-flex items-center bg-white text-amber-600 px-8 py-4 rounded-full text-lg font-semibold transition-all hover:bg-gray-100 hover:shadow-xl group"
                >
                  Shop Now
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Link
                  to="/About"
                  className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium transition-all hover:bg-white hover:text-amber-600"
                >
                  Our Story
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;