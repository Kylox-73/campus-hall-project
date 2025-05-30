import React from "react";
import { Users, Clock } from "lucide-react";
import "./PopularHalls.css";

const popularHalls = [
  {
    id: "1",
    name: "Grand Auditorium",
    image:
      "https://images.unsplash.com/photo-1571624436279-b272aff752b5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    capacity: 500,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Conference Hall A",
    image:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    capacity: 200,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Seminar Room 101",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    capacity: 100,
    isAvailable: false,
  },
  {
    id: "1",
    name: "Auditorium",
    image:
      "https://plus.unsplash.com/premium_photo-1680807988328-7ba28ad24d9f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    capacity: 300,
    isAvailable: true,
  },
  {
    id: "2",
    name: "Conference Hall B",
    image:
      "https://avatars.mds.yandex.net/i?id=60a168c7db30c60164df202202d585a2-5235791-images-thumbs&n=13https://avatars.mds.yandex.net/i?id=60a168c7db30c60164df202202d585a2-5235791-images-thumbs&n=13",
    capacity: 200,
    isAvailable: true,
  },
  {
    id: "3",
    name: "Seminar Room 102",
    image:
      "https://i.ytimg.com/vi/lKpqenrurHA/maxresdefault.jpg",
    capacity: 100,
    isAvailable: false,
  },
];

export default function PopularHalls() {
  return (
    <section className="popular-halls-section">
      <div className="container">
        <h2 className="title">Popular Halls</h2>

        <div className="halls-grid">
          {popularHalls.map((hall) => (
            <div key={hall.id} className="hall-card">
              <div className="image-container">
                <img src={hall.image} alt={hall.name} className="hall-image" />
                <div className="status-badge">
                  <span
                    className={`status ${
                      hall.isAvailable ? "available" : "booked"
                    }`}
                  >
                    {hall.isAvailable ? "Available" : "Booked"}
                  </span>
                </div>
              </div>

              <div className="hall-info">
                <h3 className="hall-name">{hall.name}</h3>

                <div className="hall-capacity">
                  <Users className="icon" />
                  <span>Capacity: {hall.capacity}</span>
                </div>

                <div className="availability">
                  <div className="next-available">
                    <Clock className="icon" />
                    <span>Next available: Today</span>
                  </div>
                  <a href={`/halls/${hall.id}`} className="view-details-btn">
                    View Details
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
