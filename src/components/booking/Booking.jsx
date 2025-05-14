import React, { useState } from "react";
import "./Booking.css";

export default function Booking() {
  const [selectedHall, setSelectedHall] = useState("");

  const handleBooking = (e) => {
    e.preventDefault();
    if (selectedHall) {
      alert(`Booking for ${selectedHall} confirmed.`);
    } else {
      alert("Please select a hall.");
    }
  };

  return (
    <div className="booking-container">
      <h2>Book a Hall</h2>
      <form className="booking-form" onSubmit={handleBooking}>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <select
          value={selectedHall}
          onChange={(e) => setSelectedHall(e.target.value)}
          required
        >
          <option value="">Select a Hall</option>
          <option value="Hall 1">Hall 1</option>
          <option value="Hall 2">Hall 2</option>
          <option value="Hall 3">Hall 3</option>
        </select>
        <input type="date" required />
        <button type="submit">Book Now</button>
      </form>
    </div>
  );
}
