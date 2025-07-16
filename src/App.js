import React, { useState, useEffect } from "react";
import { FaTachometerAlt, FaThermometerHalf, FaLightbulb, FaTv, FaHome, FaMusic } from "react-icons/fa";
import { GiWashingMachine } from 'react-icons/gi';
import { MdDry } from "react-icons/md";
import "./App.css";

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  // Open drawer by default on desktop (≥768px)
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsOpen(false);
    }
  }, []);

    // Open drawer by default on desktop (≥768px)
  useEffect(() => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    }
  }, []);

  const toggleDrawer = () => setIsOpen((prev) => !prev);

  return (
    <div className="App">
      <div className={`side-drawer ${isOpen ? "open" : "closed"}`}>
        <button className="hamburger" onClick={toggleDrawer}>
          ☰
        </button>

        {isOpen && (
          <div className="drawer-content">
            <ul className="drawer-top">
              <li><a href="/"><FaTachometerAlt /> Dashboard</a></li>
            </ul>

            <div className="drawer-section">
              <h3>House</h3>
              <ul>
                <li><a href="/"><GiWashingMachine /> Washer</a></li>
                <li><a href="/"><MdDry /> Dryer</a></li>
                <li><a href="/"><FaThermometerHalf /> Thermostat</a></li>
                <li><a href="/"><FaLightbulb /> Lights</a></li>
              </ul>
            </div>

            <div className="drawer-section">
              <h3>Entertainment</h3>
              <ul>
                <li><a href="/"><FaMusic /> Music</a></li>
                <li><a href="/"><FaTv /> TV</a></li>
              </ul>
            </div>

            <div className="drawer-section">
              <h3>Configuration</h3>
              <ul>
                <li><a href="/">Lights</a></li>
                <li><a href="/">Speakers</a></li>
                <li><a href="/">TVs</a></li>
                <li><a href="/">Thermostats</a></li>
                <li><a href="/">Washers</a></li>
                <li><a href="/">Dryers</a></li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop for mobile */}
      <div
        className={`backdrop ${isOpen && isMobile? "show" : ""}`}
        onClick={() => setIsOpen(false)}
      />

      <div className="main-content">
        <header>
          <h1>HomeHub</h1>
        </header>
        <p>Welcome to your smart home hub interface!</p>
      </div>
    </div>
  );
}

export default App;
