import React, { useState } from "react";
import { Menu, X, School, Moon, Sun } from "lucide-react";
import "./Navbar.css";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);

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

          <div className="navbar-links desktop">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="navbar-link">
                {item.name}
              </a>
            ))}

            <a href="/login" className="login-button">
              Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
