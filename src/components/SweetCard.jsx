import React from 'react';

const SweetCard = ({ items }) => {
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
        <div className="mb-2 text-gray-700">
          <strong>Quantity Available:</strong> {items.quantity}
        </div>
      </div>
    </div>
  );
};

export default SweetCard;
