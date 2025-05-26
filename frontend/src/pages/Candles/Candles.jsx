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
    <div className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-center mb-6 sm:mb-8 tracking-wide text-gray-800">
          Our Candle Collection
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sortedCandles.map((candle) => (
            <div key={candle.id} className="flex justify-center">
              <CandleCard candle={candle} className="max-w-[200px] sm:max-w-[250px]" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Candles;