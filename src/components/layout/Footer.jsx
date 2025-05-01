import React from "react";
import {
  Facebook,
  Twitter,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import "./Footer.css"; // Import custom CSS

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-section">
            <h3 className="footer-title">CampusHalls</h3>
            <p className="footer-description">
              Making hall reservations simple and efficient for your campus
              needs.
            </p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <Facebook className="social-icon-svg" />
              </a>
              <a href="#" className="social-icon">
                <Twitter className="social-icon-svg" />
              </a>
              <a href="#" className="social-icon">
                <Instagram className="social-icon-svg" />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Quick Links</h3>
            <ul className="footer-links">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/halls" className="footer-link">
                  Halls
                </a>
              </li>
              <li>
                <a href="/booking" className="footer-link">
                  Booking
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Contact Info</h3>
            <ul className="footer-contact">
              <li className="footer-contact-item">
                <Phone className="footer-icon" />
                <span>(555) 123-4567</span>
              </li>
              <li className="footer-contact-item">
                <Mail className="footer-icon" />
                <span>info@campushalls.com</span>
              </li>
              <li className="footer-contact-item">
                <MapPin className="footer-icon" />
                <span>123 University Ave</span>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h3 className="footer-subtitle">Newsletter</h3>
            <p className="footer-description">
              Subscribe to get updates about hall availability.
            </p>
            <form className="footer-form">
              <input
                type="email"
                placeholder="Enter your email"
                className="footer-input"
              />
              <button type="submit" className="footer-button">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-bottom-text">
            © 2025 CampusHalls. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
