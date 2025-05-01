import React, { useState } from "react";
import { Menu, X, School, Moon, Sun } from "lucide-react";
import "./Navbar.css"; // Import the custom CSS

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const navItems = [
    { name: "Home", href: "/" },
    { name: "Halls", href: "/halls" },
    { name: "Booking", href: "/booking" },
    { name: "My Reservations", href: "/reservations" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <nav className={`navbar ${isDark ? "dark" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-header">
          <div className="logo">
            <School className="logo-icon" />
            <span className="logo-text">CampusHalls</span>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links desktop">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="navbar-link">
                {item.name}
              </a>
            ))}
            <button onClick={toggleDarkMode} className="dark-mode-toggle">
              {isDark ? <Sun className="icon" /> : <Moon className="icon" />}
            </button>
            <a href="/login" className="login-button">
              Login
            </a>
          </div>

          {/* Mobile menu button
          <div className="mobile-menu-button">
            <button
              onClick={toggleDarkMode}
              className="dark-mode-toggle-mobile"
            >
              {isDark ? <Sun className="icon" /> : <Moon className="icon" />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="menu-toggle">
              {isOpen ? <X className="icon" /> : <Menu className="icon" />}
            </button>
          </div> */}
        </div>
      </div>

      {/* Mobile menu
      {isOpen && (
        <div className="mobile-menu">
          <div className="mobile-links">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="mobile-link">
                {item.name}
              </a>
            ))}
            <a href="/login" className="mobile-login-button">
              Login
            </a>
          </div>
        </div> */}
    </nav>
  );
}
