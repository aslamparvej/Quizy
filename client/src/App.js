import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";

import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </>
  );
}

export default App;
