import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import MenuItem from "../components/MenuItem";
import { getAllMeals } from "../api/api";
import LoadingScreen from "../components/LoadingScreen";

function MenuList() {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError(null);
        const meals = await getAllMeals();
        if (!mounted) return;
        setItems(meals);
      } catch (err) {
        if (!mounted) return;
        setError(err.message || "Error");
      } finally {
        if (!mounted) return;
        setIsLoading(false);
      }
    }
    load();
    return () => { mounted = false };
  }, []);

  return (
    <>
      <NavBar />
      <main>
        <h1>Menu</h1>

        {isLoading && <LoadingScreen />}
        {error && <p className="error">Error: {error}</p>}

        {!isLoading && !error && (
          <section className="grid">
            {items.map(item => <MenuItem key={item.id} {...item} />)}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default MenuList;