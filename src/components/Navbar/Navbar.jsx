import React from "react";
import './navbar.css';
import { AiFillApple } from "react-icons/ai";
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <nav className="navbar">
<div className="logo">CareerColony</div>
<ul className="nav-links">
    <li>Home</li>
    <li>About</li>
    <li>Services</li>
    <li>Contact</li>
    <button className="btn">Sign up <FaSearch /></button>

   
</ul>
    </nav>
  )
}

export default Navbar;
