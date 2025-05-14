import React from "react";
import "./Halls.css";

export default function Halls() {
  const halls = [
    { id: 1, name: "Hall 1", description: "Spacious and elegant hall." },
    { id: 2, name: "Hall 2", description: "Perfect for small gatherings." },
    { id: 3, name: "Hall 3", description: "Modern and well-equipped." },
    { id: 4, name: "Hall 4", description: "Elegant hall and Spacious" },
    { id: 5, name: "Hall 5", description: "Perfect for small crowd." },
    { id: 6, name: "Hall 6", description: "Well-equipped and modern." },
  ];

  return (
    <div className="halls-container">
      <h2>Our Halls</h2>
      <div className="halls-list">
        {halls.map((hall) => (
          <div
            key={hall.id}
            className="hall-card"
            style={{ cursor: "pointer" }}
          >
            <h3>{hall.name}</h3>
            <p>{hall.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
