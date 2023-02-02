/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import { useState, useEffect } from "react";
import axios from "axios";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "../assets/css/caroussel.css";
import Modal from "./Modal";

function Caroussel() {
  const [crews, setCrew] = useState([]);
  const [itemCrew, setItemCrew] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    axios.get("http://localhost:8000/crews").then((res) => {
      setCrew(res.data);
    });
  }, []);

  const imageClick = (crew) => {
    setIsOpen(true);
    setItemCrew(crew);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="carousselimage">
      <Carousel
        infiniteLoop
        transitionTime={1000}
        interval={3000}
        showArrows
        showThumbs={false}
        autoFocus
        autoPlay
        centerMode
        dynamicHeight
        emulateTouch
        showStatus
        stopOnHover
      >
        {crews.map((crew) => (
          <img
            className="carousselimage"
            key={crew.id}
            src={`../src/assets/images/${crew.picture}`}
            alt={crew.firstname}
            onClick={() => imageClick(crew)}
            onKeyDown={() => imageClick(crew)}
            style={{ "pointer-events": "all" }}
          />
        ))}
      </Carousel>

      {isOpen && crews && (
        <Modal crew={itemCrew} closeModal={() => closeModal()} />
      )}
    </div>
  );
}

export default Caroussel;
