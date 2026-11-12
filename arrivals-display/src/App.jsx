import React from 'react';
import Clock from './Clock.jsx';
import './index.css';

const flights = [
  { id: 1, airline: "flydubai", time: "08:10", flight: "FZ 579", origin: "Dubai", belt: "", remarks: "Arrived at 08:02", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-blue" },
  { id: 2, airline: "Emirates", time: "08:30", flight: "EK 650", origin: "Dubai", belt: "06", remarks: "Arrived at 08:32", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-red" },
  { id: 3, airline: "ETIHAD", time: "08:35", flight: "EY 392", origin: "Abu Dhabi", belt: "04", remarks: "Arrived at 08:44", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-brown" },
  { id: 4, airline: "IndiGo", time: "08:45", flight: "6E 1185", origin: "Mumbai", belt: "03", remarks: "Arrived at 08:35", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-darkblue" },
  { id: 5, airline: "SriLankan", time: "08:50", flight: "UL 192", origin: "Delhi", belt: "", remarks: "Arrived at 08:12", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-white" },
  { id: 6, airline: "QATAR", time: "09:00", flight: "QR 664", origin: "Doha", belt: "05", remarks: "Arrived at 09:06", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-maroon" },
  { id: 7, airline: "SriLankan", time: "09:50", flight: "UL 319", origin: "Kuala Lumpur", belt: "03", remarks: "Expected at 09:30", statusColor: "text-white-status", dotColor: "dot-gray", airlineBg: "bg-white" },
  { id: 8, airline: "flydubai", time: "08:10", flight: "FZ 579", origin: "Dubai", belt: "", remarks: "Arrived at 08:02", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-blue" },
  { id: 9, airline: "Emirates", time: "08:30", flight: "EK 650", origin: "Dubai", belt: "06", remarks: "Arrived at 08:32", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-red" },
  { id: 10, airline: "ETIHAD", time: "08:35", flight: "EY 392", origin: "Abu Dhabi", belt: "04", remarks: "Arrived at 08:44", statusColor: "text-green", dotColor: "dot-green", airlineBg: "bg-brown" },
];

function App() {
  return (
    <div className="app-container">
      <div className="header-wrapper">
        <div className="header-content">
        <div className="header-logo">
        <img src="/logo.jpg" alt="Airport Logo" className="logo-img" />
          </div>
          <h1 className="header-title">ARRIVALS</h1>
          <Clock />
        </div>
      </div>

      {/* Table Column Headers */}
      <div className="table-header">
        <div className="th-airline">AIRLINE</div>
        <div>TIME</div>
        <div>FLIGHT</div>
        <div>ORIGIN</div>
        <div>BELT</div>
        <div>REMARKS</div>
      </div>

      {/* Flight Data Rows */}
      <div className="table-body">
        {flights.map((flight) => (
          <div key={flight.id} className="table-row">
            <div className="airline-col">
              <div className="status-dots">
                <div className={`dot ${flight.dotColor}`}></div>
                <div className={`dot ${flight.dotColor}`}></div>
              </div>
              <div className={`airline-badge ${flight.airlineBg}`}>
                {flight.airline}
              </div>
            </div>
            <div className="text-light">{flight.time}</div>
            <div className="text-light">{flight.flight}</div>
            <div className="text-light">{flight.origin}</div>
            <div className="text-yellow">{flight.belt}</div>
            <div className={flight.statusColor}>{flight.remarks}</div>
          </div>
        ))}
      </div>
      <div className="footer">
        <div className="marquee-text">
          ✈️ Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️  Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️ Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️ Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️  Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️ Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️  Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️   Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️   Make Happy Journeys • Welcome to Sri Lanka • Have a Safe Flight! ✈️
        </div>
      </div>
    </div>
  );
}

export default App;