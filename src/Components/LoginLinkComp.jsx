import React, {useState} from "react";
import '../Styles/Navbar.css'
import { Link } from "react-router-dom";

export default function LoginLinkComp() {

    const [getLink, setGetLink] = useState(true);


    return (
        <div>
            {getLink && (
                                    <div className="getLink--bg2">
                                        <div className="getLink--box">


                                           <div className="getLink--content"> 
                                           
                                            <svg role="img" aria-labelledby="logo-icon-title logo-icon-desc" class="logo--icon" width="40" height="40" viewBox="0 0 100 100" shape-rendering="crispEdges"><title id="logo-icon-title">Flipboard</title><desc id="logo-icon-desc">Icon version of the Flipboard logo</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Flipboard_01_Lockup" fill="#F52828" fill-rule="nonzero"><path d="M0,0 L0,100 L100,100 L100,0 L0,0 Z M80,40 L60,40 L60,60 L40,60 L40,80 L20,80 L20,20 L80,20 L80,40 Z" id="Shape"></path></g></g></svg>
                                            
                                            <h2>REQUEST LOG IN LINK</h2>
                                        <div>
                                            <form>
                                                <input type="text" name="email" placeholder="Email"/>
                                                <button className="send--button">Send</button>
                                            </form>
                                        </div>

                                            <Link to='/login'><a href="#">Log in with my password</a></Link>

                                            <p>By continuing, you accept the Terms of Use and Privacy Policy.</p>
            
                                            </div>
                                        </div>
                                    </div>
                                )}
        </div>
    )
}