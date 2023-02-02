import React from "react";
import PropTypes from "prop-types";
import "../assets/css/modal.css";

function Modal({ crew, closeModal }) {
  return (
    <div className="modal">
      <div className="modal-content">
        <button type="button" className="close" onClick={() => closeModal()}>
          &times;
        </button>
        <div className="img-center">
          <img
            src={`../src/assets/images/${crew.picture}`}
            alt={crew.firstname}
          />
        </div>
        <h2>{crew.firstname}</h2>
        <p>{crew.genre}</p>
        <p>{crew.biography}</p>
      </div>
    </div>
  );
}

Modal.propTypes = {
  crew: PropTypes.shape({
    id: PropTypes.number.isRequired,
    firstname: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    biography: PropTypes.string.isRequired,
  }).isRequired,
  closeModal: PropTypes.func.isRequired,
};

export default Modal;
