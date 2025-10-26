import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <>
      <NavBar />
      <main className="home-main">
        <section className="hero">
          <h1>Welcome to Demo Restaurant</h1>
          <p className="hero-sub">Explore our menu and discover delicious dishes.</p>
        </section>

        <section style={{ marginTop: 24 }}>
          <h2>About</h2>
          <p>
            This demo app fetches recipes from TheMealDB and displays them as a restaurant
            menu. Prices are fictional and generated for demo purposes.
          </p>
        </section>

        <section style={{ marginTop: 24, marginBottom: 48 }}>
          <h2>How it works</h2>
          <ul>
            <li>Fetches recipes from TheMealDB API using fetch + useEffect.</li>
            <li>Each item is normalized to id, name, category, image and price.</li>
            <li>Click a dish to view details and cooking instructions.</li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;