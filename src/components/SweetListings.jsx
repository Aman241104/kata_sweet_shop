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
  }, []);

  // 🔍 Filter by searchQuery
  const filteredSweets = sweets.filter((sweet) =>
    sweet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? 'Our Favourites' : 'Browse Sweets'}
        </h2>

        {loading ? (
          <Spinner loading={loading} />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {filteredSweets.map((item) => (
              <SweetCard key={item.id} items={item} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
