import React from "react";
import "./Reservations.css";

export default function Reservations() {
  return (
    <div className="reservations-container">
      <h2>Your Reservations</h2>
      <ul className="reservations-list" style={{ cursor: "pointer" }}>
        <li>Reservation 1</li>
        <li>Reservation 2</li>
        <li>Reservation 3</li>
      </ul>
    </div>
  );
}
