import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import LoadingScreen from "../components/LoadingScreen";

function Categories() {
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setIsLoading(true);
        const res = await fetch('https://www.themealdb.com/api/json/v1/1/categories.php');
        if (!res.ok) throw new Error('Error fetching categories');
        const data = await res.json();
        if (!mounted) return;
        setCats(data.categories || []);
      } catch (err) {
        if (!mounted) return;
        setError(err?.message || 'Error');
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
      <main style={{ padding: 16, maxWidth: 1100, margin: "0 auto" }}>
        <h1>Categories</h1>
        {isLoading && <LoadingScreen />}
        {error && <p className="error">Error: {error}</p>}
        {!isLoading && !error && (
          <div className="grid">
            {cats.map(cat => (
              <Link key={cat.idCategory} to={`/categories/${encodeURIComponent(cat.strCategory)}`}>
                <article className="card">
                  <img src={cat.strCategoryThumb} alt={cat.strCategory} className="card-img" />
                  <h3 className="card-title">{cat.strCategory}</h3>
                  <p className="card-category">{cat.strCategoryDescription?.slice(0, 80)}...</p>
                </article>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}

export default Categories;