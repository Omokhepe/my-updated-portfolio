import React, { useState } from "react";
import { navLinks } from "../constant/data.js";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="navTitle textPresetBold">
          Omoh Imobu
        </a>
        <span
          className="material-symbols-outlined menu-toggle"
          onClick={() => setIsOpen((prevState) => !prevState)}
        >
          menu
        </span>

        <ul className={`navLabel ${isOpen ? "active" : ""} `}>
          <span
            className="material-symbols-outlined"
            onClick={() => {
              setIsOpen((prevState) => !prevState);
              e.stopPropagation();
            }}
          >
            close
          </span>
          {navLinks.map((link, index) => (
            <li key={index} className="navLink textPreset1Med">
              <a href={link.href}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
