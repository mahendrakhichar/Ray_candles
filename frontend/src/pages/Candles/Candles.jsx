import { useState } from 'react';
import candlesData from '../../data/candles'; // Assuming you have a candlesData.js file with candle data
import CandleCard from '../../components/CandleCard/CandleCard'; // Assuming you have a CandleCard component

const sortCandles = (candles, sortBy) => {
  switch (sortBy) {
    case 'high':
      return [...candles].sort((a, b) => b.price - a.price);
    case 'low':
      return [...candles].sort((a, b) => a.price - b.price);
    case 'best':
      return [...candles].sort((a, b) => b.sales - a.sales);
    default:
      return candles;
  }
};

const Candles = () => {
  const [sortBy, setSortBy] = useState('best');

  const sortedCandles = sortCandles(candlesData, sortBy);

  return (
    <div className="p-6 bg-gray-50"> {/* Added subtle background for luxury */}
      <h2 className="text-3xl font-playfair font-bold text-center mb-8 tracking-wide text-gray-800">
        Our Candle Collection
      </h2>
      <div className="font-body">
    </div>

      <div className="flex justify-center mb-10">
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border border-gray-300 px-6 py-3 rounded-lg text-lg font-raleway font-light shadow-sm focus:ring-2 focus:ring-gray-400 transition"
        >
          <option value="best">Best Selling</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 m-20">
        {sortedCandles.map((candle) => (
          <CandleCard key={candle.id} candle={candle} />
        ))}
      </div>
    </div>

  );
};

export default Candles;
