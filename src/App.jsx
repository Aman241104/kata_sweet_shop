import { useEffect, useState } from 'react';
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainLayout from './pages/MainLayout';
import SweetsPage from './pages/SweetsPage';
import NotFound from './pages/NotFound';

const router = createBrowserRouter (
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />} >
      <Route index element={<HomePage />} />
      <Route path='/sweets' element={<SweetsPage />} />
      <Route path='*' element={<NotFound />} />
    </Route>)
);

const App = () => {
  return <RouterProvider router={router} />;
};

// function App() {
//   const [sweets, setSweets] = useState([]);

//   // Fetch sweets from backend
//   useEffect(() => {
//     fetch('http://localhost:3001/sweets')
//       .then(res => res.json())
//       .then(data => setSweets(data));
//   }, []);

//   // Add new sweet (POST to server)
//   const handleAddSweet = async (newSweet) => {
//   try {
//     const res = await fetch('http://localhost:3001/sweets', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify(newSweet),
//     });

//     if (!res.ok) throw new Error("Failed to add sweet");

//     const savedSweet = await res.json();
//     setSweets([...sweets, savedSweet]);
//     } catch (err) {
//       console.error('Error adding sweet:', err);
//     }
//   };


//   return (
//     <div className="App">
//       <Navbar />
//       <Hero title="Have A Sweet Day" subtitle="For all Your Sweet cravings"  />
//       <HomeCards />
//       <SweetListings sweets={sweets} />
//       <ViewAllSweeets />
//       <AddSweet onAdd={handleAddSweet} />
//       <ul>
//         {sweets.map((s) => (
//           <li key={s.id}>
//             {s.name} ({s.category}) - ₹{s.price} × {s.quantity}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

export default App;
