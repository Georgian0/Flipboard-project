import React from "react";
import "../Styles/Publisher.css";
import { Link } from "react-router-dom";

export default function PublisherPage() {
    return (
        <div className="publisher--bg">
            <div className="publisher--page"> 
                <h2>PUBLISHER SIGN-UP</h2>
                <p>Thank you for your interest in signing up as a publisher on Flipboard. Our program is not accepting new applications however you can create a profile and add content using our bookmarklet<br /> tool found on our about.flipboard.com tools page.</p>
                <p>Already have an account?<span><Link to='/login'><a href="#"> Log In</a></Link></span></p>
            </div>
        </div>
    )
}