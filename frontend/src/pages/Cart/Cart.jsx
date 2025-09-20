import { useContext, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
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
console.log(cartItems)
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
          <div key={item._id} className="flex flex-col md:flex-row items-center gap-6 p-4 bg-white rounded-xl shadow-lg">
            {/* Item Image */}
            <div className="w-full md:w-32">
              <img
                src={Array.isArray(item.imageUrls) ? item.imageUrls[0] : item.imageUrls || ''}
                alt={item.name}
                className="w-full h-24 rounded-lg object-cover"
              />
            </div>
            {/* Item Details */}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-amber-800">{item.name}</h3>
              <p className="text-gray-600">{item.type === 'gift' ? 'Gift Set' : 'Candle'}</p>
              <p className="text-gray-600">₹{item.price.toFixed(2)}</p>
              {item.message && item.type === 'gift' && (
                <p className="text-gray-500 text-sm mt-1">Message: {item.message}</p>
              )}
              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => updateQuantity(item._id, -1)}
                  className="bg-amber-700 text-white px-2 py-1 rounded-lg hover:bg-amber-800 transition"
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span className="text-gray-600">{item.quantity}</span>
                <button
                  onClick={() => updateQuantity(item._id, 1)}
                  className="bg-amber-700 text-white px-2 py-1 rounded-lg hover:bg-amber-800 transition"
                >
                  +
                </button>
                <button
                  onClick={() => removeItem(item._id)}
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