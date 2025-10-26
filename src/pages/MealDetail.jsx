import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { getMealById } from "../api/api";
import LoadingScreen from "../components/LoadingScreen";

export default function MealDetail() {
  const { id } = useParams();
  const [meal, setMeal] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        setIsLoading(true);
        setError(null);
        const m = await getMealById(id);
        if (!mounted) return;
        setMeal(m);
      } catch (err) {
        if (!mounted) return;
        setError(err?.message || "Error loading meal");
      } finally {
        if (!mounted) return;
        setIsLoading(false);
      }
    }
    load();
    return () => { mounted = false };
  }, [id]);

  return (
    <>
      <NavBar />
      <main style={{ padding: "1rem", maxWidth: 900, margin: "0 auto" }}>
        {isLoading && <LoadingScreen />}
        {error && <p className="error">Error: {error}</p>}
        {!isLoading && !error && !meal && <p>Meal not found</p>}
        {!isLoading && !error && meal && (
          <article className="meal-detail">
            <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
              <img src={meal.thumb} alt={meal.name} style={{ width: "100%", maxWidth: 360, borderRadius: 8 }} />
              <div style={{ flex: 1, minWidth: 240 }}>
                <h1>{meal.name}</h1>
                <p style={{ color: "#666", margin: 0 }}>{meal.category} {meal.area ? `• ${meal.area}` : ''}</p>
                {meal.tags?.length > 0 && <p style={{ marginTop: 6 }}>Tags: {meal.tags.join(', ')}</p>}
                <p style={{ fontWeight: 700, marginTop: 8 }}>€{meal.price.toFixed(2)}</p>

                <h3 style={{ marginTop: 16 }}>Ingredients</h3>
                <ul>
                  {meal.ingredients.map((it, idx) => (
                    <li key={idx}>{it.ingredient}{it.measure ? ` — ${it.measure}` : ''}</li>
                  ))}
                </ul>
              </div>
            </div>

            {meal.instructions && (
              <>
                <h2 style={{ marginTop: 20 }}>Preparation</h2>
                <p style={{ whiteSpace: "pre-line", lineHeight: 1.5 }}>{meal.instructions}</p>
              </>
            )}
          </article>
        )}
      </main>
      <Footer />
    </>
  );
}