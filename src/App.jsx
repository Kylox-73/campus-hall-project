import React from "react";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import PopularHalls from "./components/home/PopularHalls";
import Footer from "./components/layout/Footer";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <main>
        <HeroSection />
        <PopularHalls />
      </main>
      <Footer />
    </div>
  );
}

export default App;
