import React, {useState} from "react";
import '../Styles/Login.css';
import { Link } from "react-router-dom";
import SignUpBox3 from "../Components/Signup3";

export default function SignUpPage() {

    const [isSigned, setIsSigned] = useState(true);

    const handleClick = () => {
        setIsSigned(!isSigned);
    };

    return (
        <div className="login--bg">
            <div>
            {isSigned && (
                    
            
                    <div>
                        <div className="sign--up--box">
                        <SignUpBox3 />
                            <div className="sign--up--box1">
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Flipboard_logo.svg" width="80"/>
                                <h1>JOIN FLIPBOARD</h1>
                                <h3>Stay Informed. Stay inspired.</h3>


                            <div className="sign--up--box1--circles">


                            <div className="flex">
                                    <svg role="img" aria-labelledby="pound-icon-title" class="pound-icon css-0 evmgdi90" width="25" height="25" viewBox="0 0 25 25"><title id="pound-icon-title">pound</title><g id="Group-4"><circle id="Oval" fill="#F52828" cx="12" cy="12" r="12"></circle><g id="Group-3" transform="translate(5.327934, 5.000000)" stroke="#F7F7F7" stroke-width="1.5"><line x1="3.09695712" y1="6.297185e-13" x2="3.09695712" y2="13.344133" id="Path"></line><line x1="9.7907949" y1="6.297185e-13" x2="9.7907949" y2="13.344133" id="Path"></line><line x1="13.344133" y1="3.44106346" x2="-5.24025268e-14" y2="3.44106346" id="Path"></line><line x1="13.344133" y1="9.63497769" x2="-5.24025268e-14" y2="9.63497769" id="Path"></line></g></g></svg>

                                     <p>Follow Topics</p>
                           </div>


                           <div className="flex">
                                    <svg role="img" aria-labelledby="plus-icon-title" class="plus-icon css-0 evmgdi90" width="25" height="25" viewBox="0 0 25 25"><title id="plus-icon-title">plus</title><g id="Group-5"><circle id="Oval" fill="#F52828" cx="12" cy="12" r="12"></circle><g id="Group" transform="translate(6.000000, 6.000000)" stroke="#F7F7F7" stroke-width="1.5"><line x1="5.74667526" y1="0" x2="5.74667526" y2="11.4933505" id="Path-5"></line><line x1="-9.09162994e-15" y1="5.74667526" x2="11.4933505" y2="5.74667526" id="Path-6"></line></g></g></svg>

                                    <p>Curate Stories</p>
                              
                            </div>
                            <div className="flex">
                                    <svg role="img" aria-labelledby="share-icon-title" class="share-icon css-0 evmgdi90" width="25" height="25" viewBox="0 0 25 25"><title id="share-icon-title">Share</title><g id="Group-8"><circle id="Oval" fill="#F52828" cx="12" cy="12" r="12"></circle><g id="Group-2" transform="translate(7.500000, 6.500000)" stroke="#F7F7F7" stroke-width="1.5"><polyline id="Path-7" fill="#F52828" points="-3.55501217e-13 4.06205162 -3.55501217e-13 10.4937496 8.54601996 10.4937496 8.54601996 4.06205162"></polyline><polyline id="Path-8" points="6.50554753 2.23253755 4.27300998 8.9688449e-13 2.04047243 2.23253755"></polyline><line x1="4.27300998" y1="-1.01628839e-12" x2="4.27300998" y2="7.28042115" id="Path-9"></line></g></g></svg>
                                    <p>Share Ideas</p>
                            </div>

                            </div>

                                </div>
                                <div>

                                </div>
                         
                        <div className="sign--up--box2">
                            

                        <div>
                           <form>
                                <input type="text" placeholder="Email" name="email"/>
                                <input type="text" placeholder="Full Name" name="Name"/>
                                <input type="text" placeholder="Password" name="Password"/>
                                <button className="continue--button">Continue</button>
                             </form>
                        </div>


                        <div className="apple--google--icons">

                            <p>or sign up with</p>

                            <div>
                                <button className="apple--icon">
                                    <svg fill="#000000" height="20px" width="23px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                                        viewBox="0 0 22.773 22.773" xml:space="preserve">
                                    <g>
                                        <g>
                                            <path d="M15.769,0c0.053,0,0.106,0,0.162,0c0.13,1.606-0.483,2.806-1.228,3.675c-0.731,0.863-1.732,1.7-3.351,1.573
                                                c-0.108-1.583,0.506-2.694,1.25-3.561C13.292,0.879,14.557,0.16,15.769,0z"/>
                                            <path d="M20.67,16.716c0,0.016,0,0.03,0,0.045c-0.455,1.378-1.104,2.559-1.896,3.655c-0.723,0.995-1.609,2.334-3.191,2.334
                                                c-1.367,0-2.275-0.879-3.676-0.903c-1.482-0.024-2.297,0.735-3.652,0.926c-0.155,0-0.31,0-0.462,0
                                                c-0.995-0.144-1.798-0.932-2.383-1.642c-1.725-2.098-3.058-4.808-3.306-8.276c0-0.34,0-0.679,0-1.019
                                                c0.105-2.482,1.311-4.5,2.914-5.478c0.846-0.52,2.009-0.963,3.304-0.765c0.555,0.086,1.122,0.276,1.619,0.464
                                                c0.471,0.181,1.06,0.502,1.618,0.485c0.378-0.011,0.754-0.208,1.135-0.347c1.116-0.403,2.21-0.865,3.652-0.648
                                                c1.733,0.262,2.963,1.032,3.723,2.22c-1.466,0.933-2.625,2.339-2.427,4.74C17.818,14.688,19.086,15.964,20.67,16.716z"/>
                                        </g>
                                    </g>
                                    </svg>
                                </button>

                                <button className="google--icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="20" viewBox="0 -5 48 48">
                                        <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                    </svg>
                                </button>

                            </div>
                        </div>


                                <div className="sign--up--options">
                                <Link to="/publisher_signup"><a href="#">Get started as a publisher</a></Link>

                                    <div className="log--in--section">
                                        <p>Already have an account?</p>
                                        <Link to='/login'><a href="#">Log in</a></Link>
                                    </div>
                                    <p className="terms2">By continuing, you accept the<span><a href="#">Terms of Use</a></span> and <span><a href="#">Privacy Policy.</a></span></p>
                                </div>

                        </div>
                    </div>
                    </div>
                )}
            </div>
        </div>
    )
}