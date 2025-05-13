import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import HeroSection from "./components/home/HeroSection";
import PopularHalls from "./components/home/PopularHalls";
import Footer from "./components/layout/Footer";
import Login from "./components/login/login";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <>
              <main>
                <HeroSection />
                <PopularHalls />
              </main>
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
