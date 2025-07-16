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

  const handleAdd = (e) => {
    e.preventDefault();

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
    <section className='bg-indigo-50'>
      <div className='container m-auto max-w-2xl py-24'>
        <div className='bg-white px-6 py-8 mb-4 shadow-md rounded-md border m-4 md:m-0'>
          <form onSubmit={handleAdd}>
            <h2 className='text-3xl text-center font-semibold mb-6'>Add Sweet</h2>

            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                Name:
              </label>
              <input 
                name="name"
                id="name"
                type='text'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Kaju Katli'
                required
                value={sweet.name}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='category' className='block text-gray-700 font-bold mb-2'>
                Category:
              </label>
              <input 
                name="category"
                id="category"
                type='text'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. Nut-Based'
                required
                value={sweet.category}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='price' className='block text-gray-700 font-bold mb-2'>
                Price:
              </label>
              <input 
                name="price"
                id="price"
                type='number'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. 50'
                required
                value={sweet.price}
                onChange={handleChange}
              />
            </div>

            <div className='mb-4'>
              <label htmlFor='quantity' className='block text-gray-700 font-bold mb-2'>
                Quantity:
              </label>
              <input 
                name="quantity"
                id="quantity"
                type='number'
                className='border rounded w-full py-2 px-3 mb-2'
                placeholder='eg. 10'
                required
                value={sweet.quantity}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className='bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded-full w-full focus:outline-none focus:shadow-outline'
            >
              Add Sweet
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default AddSweet;
