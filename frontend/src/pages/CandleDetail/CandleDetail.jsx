import { useParams } from 'react-router-dom';
import candlesData from '../../data/candles';
import { motion } from 'framer-motion';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';

const CandleDetail = () => {
  const { id } = useParams();
  const candle = candlesData.find((item) => item.id === parseInt(id));

  if (!candle) return <div className="text-center mt-10">Candle Not Found</div>;

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
          {candle.image.map((img, index) => (
            <SwiperSlide key={index}>
              <img
                src={img}
                alt={`${candle.name} ${index}`}
                className="rounded-xl w-full h-[400px] object-cover"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Candle Info Section */}
      <div className="flex-1 space-y-4">
        <h2 className="text-4xl font-bold text-amber-800">{candle.name}</h2>
        <p className="text-gray-500 text-lg">Fragrance: {candle.name}</p>
        <p className="text-gray-600">Weight: 200g</p>
        <p className="text-gray-600">Burn Duration: 30 hours</p>
        <p className="text-2xl font-semibold text-green-700">₹{candle.price}</p>

        <div className="flex gap-4 pt-4">
          <button className="bg-amber-700 text-white px-6 py-2 rounded-lg hover:bg-amber-800 transition">
            Add to Cart
          </button>
          <button className="border-2 border-amber-700 text-amber-700 px-6 py-2 rounded-lg hover:bg-amber-700 hover:text-white transition">
            Buy Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CandleDetail;
