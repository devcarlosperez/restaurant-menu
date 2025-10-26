import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import MenuItem from "../components/MenuItem";
import { getMealsByCategory } from "../api/api";

export default function CategoryMeals() {
  const { categoryName } = useParams();
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError(null);
        const meals = await getMealsByCategory(categoryName); // src/api/api.js -> getMealsByCategory
        if (!mounted) return;
        setItems(meals);
      } catch (err) {
        if (!mounted) return;
        setError(err?.message || "Error loading category");
      } finally {
        if (!mounted) return;
        setIsLoading(false);
      }
    }
    load();
    return () => { mounted = false };
  }, [categoryName]);

  return (
    <>
      <NavBar />
      <main style={{ padding: "1rem", maxWidth: 1100, margin: "0 auto" }}>
        <h1>{categoryName}</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p className="error">Error: {error}</p>}
        {!isLoading && !error && (
          <section className="grid">
            {items.map(i => <MenuItem key={i.id} {...i} />)}
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}