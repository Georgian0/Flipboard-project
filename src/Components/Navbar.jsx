import React, { useState , useEffect, useRef } from "react";
import "../Styles/Navbar.css";
import Logo from "./Logo.jsx"
import { Link } from "react-router-dom";

export default function Navbar(props) {

    const [isSigned, setIsSigned] = useState(false)

    const handleClick = () => {
        setIsSigned(!isSigned);
      };

      const [isLoggedIn, setIsLoggedIn] = useState(false)

      const handleClick2 = () => {
        setIsLoggedIn(!isLoggedIn);
      }

      const handleClick3 = () => {
        setIsLoggedIn(!isLoggedIn);
        setIsSigned(!isSigned);
      }

      const handleClick4 = () => {
        setGetLink(!getLink);
      }

      const [isSearched, setIsSearched] = useState(false)



      const handleSearch = () => {
        setIsSearched(!isSearched);
        setTimeout(() => {
            inputRef.current.focus();
          }, 0); // Ensure the input is focused after rendering
      };

    const [getLink, setGetLink] = useState(false);

    const handleGetLink = () => {
        setGetLink(!getLink);
        setIsLoggedIn(!isLoggedIn);
    }


    const isSignedBgRef = useRef(null);

    const isLoggedBgRef = useRef(null);

    const handleOutsideClick = (event) => {
        if (isSignedBgRef.current && !isSignedBgRef.current.contains(event.target)) {
            setIsSigned(!isSigned);
        }
    };

    const handleOutsideClick2 = (event) => {
        if (isLoggedBgRef.current && !isLoggedBgRef.current.contains(event.target)) {
            setIsLoggedIn(!isLoggedIn);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick2);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick2);
        };
    }, [isLoggedIn]);

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isSigned]);


    const isSearchedBgRef = useRef(null);

    const handleSearchOutside = (event) => {
        if (isSearchedBgRef.current && !isSearchedBgRef.current.contains(event.target)) {
            setIsSearched(!isSearched);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleSearchOutside);

        return () => {
            document.removeEventListener('mousedown', handleSearchOutside);
        };
    }, [isSearched]);

    const inputRef = useRef(null);


    const getLinkBgRef = useRef(null);

    const handleOutsideClick4 = (event) => {
        if (getLinkBgRef.current && !getLinkBgRef.current.contains(event.target)) {
            setGetLink(!getLink);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleOutsideClick4);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick4);
        };
    }, [getLink]);


      useEffect(() => {
       
        if (isSigned || isLoggedIn || isSearched) {
           
          document.body.style.overflow = 'hidden';
        } else {
          document.body.style.overflow = 'visible';
        }

        return () => {
            document.body.style.overflow = 'visible';
          };

      }, [isSigned || isLoggedIn || isSearched]);

    return (
        <header className="header">
        <nav className="nav">

            <Link to='/' className="no-decoration"><Logo /></Link>

           <div className="nav--options">
                <Link to='/news' className="no-decoration"><a href="#" className="nav--newsletter padding">Newsletters</a></Link>
                        <div className="search--bar" onClick={handleSearch} style={{ display: isSearched ? 'none' : 'flex' }}>
                        <svg role="img" aria-labelledby="search-icon-title" className="search--icon" width="18" height="18" viewBox="0 0 22 22"><title id="search-icon-title">Search</title><g transform="translate(2.000000, 2.000000)" stroke="#999" stroke-width="1.5" fill="none"><circle cx="7" cy="7" r="7"></circle><path d="M12,13 L17,18" stroke-linecap="square"></path></g></svg>
                            
                            <input type="text" placeholder="Search Flipboard" className="search padding" name="search"/>
                        </div> 
                
                <button className="padding open--in--app">Open in app</button>
                <button className="padding sign--up"  onClick={handleClick} >Sign up</button>
                <a href="#" className="nav--login padding"  onClick={handleClick2} >Log in</a>


                {isSigned && (
                    
            
                    <div className="sign--up--bg">
                        <div className="sign--up--box" ref={isSignedBgRef}>
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
                            <button className="x--button" onClick={handleClick}>
                                <div>
                                <svg role="img" aria-labelledby="closenew-icon-title" width="24" height="24" viewBox="0 0 24 24" fill="none"><title id="closenew-icon-title">closenew</title><path d="M15.7071 8.29304C16.0976 8.68357 16.0976 9.31673 15.7071 9.70726L13.4142 12.0002L15.7071 14.293C16.0976 14.6836 16.0976 15.3167 15.7071 15.7073C15.3166 16.0978 14.6834 16.0978 14.2929 15.7073L12 13.4144L9.70711 15.7073C9.31658 16.0978 8.68342 16.0978 8.29289 15.7073C7.90237 15.3167 7.90237 14.6836 8.29289 14.293L10.5858 12.0002L8.29289 9.70726C7.90237 9.31673 7.90237 8.68357 8.29289 8.29304C8.68342 7.90252 9.31658 7.90252 9.70711 8.29304L12 10.5859L14.2929 8.29304C14.6834 7.90252 15.3166 7.90252 15.7071 8.29304Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"></path></svg>
                                </div>
                            </button>

                        <div>
                           <form>
                                <input type="text" placeholder="Email" name="email"/>
                                <input type="text" placeholder="Full Name" name="Name"/>
                                <input type="text" placeholder="Password" name="Password"/>
                                <button className="continue--button" disabled={true}>Continue</button>
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
                                <Link to="publisher_signup"><a href="#">Get started as a publisher</a></Link>

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

                {isLoggedIn && (
                    <div className="sign--up--bg">
                        <div className="sign--up--box" ref={isLoggedBgRef}>
                            <div className="log--in--box">
                            <button className="x--button" onClick={handleClick2}>
                                <div>
                                <svg role="img" aria-labelledby="closenew-icon-title" width="24" height="24" viewBox="0 0 24 24" fill="none"><title id="closenew-icon-title">closenew</title><path d="M15.7071 8.29304C16.0976 8.68357 16.0976 9.31673 15.7071 9.70726L13.4142 12.0002L15.7071 14.293C16.0976 14.6836 16.0976 15.3167 15.7071 15.7073C15.3166 16.0978 14.6834 16.0978 14.2929 15.7073L12 13.4144L9.70711 15.7073C9.31658 16.0978 8.68342 16.0978 8.29289 15.7073C7.90237 15.3167 7.90237 14.6836 8.29289 14.293L10.5858 12.0002L8.29289 9.70726C7.90237 9.31673 7.90237 8.68357 8.29289 8.29304C8.68342 7.90252 9.31658 7.90252 9.70711 8.29304L12 10.5859L14.2929 8.29304C14.6834 7.90252 15.3166 7.90252 15.7071 8.29304Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"></path></svg>
                                </div>
                            </button>
                                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c0/Flipboard_logo.svg" width="50"/>
                                <h2>LOG IN TO FLIPBOARD</h2>
                                <div className="log--in--icons">
                                    <button className="apple--icon2">
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

                                    <button className="facebook--icon">
                                        <svg role="img" aria-labelledby="facebook-icon-title" class="facebook-icon css-0 evmgdi90" width="30" height="27" viewBox="0 0 30 30"><title id="facebook-icon-title">facebook</title><path d="M17.1357031,15.5625 L17.5941117,12.4858984 L14.7279298,12.4858984 L14.7279298,10.4893945 C14.7279298,9.64769531 15.1283119,8.82724609 16.4119849,8.82724609 L17.715,8.82724609 L17.715,6.20785156 C17.715,6.20785156 16.5325509,6 15.4020031,6 C13.041618,6 11.4987605,7.47355469 11.4987605,10.1410937 L11.4987605,12.4858984 L8.875,12.4858984 L8.875,15.5625 L11.4987605,15.5625 L11.4987605,23 L14.7279298,23 L14.7279298,15.5625 L17.1357031,15.5625 Z" id="Path" fill="#4267b2" fill-rule="nonzero"></path></svg>
                                    </button>

                                    <button className="google--icon2">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="23" height="20" viewBox="0 -5 48 48">
                                            <path fill="#FFC107" d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path><path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path><path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path><path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
                                        </svg>
                                    </button>

                                </div>

                                <button className="get--log--in" onClick={handleGetLink}>Get log in link</button>

                                <p className="or--with--email">or with email</p>
                                
                                <form className="log--in--form">
                                    <input type="text" name="email" placeholder="Username or Email"/>
                                    <input type="password" name="password" placeholder="Password"/>
                    
                                     <a href="#" className="forgot--password">Forgot your password?</a>
                                    <button className="log--in--button">Log In</button>
                                </form>

                                <p className="new--to--flip">New to Flipboard?<span><Link to='/signup'><a href="#"> Sign Up</a></Link></span></p>
                                <p className="terms3">By continuing, you accept the<span><a href="#"> Terms of<br /> Use</a></span> and <span><a href="#">Privacy Policy.</a></span></p>
                            </div>
                        </div>
                    </div>
                )}
                {getLink && (
                                    <div className="getLink--bg">
                                        <div className="getLink--box" ref={getLinkBgRef}>

                                        <button className="x2--button" onClick={handleClick4}>
                                <div>
                                <svg role="img" aria-labelledby="closenew-icon-title" width="24" height="24" viewBox="0 0 24 24" fill="none"><title id="closenew-icon-title">closenew</title><path d="M15.7071 8.29304C16.0976 8.68357 16.0976 9.31673 15.7071 9.70726L13.4142 12.0002L15.7071 14.293C16.0976 14.6836 16.0976 15.3167 15.7071 15.7073C15.3166 16.0978 14.6834 16.0978 14.2929 15.7073L12 13.4144L9.70711 15.7073C9.31658 16.0978 8.68342 16.0978 8.29289 15.7073C7.90237 15.3167 7.90237 14.6836 8.29289 14.293L10.5858 12.0002L8.29289 9.70726C7.90237 9.31673 7.90237 8.68357 8.29289 8.29304C8.68342 7.90252 9.31658 7.90252 9.70711 8.29304L12 10.5859L14.2929 8.29304C14.6834 7.90252 15.3166 7.90252 15.7071 8.29304Z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M12 1C5.92487 1 1 5.92487 1 12C1 18.0751 5.92487 23 12 23C18.0751 23 23 18.0751 23 12C23 5.92487 18.0751 1 12 1ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z" fill="currentColor"></path></svg>
                                </div>
                            </button>

                                           <div className="getLink--content"> 
                                           
                                            <svg role="img" aria-labelledby="logo-icon-title logo-icon-desc" class="logo--icon" width="40" height="40" viewBox="0 0 100 100" shape-rendering="crispEdges"><title id="logo-icon-title">Flipboard</title><desc id="logo-icon-desc">Icon version of the Flipboard logo</desc><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Flipboard_01_Lockup" fill="#F52828" fill-rule="nonzero"><path d="M0,0 L0,100 L100,100 L100,0 L0,0 Z M80,40 L60,40 L60,60 L40,60 L40,80 L20,80 L20,20 L80,20 L80,40 Z" id="Shape"></path></g></g></svg>
                                            
                                            <h2>REQUEST LOG IN LINK</h2>
                                        <div>
                                            <form>
                                                <input type="text" name="email" placeholder="Email"/>
                                                <button className="send--button">Send</button>
                                            </form>
                                        </div>
                                            <p>By continuing, you accept the Terms of Use and Privacy Policy.</p>
            
                                            </div>
                                        </div>
                                    </div>
                                )}

                    {isSearched && (
                        <div className="search--bg">
                            <div className="search--box" ref={isSearchedBgRef}>
                                <div className="search--bar">
                                    <svg role="img" aria-labelledby="search-icon-title" className="search--icon" width="18" height="18" viewBox="0 0 22 22"><title id="search-icon-title">Search</title><g transform="translate(2.000000, 2.000000)" stroke="#999" stroke-width="1.5" fill="none"><circle cx="7" cy="7" r="7"></circle><path d="M12,13 L17,18" stroke-linecap="square"></path></g></svg>
                                    <input type="text" placeholder="Search Flipboard" className="search--2 padding--2" name="search" ref={inputRef}/>
                                    <button onClick={handleSearch}>Cancel</button>
            
                                </div>

                                
                                    <div className="search--box--content">
                                        <p className="subtitle">Search all of Flipboard for topics, articles, magazines, and<br /> profiles.</p>
                                        <div className="flip--tv">
                                            <h3>FLIPBOARD TV</h3>
                                            <p>Premium videos, curated for your interests</p>
                                        </div>

                                        <div className="search--box--sections">
                                            <p>Popular Topics</p>
                                            <ul>
                                                <li><a href="#">#NEWS</a></li>
                                                <li><a href="#">#SCIENCE</a></li>
                                                <li><a href="#">#TECHNOLOGY</a></li>
                                                <li><a href="#">#BUSINESS</a></li>
                                                <li><a href="#">#POLITICS</a></li>
                                                <li><a href="#">#TRAVEL</a></li>
                                                <li><a href="#">#FOOD</a></li>
                                                <li><a href="#">#PERSONAL FINANCE</a></li>
                                                <li><a href="#">#HEALTH</a></li>
                                                <li><a href="#">#CLIMATE CHANGE</a></li>
                                                <li><a href="#">#TV</a></li>
                                                <li><a href="#">#DOGS</a></li>
                                                <li><a href="#">#AUTOS</a></li>
                                                <li><a href="#">#INNOVATION</a></li>
                                                <li><a href="#">#EDUCATION</a></li>
                                                <li><a href="#">#THE BRAIN</a></li>
                                                <li><a href="#">#GAMING</a></li>
                                                <li><a href="#">#CULTURE</a></li>
                                                <li><a href="#">#BEAUTY</a></li>
                                                <li><a href="#">#GADGETS</a></li>
                                                <li><a href="#">#HISTORY</a></li>
                                                <li><a href="#">#CRAFTING</a></li>
                                                <li><a href="#">#MILITARY</a></li>
                                                <li><a href="#">#NATURE</a></li>
                                                <li><a href="#">#AGING</a></li>
                                                <li><a href="#">#SHOPPING</a></li>
                                                <li><a href="#">#APPLE</a></li>
                                                <li><a href="#">#IDEAS</a></li>


                                            
                                            </ul>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    )}

                </div>
        </nav>
        </header>
        
    )
}