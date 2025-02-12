import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import Skills from "./pages/Skills.jsx";
import Projects from "./pages/Projects.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/app.css";

export default function App() {
  return (
    <Router>
      <div className="container-fluid d-flex">
        <Sidebar />
        <div className="content flex-grow-1 p-3">
          <Routes>
            <Route path="/" element={<Skills />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
