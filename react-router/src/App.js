import React from "react";
import { Route, Routes } from "react-router";
import About from "./Components/About";
import Home from "./Components/Home";
import Login from "./Components/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;
