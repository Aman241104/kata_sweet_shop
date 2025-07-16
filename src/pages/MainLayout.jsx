import { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MainLayout = ({ setSearchQuery, searchQuery }) => {
  const location = useLocation();

  // Clear search when navigating to non-search pages
  useEffect(() => {
    if (location.pathname !== '/sweets' && location.pathname !== '/') {
      setSearchQuery('');
    }
  }, [location.pathname, setSearchQuery]);

  return (
    <>
      <Navbar setSearchQuery={setSearchQuery} />
      <main className="p-4">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;