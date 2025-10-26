import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";

function Home() {
  return(
    <>
      <NavBar/>
      <main className="home-main">
        <section className="hero">
          <h1>Welcome to Demo Restaurant</h1>
          <p className="hero-sub">Explore our menu and discover delicious dishes.</p>
        </section>
      </main>
      <Footer/>
    </>
  )
}

export default Home;