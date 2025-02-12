import React from "react";
import { Link } from "react-router-dom";
import "../../styles/app.css";

export default function Sidebar() {
  return (
    <nav className="sidebar bg-dark text-white p-3 vh-100">
      <h2>John Doe</h2>
      <ul className="nav flex-column">
        <li className="nav-item">
          <Link className="nav-link text-white" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/projects">Projects</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white" to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
