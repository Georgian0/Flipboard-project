import React, {useState, useEffect} from "react";
import "../Styles/Hero.css";
import "../Styles/Navbar.css";
import SignUp from '../Components/SignUpButton';
import TriggerButton from '../Components/Trigger.jsx';
import SignUpBox3 from "./Signup3.jsx";
import { Link } from "react-router-dom";
import HeroLogo from "./Hero-Logo.jsx"

export default function Hero() {

    const [isSigned, setIsSigned] = useState(false);

    const handleClick = () => {
        setIsSigned(!isSigned);
    };


    return (
        <div className="hero--content">

        <Link to='/' className="no-decoration hero--logo"><HeroLogo /></Link>

            <h1 className="hero--main">
                GET INFORMED <br />
                <span className="hero--main red--line">
                    GET INSPIRED
                </span>
            </h1>
            <h3 className="hero--second">Stories Curated For You</h3>
            <TriggerButton handleClick={handleClick} />
            <SignUp isSigned={isSigned} handleClick={handleClick} setIsSigned={setIsSigned} />
            <a  href="https://apps.apple.com/us/app/flipboard-the-social-magazine/id358801284" target="_blank"><button className="download--button">Download the app</button></a>

        </div>
    )
}