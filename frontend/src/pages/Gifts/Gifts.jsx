import { useState } from 'react';
import giftsData from '../../data/gifts'; // Assuming you have a giftsData.js file with gift data
import GiftCard from '../../components/GiftCard/GiftCard'; // Assuming you have a GiftCard component

const sortGifts = (gifts, sortBy) => {
  switch (sortBy) {
    case 'high':
      return [...gifts].sort((a, b) => b.price - a.price);
    case 'low':
      return [...gifts].sort((a, b) => a.price - b.price);
    case 'best':
      return [...gifts].sort((a, b) => b.sales - a.sales);
    default:
      return gifts;
  }
};

const Gifts = () => {
  const [sortBy, setSortBy] = useState('best');
  const sortedGifts = sortGifts(giftsData, sortBy);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Our Gift Collection</h2>
      <div className="flex justify-end mb-6">
        <select
          onChange={(e) => setSortBy(e.target.value)}
          className="border px-4 py-2 rounded"
        >
          <option value="best">Best Selling</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedGifts.map((gift) => (
          <GiftCard key={gift.id} gift={gift} />
        ))}
      </div>
    </div>
  );
};

export default Gifts;
