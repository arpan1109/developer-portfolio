import "./App.css";
import About from "./components/About";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Tech from "./components/Tech";
import Works from "./components/Works";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Tech />
      <Works />
      <Experience />
      <Footer />
    </>
  );
}

export default App;
