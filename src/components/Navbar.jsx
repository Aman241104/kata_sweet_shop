import React from 'react';
import { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = ({ setSearchQuery }) => {
  const [input, setInput] = useState('');
  
  // Define linkclass for navigation links
  const linkclass = ({ isActive }) =>
    isActive
      ? 'text-white bg-indigo-900 hover:bg-indigo-900 hover:text-white rounded-md px-3 py-2 text-sm font-medium'
      : 'text-white hover:bg-indigo-600 hover:text-white rounded-md px-3 py-2 text-sm font-medium';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(input);
  };

  return (
    <nav className="bg-indigo-700 border-b border-indigo-500">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-4">
            <NavLink className="text-white text-2xl font-bold" to="/">
              Sweet Shop
            </NavLink>
            <NavLink to="/" className={linkclass}>Home</NavLink>
            <NavLink to="/sweets" className={linkclass}>Sweet</NavLink>
            <NavLink to="/add-sweets" className={linkclass}>Add Sweet</NavLink>
          </div>
          
          {/* Search Form */}
          <form onSubmit={handleSubmit} className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search sweets..."
              className="rounded-md px-3 py-1 text-gray-900"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1 rounded-md"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;