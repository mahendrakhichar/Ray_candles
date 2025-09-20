import { useState, useEffect } from "react";
import GiftCard from "../../components/GiftCard/GiftCard";

const sortGifts = (gifts, sortBy) => {
  switch (sortBy) {
    case "high":
      return [...gifts].sort((a, b) => b.price - a.price);
    case "low":
      return [...gifts].sort((a, b) => a.price - b.price);
    case "best":
      return [...gifts].sort((a, b) => b.sales - a.sales);
    default:
      return gifts;
  }
};

const Gifts = () => {
  const [gifts, setGifts] = useState([]);
  const [sortBy, setSortBy] = useState("best");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchGifts = async () => {
      try {
        const res = await fetch("/api/products");
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const data = await res.json();
        const giftData = data.products.filter(
          (product) => product.type === "gift"
        );
        setGifts(giftData);
      } catch (error) {
        console.error("Error fetching gifts:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchGifts();
  }, []);

  const sortedGifts = sortGifts(gifts, sortBy);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-60">
        <p className="text-gray-600">Loading gifts...</p>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-center mb-6 sm:mb-8 tracking-wide text-gray-800">
          Our Gift Collection
        </h2>

        <div className="flex justify-center mb-6 sm:mb-10">
          <select
            onChange={(e) => setSortBy(e.target.value)}
            className="border border-gray-300 px-4 py-2 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-lg font-raleway font-light shadow-sm focus:ring-2 focus:ring-amber-400 transition w-full sm:w-auto max-w-xs"
          >
            <option value="best">Best Selling</option>
            <option value="low">Price: Low to High</option>
            <option value="high">Price: High to Low</option>
          </select>
        </div>

        {sortedGifts.length === 0 ? (
          <p className="text-center text-gray-600">No gifts available</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {sortedGifts.map((gift) => (
              <div key={gift._id} className="flex justify-center">
                <GiftCard gift={gift} className="max-w-[200px] sm:max-w-[250px]" />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Gifts;
