import React from "react";
import { Search } from "lucide-react";
import "./HeroSection.css";

export default function HeroSection() {
  return (
    <div className="hero-container">
      <div className="background-overlay">
        <div className="background"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          Effortless Hall Reservations for Your Campus
        </h1>
        <p className="hero-description">
          Find and book the perfect space for your academic events
        </p>

        <div className="search-container">
          <div className="search-box">
            <div className="input-container">
              <input
                type="text"
                placeholder="Search by hall name"
                className="search-input"
              />
            </div>
            <div className="select-container">
              <select className="capacity-select">
                <option value="">Select capacity</option>
                <option value="50">Up to 50</option>
                <option value="100">Up to 100</option>
                <option value="200">Up to 200</option>
                <option value="500">Up to 500</option>
              </select>
            </div>
            <button className="search-btn">
              <Search className="search-icon" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
