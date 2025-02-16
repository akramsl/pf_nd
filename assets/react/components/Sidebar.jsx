import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../../styles/app.css";

export default function Sidebar() {
  const location = useLocation(); //Récupère la route actuelle

  return (
    <nav className="sidebar bg-dark text-white vh-100">
      <div className="row">
        <img src="image/logo.png" className="w-25 mx-4" alt="logo" />
        <h2 className="m-4 col-6 text-center">Akram SMAIL</h2>
      </div>
      <ul className="nav flex-column mt-3">
        <li className="nav-item py-3">
          <Link className={`nav-link text-white ${location.pathname === "/skills" ? "active" : ""}`} to="/skills">
            <i className="fas fa-code"></i> Skills
          </Link>
        </li>
        <li className="nav-item py-3">
          <Link className={`nav-link text-white ${location.pathname === "/projects" ? "active" : ""}`} to="/projects">
            <i className="fas fa-briefcase"></i> Projects
          </Link>
        </li>
        <li className="nav-item py-3">
          <Link className={`nav-link text-white ${location.pathname === "/about" ? "active" : ""}`} to="/about">
            <i className="fas fa-user"></i> About
          </Link>
        </li>
        <li className="nav-item py-3">
          <Link className={`nav-link text-white ${location.pathname === "/contact" ? "active" : ""}`} to="/contact">
            <i className="fas fa-envelope"></i> Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}
