import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';

const MainLayout = ({ setSearchQuery }) => {
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
