import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const CandleCard = ({ candle }) => {
  const navigate = useNavigate();

  return (
    <motion.div
      className="bg-white border border-gray-200 rounded-lg overflow-hidden cursor-pointer hover:shadow-xl transition duration-300"
      whileHover={{ scale: 1.05 }}
      onClick={() => navigate(`/candles/${candle.id}`)}
    >
      <img
        src={candle.image[0]}
        alt={candle.name}
        className="w-200 h-65 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-medium">{candle.name}</h3>
        <p className="text-gray-600">₹{candle.price}</p>
        <p className="text-red-500">{candle.note} </p>
      </div>
    </motion.div>
  );
};

export default CandleCard;
