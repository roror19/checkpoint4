import React from "react";
import ReactPlayer from "react-player";
import "../assets/css/player.css";

import Navbar from "./Navbar";

function Journey() {
  return (
    <div>
      <Navbar />
      <div className="player">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=zcQmM0HjMH8"
          width="620px"
          height="340px"
          controls
        />
      </div>
    </div>
  );
}

export default Journey;
