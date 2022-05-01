import React from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import InfoHide from "./pages/InfoHide";
import MenuProject from "./pages/MenuProject"
import Navbar from "./Navbar";
export default function App() {
  return (
   <Router>
    <main>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/menuproject"  element={<MenuProject/>} />
      <Route path="/infohide"  element={<InfoHide/>} />
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  
    </main>

</Router>
  );
}
