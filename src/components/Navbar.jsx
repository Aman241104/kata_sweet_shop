const Navbar = ({ setSearchQuery }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();          // Prevents page reload
    setSearchQuery(input);       // Sends query to parent
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

          {/* ✅ Search Form */}
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search sweets..."
              className="rounded-md px-3 py-1"
              value={input}
              onChange={(e) => setInput(e.target.value)}
            />
          </form>
        </div>
      </div>
    </nav>
  );
};
