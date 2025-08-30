import React from 'react';
import {navLinks} from "../constant/data.js";
import './Nav.css'

const Nav = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a href="/client/public" className='navTitle textPresetBold'>
                    Omoh Imobu
                </a>
                <ul className="navLabel textPreset1Med">
                    {
                        navLinks.map((link, index) => (
                            <li key={index} className='navLink'><a href={link.href}>{link.label}</a></li>
                        ))
                    }
                </ul>
            </nav>
        </header>
    );
};

export default Nav;