import React, {useEffect, useState} from "react";
import { navLinks } from "../constant/data.js";
import "./Nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

    // 1. Load from localStorage immediately
    const getInitialTheme = () => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved;

        // fallback to system preference
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return prefersDark ? "dark" : "light";
    };

    const [theme, setTheme] = useState(getInitialTheme);

    // 2. Apply theme to <html> and save to localStorage
    useEffect(() => {
        document.documentElement.setAttribute("data-theme", theme);
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    };

  return (
    <header className="header">
      <nav className="nav">
        <a href="/" className="navTitle textPresetBold">
          Omoh Imobu
        </a>
          <button id="mode-toggle" className="theme-toggle" onClick={toggleTheme}>
              {theme === 'light'?<span className="material-symbols-outlined light-mode">light_mode</span>:
                  <span className="material-symbols-outlined dark-mode">dark_mode</span>}
          </button>
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
