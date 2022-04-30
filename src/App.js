import React from "react";

import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./Navbar";
export default function App() {
  return (
   <Router>
    <main>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about"  element={<About/>} />
      <Route path="/contact"  element={<Contact/>} />
      <Route path="*" element={<Navigate to="/"/>}/>
    </Routes>
  
    </main>

</Router>
  );
}
