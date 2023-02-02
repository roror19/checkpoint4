import React from "react";
import axios from "axios";

function Admin() {
  const [title, setTitle] = React.useState("");
  const [isAdded, setIsAdded] = React.useState(false);
  const [isFailed, setIsFailed] = React.useState(false);
  const handleSubmit = () => {
    const job = {
      title,
    };

    axios
      .post("http://localhost:8000/jobs", { job })
      .then(() => {
        setIsAdded(true);
      })
      .catch(() => {
        setIsFailed(true);
      });
  };
  return (
    <form>
      <label>
        Job title:
        <input
          onChange={(event) => {
            const input = event.target;
            setTitle(input.value);
          }}
          type="text"
          placeholder="What is your job?"
          name="title"
        />
      </label>
      <button type="button" onClick={() => handleSubmit()}>
        Save
      </button>
      {isAdded && <p>Job added</p>}
      {isFailed && <p>Failed to add Job added</p>}
    </form>
  );
}

export default Admin;
