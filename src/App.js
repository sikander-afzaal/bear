/** @format */

import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Mint from "./Pages/Mint";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Mint />} />
      <Route path="/home" element={<Home />} />
    </Routes>
  );
}

export default App;
