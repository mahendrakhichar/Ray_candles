import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CartContext } from '../../components/CartContext/CartContext';

const OrderDetails = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart } = useContext(CartContext);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    city: '',
    state: '',
    pinCode: '',
    phone: '',
  });
  const [error, setError] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [loading, setLoading] = useState(false);

  // Calculate total
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Prepare order details
  const orderDetails = cartItems
    .map(item => {
      const itemDetails = `${item.name} (Qty: ${item.quantity}) - ₹${(item.price * item.quantity).toFixed(2)}`;
      return item.message ? `${itemDetails}\nMessage: ${item.message}` : itemDetails;
    })
    .join('\n');
  const message = `Items:\n${orderDetails}\nTotal: ₹${total.toFixed(2)}\nShipping Address:\nName: ${formData.name}\nAddress: ${formData.address}\nCity: ${formData.city}\nState: ${formData.state}\nPin Code: ${formData.pinCode}\nPhone: ${formData.phone}`;

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setError(null);

    // Validate form
    if (!formData.name || !formData.address || !formData.city || !formData.state || !formData.pinCode || !formData.phone) {
      setError('Please fill in all address fields');
      return;
    }

    // Show confirmation modal
    setShowConfirmation(true);
  };

  // Copy to clipboard and redirect to Instagram
  const confirmCheckout = async () => {
    setLoading(true);
    try {
      // Copy order details and address to clipboard
      await navigator.clipboard.writeText(message);
      // Clear cart
      clearCart();
      setShowConfirmation(false);
      // Redirect to Instagram in a new tab
      const instagramHandle = 'rayofcandles';
      const instagramUrl = `https://www.instagram.com/${instagramHandle}`;
      window.open(instagramUrl, '_blank');
    } catch (err) {
      setError('Failed to copy order details. Please copy manually.');
      setShowConfirmation(false);
    } finally {
      setLoading(false);
    }
  };

  if (cartItems.length === 0 && !showConfirmation) {
    return (
      <motion.div
        className="p-6 max-w-6xl mx-auto text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <h2 className="text-4xl font-bold text-amber-800 mb-6">Your Cart is Empty</h2>
        <a
          href="/"
          className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition"
        >
          Continue Shopping
        </a>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="p-6 max-w-6xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {showConfirmation ? (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <motion.div
            className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
          >
            <h3 className="text-2xl font-bold text-amber-800 mb-4">Order Confirmation</h3>
            <p className="text-gray-600 whitespace-pre-line">{message}</p>
            <p className="text-gray-600 mt-4">
              Click below to copy these details and contact{' '}
              <a
                href="https://www.instagram.com/rayofcandles"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-700 underline"
              >
                @sentedcandles_by_ray
              </a>{' '}
              via DM to complete your order.
            </p>
            <div className="flex gap-4 mt-6">
              <button
                onClick={confirmCheckout}
                disabled={loading}
                className={`bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition ${
                  loading ? 'opacity-50 cursor-not-allowed' : ''
                }`}
              >
                {loading ? 'Processing...' : 'Copy & Contact on Instagram'}
              </button>
              <button
                onClick={() => setShowConfirmation(false)}
                className="border-2 border-amber-700 text-amber-700 px-6 py-2 rounded-lg hover:bg-amber-700 hover:text-white transition"
              >
                Cancel
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <>
          <h2 className="text-4xl font-bold text-amber-800 mb-6">Enter Shipping Details</h2>
          {error && <p className="text-red-600 mb-4">{error}</p>}
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div>
              <label className="block text-gray-600">Full Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-amber-700"
                placeholder="Enter your full name"
              />
            </div>
            <div>
              <label className="block text-gray-600">Address</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-amber-700"
                placeholder="Enter your address"
              />
            </div>
            <div>
              <label className="block text-gray-600">City</label>
              <input
                type="text"
                name="city"
                value={formData.city}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-amber-700"
                placeholder="Enter your city"
              />
            </div>
            <div>
              <label className="block text-gray-600">State</label>
              <input
                type="text"
                name="state"
                value={formData.state}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-amber-700"
                placeholder="Enter your state"
              />
            </div>
            <div>
              <label className="block text-gray-600">Pin Code</label>
              <input
                type="text"
                name="pinCode"
                value={formData.pinCode}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-amber-700"
                placeholder="Enter your pin code"
              />
            </div>
            <div>
              <label className="block text-gray-600">Phone Number</label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="w-full p-2 border rounded-lg focus:outline-none focus:border-amber-700"
                placeholder="Enter your phone number"
              />
            </div>
            <button
              type="submit"
              className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition w-full"
            >
              Proceed
            </button>
          </form>
        </>
      )}
    </motion.div>
  );
};

export default OrderDetails;