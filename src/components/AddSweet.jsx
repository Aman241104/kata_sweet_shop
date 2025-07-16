import React, { useState } from 'react';

function AddSweet({ onAdd }) {
  const [sweet, setSweet] = useState({
    name: '',
    category: '',
    price: '',
    quantity: ''
  });

  const handleChange = (e) => {
    setSweet({
      ...sweet,
      [e.target.name]: e.target.value
    });
  };

  const handleAdd = () => {
    if (!sweet.name || !sweet.category || !sweet.price || !sweet.quantity) {
      alert("Please fill in all fields");
      return;
    }

    const newSweet = {
      ...sweet,
      price: Number(sweet.price),
      quantity: Number(sweet.quantity)
    };

    onAdd(newSweet);
    setSweet({ name: '', category: '', price: '', quantity: '' });
  };

  return (
    <div>
      <input name="name" placeholder="Name" value={sweet.name} onChange={handleChange} />
      <input name="category" placeholder="Category" value={sweet.category} onChange={handleChange} />
      <input name="price" placeholder="Price" type="number" value={sweet.price} onChange={handleChange} />
      <input name="quantity" placeholder="Quantity" type="number" value={sweet.quantity} onChange={handleChange} />
      <button onClick={handleAdd}>Add Sweet</button>
    </div>
  );
}

export default AddSweet;
