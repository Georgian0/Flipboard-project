import React from "react";
import '../Styles/Login.css';
import LoginLinkComp from "../Components/LoginLinkComp";


export default function Login() {
    return (
        <div className="login--bg">
            <div>
                <LoginLinkComp />
            </div>
        </div>
    )
}