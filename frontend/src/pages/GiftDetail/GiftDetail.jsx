import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect, useContext } from 'react';
import { motion } from 'framer-motion';
import { CartContext } from '../../components/CartContext/CartContext';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const GiftDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);
  const [gift, setGift] = useState(null);
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchGift = async () => {
      try {
        const response = await fetch(`/api/products/${id}`);
        const data = await response.json();

        // ✅ store only product part
        if (data.product.type === 'gift') {
          setGift(data.product);
        } else {
          setGift(null);
        }
      } catch (error) {
        console.error('Error fetching gift:', error);
        setGift(null);
      }
    };
    fetchGift();
  }, [id]);

  if (!gift) return <div className="text-center mt-10">Gift Not Found</div>;

  const handleAddToCart = () => {
    addToCart({ ...gift, message }); // ✅ only product + message
    navigate('/cart');
  };

  const handleBuyNow = () => {
    addToCart({ ...gift, message, quantity: 1 }); // ✅ only product + message
    navigate('/cart');
  };

  return (
    <motion.div
      className="p-6 flex flex-col md:flex-row gap-10 items-start max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Image Slider Section */}
      <div className="flex-1 w-full md:max-w-md">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
          className="rounded-xl shadow-lg"
        >
          {Array.isArray(gift.imageUrls) && gift.imageUrls.length > 0 ? (
            gift.imageUrls.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${gift.name} ${index}`}
                  className="rounded-xl w-full h-[500px] object-cover"
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <img
                src={gift.imageUrls?.[0] || ''}
                alt={gift.name}
                className="rounded-xl w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Gift Info Section */}
      <div className="flex-1 space-y-4">
        <h2 className="text-4xl font-bold text-amber-800">{gift.name}</h2>
        <p className="text-gray-500 text-lg">Gift Set</p>
        <p className="text-gray-500 text-lg">{gift.description}</p>
        <p className="text-2xl font-semibold text-green-700">₹{gift.price}</p>

        <p className="text-gray-600">Send a message with this gift:</p>
        <textarea
          placeholder="Type your message for the card..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:border-amber-700"
          rows={3}
        />

        <div className="flex gap-4 pt-4">
          <button
            onClick={handleAddToCart}
            className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition"
          >
            Add to Cart
          </button>
          <button
            onClick={handleBuyNow}
            className="border-2 border-amber-700 text-amber-700 px-6 py-2 rounded-lg hover:bg-amber-700 hover:text-white transition"
          >
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GiftDetail;
