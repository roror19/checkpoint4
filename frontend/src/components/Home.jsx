import React from "react";
import "../assets/css/home.css";
import Navbar from "./Navbar";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div>
        <h1 className="welcome vibrate-1">Welcome aboard, sailor!</h1>
        <div>
          <p className="instruction">
            <p>
              {" "}
              Your journey starts here, please choose equipment, define your
              route{" "}
            </p>
            <p>
              {" "}
              and go to war! Feel free to contact the king if you want !
              <p>Or take the time to admire our crew...</p>
            </p>{" "}
            On aboard, let's go sailor, the sea is waiting for you!
          </p>
        </div>
      </div>
    </div>
  );
}
