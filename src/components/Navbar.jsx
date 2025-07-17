import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/ChatGPT Image Jul 17, 2025, 12_52_15 PM.png'

const Navbar = ({ setSearchQuery }) => {
  const [input, setInput] = useState('');

  const linkclass = ({ isActive }) =>
    isActive
      ? 'inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 bg-gray-100 transition-all duration-200'
      : 'inline-block rounded-lg px-2 py-1 text-sm font-medium text-gray-900 hover:bg-gray-100 transition-all duration-200';

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(input);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-30 mx-auto w-full max-w-screen-md border border-gray-100 bg-white/80 py-3 shadow backdrop-blur-lg md:top-6 md:rounded-3xl lg:max-w-screen-lg">
      <div className="px-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex shrink-0 items-center gap-2">
            <NavLink to="/" className="flex items-center">
              <img src={logo} alt="KATA Logo" className="h-13 pr-5 w-auto object-contain" />
              {/* <span className="text-xl font-bold text-gray-900">Sweet Shop</span> */}

            </NavLink>
            <NavLink to="/" className={linkclass}>Home</NavLink>
            <NavLink to="/sweets" className={linkclass}>Sweet</NavLink>
            <NavLink to="/add-sweets" className={linkclass}>Add Sweet</NavLink>
          </div>

          {/* Search Form */}
          <form onSubmit={handleSubmit} className="hidden md:flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search sweets..."
              className="rounded-md px-3 py-1 text-sm text-gray-900 border border-gray-300 shadow-sm"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
