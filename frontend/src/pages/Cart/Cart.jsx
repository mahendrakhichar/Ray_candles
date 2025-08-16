import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { CartContext } from '../../components/CartContext/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeItem, clearCart, cartCount } = useContext(CartContext);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Navigate to OrderDetails page
  const checkout = () => {
    setLoading(true);
    setError(null);

    // Check if cart is empty
    if (cartItems.length === 0) {
      setError('Cart is empty');
      setLoading(false);
      return;
    }

    // Navigate to order details page
    navigate('/order-details');
    setLoading(false);
  };

  if (cartItems.length === 0) {
    return (
      <motion.div
        className="p-6 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-amber-800 mb-6">Your Cart is Empty</h2>
        <Link
          to="/"
          className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition"
        >
          Continue Shopping
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <h2 className="text-4xl font-bold text-amber-800 mb-6">Your Cart</h2>
      {error && <p className="text-red-600 mb-4">{error}</p>}
      <div className="flex flex-col gap-6">
        {cartItems.map(item => (
          <div key={item.id} className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-lg">
            {/* Item Image */}
            <div className="w-full md:w-32">
              <Swiper
                modules={[Navigation]}
                navigation
                spaceBetween={20}
                slidesPerView={1}
                className="rounded-lg"
              >
                {item.image.map((img, index) => (
                  <SwiperSlide key={index}>
                    <img
                      src={img}
                      alt={`${item.name} ${index}`}
                      className="w-full h-24 rounded-lg object-cover"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            {/* Item Details */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
              <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item.id, -1)}
                  className="bg-amber-700 text-white px-2 py-1 rounded-lg hover:bg-amber-800 transition"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="text-gray-600">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item.id, 1)}
                  className="bg-amber-700 text-white px-2 py-1 rounded-lg hover:bg-amber-800 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-600 ml-4 hover:text-red-800"
                >
                  Remove
                </button>
              </div>
            </div>
            <p className="text-lg font-semibold text-green-700">
              ₹{(item.price * item.quantity).toFixed(2)}
            </p>
          </div>
        ))}
      </div>
      <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <h3 className="text-2xl font-semibold text-amber-800">Total: ₹{total.toFixed(2)}</h3>
        <button
          onClick={checkout}
          disabled={loading}
          className={`bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition ${
            loading ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {loading ? 'Processing...' : 'Proceed to Checkout'}
        </button>
      </div>
    </motion.div>
  );
};

export default Cart;