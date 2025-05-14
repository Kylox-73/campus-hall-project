import React from "react";
import { FaPhoneAlt } from "react-icons/fa";
import "./Contact.css";

export default function Contact() {
  return (
    <div className="contact-container">
      <div className="contact-card">
        <FaPhoneAlt className="contact-icon" />
        <h2>Contact Us</h2>
        <form className="contact-form">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}
