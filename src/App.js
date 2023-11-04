import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
// import Link from "next/link";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Footer />
    </div>
  );
}

export default App;
