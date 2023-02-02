import React from "react";
import "../assets/css/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <img
              className="compass"
              src="../src/assets/images/Compass.png"
              alt="compass"
            />
            Home
          </Link>
        </li>
        <li>
          <Link to="/crew">
            <img
              className="compass"
              src="../src/assets/images/Sailor.png"
              alt="compass"
            />
            The crew
          </Link>
        </li>
        <li>
          <Link to="/equipment">
            <img
              className="compass"
              src="../src/assets/images/Blade.png"
              alt="compass"
            />
            Equipment
          </Link>
        </li>
        <li>
          <Link to="/contact">
            <img
              className="compass"
              src="../src/assets/images/Pigeon.png"
              alt="compass"
            />
            Contact the King
          </Link>
        </li>
        <li>
          <Link to="/journey">
            <img
              className="map"
              src="../src/assets/images/Map.png"
              alt="compass"
            />
            Journey
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
