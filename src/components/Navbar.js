import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if(window.scrollY >= 100) {
            setColor(true);
        } else {
            setColor(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", changeColor);
        // Remove the removeEventListener to keep the navbar always visible
    }, []);    

    return (
        <div className={color ? "header-bg" : "header"}>
            <Link to="/">
                <h1>Sharo</h1>
            </Link>
            <ul className={click ? "nav-menu" : "nav-menu active"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/Projects">Projects</Link>
                </li>
                <li>
                    <Link to="/Cyber">Cyber Security</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ? (<FaBars size={20} style={{color: "#ffffff"}} />) : (<FaTimes size={20} style={{color: "#ffffff"}} />)}
            </div>
        </div>
    );
};

export default Navbar;
