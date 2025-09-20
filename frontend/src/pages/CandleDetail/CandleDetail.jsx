import { useParams, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../components/CartContext/CartContext";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const CandleDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [candle, setCandle] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch single candle by id
  useEffect(() => {
    const fetchCandle = async () => {
      try {
        const res = await fetch(`/api/products/${id}`);
        const data = await res.json();
        if (res.ok) {
          // Normalize imageUrls for backward compatibility
          const product = {
            ...data.product,
            imageUrls: Array.isArray(data.product.imageUrls)
              ? data.product.imageUrls
              : data.product.imageUrl
              ? [data.product.imageUrl]
              : [],
          };
          setCandle(product);
        } else {
          setCandle(null);
        }
      } catch (error) {
        console.error("Error fetching candle:", error);
        setCandle(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCandle();
  }, [id]);

  if (loading) {
    return (
      <div className="text-center mt-10 text-gray-600">Loading candle...</div>
    );
  }

  if (!candle) {
    return <div className="text-center mt-10">Candle Not Found</div>;
  }

  const handleAddToCart = () => {
    addToCart(candle);
    navigate("/cart");
  };

  const handleBuyNow = () => {
    addToCart({ ...candle, quantity: 1 });
    navigate("/cart");
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
          {candle.imageUrls.length > 0 ? (
            candle.imageUrls.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`${candle.name} ${index + 1}`}
                  className="rounded-xl w-full h-[500px] object-cover"
                />
              </SwiperSlide>
            ))
          ) : (
            <SwiperSlide>
              <div className="rounded-xl w-full h-[400px] bg-gray-200 flex items-center justify-center">
                <span className="text-gray-500">No images available</span>
              </div>
            </SwiperSlide>
          )}
        </Swiper>
      </div>

      {/* Candle Info Section */}
      <div className="flex-1 space-y-4">
        <h2 className="text-4xl font-bold text-amber-800">{candle.name}</h2>
        <p className="text-gray-600">{candle.description}</p>
        <p className="text-2xl font-semibold text-green-700">₹{candle.price}</p>

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

export default CandleDetail;