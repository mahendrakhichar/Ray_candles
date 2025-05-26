import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const GiftCard = ({ gift }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(`/gifts/${gift.id}`)}
    >
      <img src={gift.image} alt={gift.name} className="w-200 h-60 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-medium">{gift.name}</h3>
        <p className="text-gray-600">₹{gift.price}</p>
      </div>
    </motion.div>
  );
};

export default GiftCard;
