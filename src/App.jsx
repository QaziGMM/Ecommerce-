import React, { useState, useEffect } from "react";

import "./App.css";

import NavBar from "./components/NavBar";
import HerSection from "./components/HerSection";
import Cards from "./components/Cards";

const App = () => {
  return (
    <div>
      <NavBar />
      <HerSection />
      <Cards />
    </div>
  );
};

export default App;
