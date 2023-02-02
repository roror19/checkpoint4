import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import "../assets/css/equipment.css";

function Equipment() {
  const [equipments, setEquipments] = React.useState([]);
  React.useEffect(() => {
    axios.get("http://localhost:8000/equipments").then((res) => {
      setEquipments(res.data);
    });
  }, []);
  return (
    <div>
      <Navbar />
      <div>
        <div>
          <h3 className="equipment tracking-in-expand">
            CHOOSE YOUR EQUIPMENT
          </h3>
        </div>
      </div>
      <div className="start-end">
        {equipments.map((equipment) => {
          return (
            <div className="one" key={equipment.id}>
              <div className="equipement-container">
                <img
                  className="img-border"
                  src="../src/assets/images/IronBorder.png"
                  alt="border"
                />
                <img
                  className="img-equipment"
                  src={`../src/assets/images/${equipment.image}`}
                  alt={equipment.name}
                />
              </div>
              <p>{equipment.name}</p>
            </div>
          );
        })}

        {/* <div className="two">
          <img src="../src/assets/images/IronBorder.png" alt="border" />
        </div>
        <div className="three">
          <img src="../src/assets/images/IronBorder.png" alt="border" />
        </div>
        <div className="four">
          <img src="../src/assets/images/IronBorder.png" alt="border" />
        </div>
        <div className="five">
          <img src="../src/assets/images/IronBorder.png" alt="border" />
        </div>
        <div className="six">
          <img src="../src/assets/images/IronBorder.png" alt="border" />
        </div>
        <div className="seven">
          <img src="../src/assets/images/IronBorder.png" alt="border" />
        </div>
        <div className="eight">
          <img src="../src/assets/images/IronBorder.png" alt="border" />
        </div>
        <div className="nine">
          <img src="../src/assets/images/IronBorder.png" alt="border" />
        </div> */}
      </div>
    </div>
  );
}

export default Equipment;
