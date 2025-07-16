import React from 'react';
import { useState, useEffect } from 'react';
import SweetCard from './SweetCard';
import Spinner from './Spinner';

const SweetListings = ({ isHome = false, searchQuery = '' }) => {
  const [sweets, setSweets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSweets = async () => {
      const apiURL = isHome
        ? "http://localhost:3001/sweets?_limit=3"
        : "http://localhost:3001/sweets";
      
      try {
        const res = await fetch(apiURL);
        const data = await res.json();
        setSweets(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchSweets();
  }, [isHome]);

  // Filter by searchQuery
  const filteredSweets = sweets.filter((sweet) =>
    sweet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Our Favourites' : 'Browse Sweets'}
        </h2>
        
        {/* Show search info when filtering */}
        {searchQuery && (
          <div className="text-center mb-4">
            <p className="text-gray-600">
              Showing results for: <span className="font-semibold">"{searchQuery}"</span>
            </p>
          </div>
        )}
        
        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredSweets.length > 0 ? (
              filteredSweets.map((item) => (
                <SweetCard key={item.id} items={item} />
              ))
            ) : searchQuery ? (
              <div className="col-span-full text-center py-8">
                <p className="text-gray-600 text-lg">
                  No sweets found matching "{searchQuery}"
                </p>
              </div>
            ) : (
              sweets.map((item) => (
                <SweetCard key={item.id} items={item} />
              ))
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default SweetListings;