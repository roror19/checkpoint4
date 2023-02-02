import React from "react";
import "../assets/css/form.css";
import Navbar from "./Navbar";

function Form() {
  const [formOpen, setFormOpen] = React.useState(false);
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <button
            type="button"
            className="btn jello-horizontal"
            onClick={() => setFormOpen(!formOpen)}
          >
            Send pigeon to the king !
          </button>
        </div>
        <form className={formOpen ? "" : "display-form"}>
          <label className="flex-input text-pop-up-top">
            <input
              className="mail-area"
              type="email"
              name="name"
              placeholder="Your email here, sir"
            />
            <textarea className="text-area">
              Your message for the king here
            </textarea>
            <button
              onClick={() => {
                setIsOpen(true);
              }}
              className="sub-btn vibrate-1"
              type="button"
            >
              Send mail
            </button>
          </label>
          {isOpen && (
            <p className="success">
              Your message has been sent to the king, sir !
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Form;
