import React, { useState } from 'react';

const SweetCard = ({ items, onDelete }) => {
  const [count, setCount] = useState(0);
  const [quantityLeft, setQuantityLeft] = useState(items.quantity);
  const [isDeleted, setIsDeleted] = useState(false);

  const increment = () => {
    if (count < quantityLeft) {
      setCount(prev => prev + 1);
    }
  };

  const decrement = () => {
    if (count > 0) {
      setCount(prev => prev - 1);
    }
  };

  const handlePurchase = async () => {
    if (count === 0) {
      alert("Please select at least one item to purchase.");
      return;
    }

    const updatedQuantity = quantityLeft - count;

    try {
      if (updatedQuantity === 0) {
        // Delete item if quantity is 0
        const delRes = await fetch(`http://localhost:3001/sweets/${items.id}`, {
          method: 'DELETE'
        });

        if (!delRes.ok) throw new Error("Failed to delete sweet");

        setIsDeleted(true);
        alert("Purchase Done!");
        if (onDelete) onDelete(items.id); // notify parent
        return;
      }

      // Otherwise update quantity
      const res = await fetch(`http://localhost:3001/sweets/${items.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...items,
          quantity: updatedQuantity
        })
      });

      if (!res.ok) throw new Error("Failed to update quantity");

      setQuantityLeft(updatedQuantity);
      setCount(0);
      alert("Purchase successful!");
    } catch (err) {
      console.error("Error:", err);
      alert("Error processing your request.");
    }
  };

  if (isDeleted) return null;

  return (
    <div className="bg-white rounded-xl shadow-md relative">
      <div className="p-4">
        <div className="mb-4">
          <h3 className="text-xl font-bold text-indigo-600">{items.name}</h3>
        </div>

        <div className="mb-2 text-gray-700">
          <strong>Category:</strong> {items.category}
        </div>

        <div className="mb-2 text-gray-700">
          <strong>Price:</strong> ₹{items.price}
        </div>

        <div className="mb-4 text-gray-700">
          <strong>Available:</strong> {quantityLeft}
        </div>

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
            className={`px-3 py-1 rounded bg-green-500 text-white ${count === quantityLeft ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={count === quantityLeft}
          >
            +
          </button>
        </div>

        <button
          onClick={handlePurchase}
          className='block text-center bg-indigo-500 hover:bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm w-full'
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default SweetCard;
