import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Form from "./components/Form";
import "./assets/css/home.css";
import "./assets/css/app.css";
import Home from "./components/Home";
import Equipment from "./components/Equipment";
import Journey from "./components/Journey";
import Crew from "./components/Crew";
import Admin from "./components/Admin";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Form />} />
          <Route path="/crew" element={<Crew />} />
          <Route path="/equipment" element={<Equipment />} />
          <Route path="/journey" element={<Journey />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </Router>
    </div>
  );
}
