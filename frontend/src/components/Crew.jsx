import React from "react";
import Navbar from "./Navbar";
import "../assets/css/crew.css";
import Carousel from "./Caroussel";

function Crew() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <h1 className="crewphrase">Here is the crew</h1>
      </div>
      <Carousel />
    </div>
  );
}

export default Crew;
