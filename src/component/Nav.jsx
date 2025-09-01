import React from 'react';
import {navLinks} from "../constant/data.js";
import './Nav.css'

const Nav = () => {
    return (
        <header className="header">
            <nav className="nav">
                <a href="/" className='navTitle textPresetBold'>
                    Omoh Imobu
                </a>
                <ul className="navLabel textPreset1Med">
                    {
                        navLinks.map((link, index) => (
                            <li key={index} className='navLink'><a href={link.href}>{link.label}</a></li>
                        ))
                    }
                </ul>

                {/*<button id="mode-toggle" >*/}
                {/*    <span className="material-symbols-outlined">light_mode</span>*/}
                {/*    <span className="material-symbols-outlined">dark_mode</span>*/}
                {/*</button>*/}
            </nav>
        </header>
    );
};

export default Nav;