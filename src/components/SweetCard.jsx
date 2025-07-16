import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const SweetCard = ({ items }) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    if (count < items.quantity) {
      setCount(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        {/* Sweet Name */}
        <div className="mb-4">
          <h3 className="text-xl font-bold text-indigo-600">{items.name}</h3>
        </div>

        {/* Sweet Category */}
        <div className="mb-2 text-gray-700">
          <strong>Category:</strong> {items.category}
        </div>

        {/* Sweet Price */}
        <div className="mb-2 text-gray-700">
          <strong>Price:</strong> ₹{items.price}
        </div>

        {/* Quantity Available */}
        <div className="mb-4 text-gray-700">
          <strong>Available:</strong> {items.quantity}
        </div>

        {/* Quantity Selector */}
        <div className="flex items-center gap-2 mb-4">
          <button
            onClick={decrement}
            className={`px-3 py-1 rounded bg-red-500 text-white ${count === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={count === 0}
          >
            -
          </button>
          <span className="text-lg font-medium">{count}</span>
          <button
            onClick={increment}
            className={`px-3 py-1 rounded bg-green-500 text-white ${count === items.quantity ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={count === items.quantity}
          >
            +
          </button>
        </div>

        {/* View More or Checkout Link */}
        <Link 
          to={`/sweets/${items.id}`}
          className='block text-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm'
        >
          purchase
        </Link>
      </div>
    </div>
  );
};

export default SweetCard;
