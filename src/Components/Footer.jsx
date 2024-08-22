import React from "react";
import '../Styles/Footer.css';

export default function Footer() {
    return (
        <div>
            <ul className="footer">
                <li><a href="#" className="footer--option">Log in</a></li>
                <li><a href="#" className="footer--option">Newsletters</a></li>
                <li><a href="#" className="footer--option">About us</a></li>
                <li><a href="#" className="footer--option">Blog</a></li>
                <li><a href="#" className="footer--option">Tools</a></li>
                <li><a href="#" className="footer--option">Publishers</a></li>
                <li><a href="#" className="footer--option">Help</a></li>
                <li><a href="#" className="footer--option">Terms</a></li>
                <li><a href="#" className="footer--option">Privacy policy</a></li>
                <li><a href="#" className="footer--option">Data Protection</a></li>
                <li><a href="#" className="footer--option">Sitemap</a></li>
            </ul>
            <a className="footer--option copyright" href="#">@ 2024 Flipboard</a>
        </div>
    )
}