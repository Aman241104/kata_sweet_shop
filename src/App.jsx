import { useState } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import SweetsPage from './pages/SweetsPage';
import AddSweet from './pages/AddSweet';
import NotFound from './pages/NotFound';

function App() {
  const [searchQuery, setSearchQuery] = useState('');

  const handleAddSweet = async (newSweet) => {
    try {
      const res = await fetch('http://localhost:3001/sweets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(newSweet),
      });
      if (!res.ok) throw new Error('Failed to add sweet');
      const savedSweet = await res.json();
      console.log('Sweet added:', savedSweet);
    } catch (err) {
      console.error('Error:', err);
    }
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route 
        path='/' 
        element={<MainLayout setSearchQuery={setSearchQuery} searchQuery={searchQuery} />}
      >
        <Route index element={<HomePage searchQuery={searchQuery} />} />
        <Route path='/sweets' element={<SweetsPage searchQuery={searchQuery} />} />
        <Route path='/add-sweets' element={<AddSweet onAdd={handleAddSweet} />} />
        <Route path='*' element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;