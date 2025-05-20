import { useParams } from 'react-router-dom';
import giftsData from '../../data/gifts'; // Assuming you have a giftsData.js file with gift data
import { useState } from 'react';
import { motion } from 'framer-motion';

const GiftDetail = () => {
  const { id } = useParams();
  const gift = giftsData.find((g) => g.id === parseInt(id));
  const [message, setMessage] = useState('');

  if (!gift) return <div>Gift Not Found</div>;

  return (
    <motion.div
      className="p-6 flex flex-col md:flex-row gap-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="flex-1">
        <img src={gift.image} alt={gift.name} className="rounded-xl w-full" />
      </div>
      <div className="flex-1">
        <h2 className="text-3xl font-semibold mb-2">{gift.name}</h2>
        <p className="mb-2">Price: ₹{gift.price}</p>
        <p className="mb-4">Send a message with this gift:</p>
        <textarea
          placeholder="Type your message for the card..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full p-2 border border-gray-300 rounded mb-4"
          rows={3}
        />
        <div className="flex gap-4">
          <button className="border-2 border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white">
            Add to Cart
          </button>
          <button className="border-2 border-gray-700 text-gray-700 px-4 py-2 rounded hover:bg-gray-700 hover:text-white">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default GiftDetail;
