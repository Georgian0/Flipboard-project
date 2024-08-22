import React from "react";
import "../Styles/Navbar.css"

export default function HeroLogo() {
    return (
        <div className="hero--logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Flipboard_logo.svg" width="30"/>
            <span className="nav--title">FLIPBOARD</span>
        </div>
    )
}