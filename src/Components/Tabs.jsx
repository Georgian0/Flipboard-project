import React, {useEffect, useState} from "react";
import '../Styles/Hero.css';

export default function Tabbers() {

  const [isSticky, setIsSticky] = useState(false);
  const [stickyOffset, setStickyOffset] = useState(0);

  useEffect(() => {
    const navbar = document.getElementById('tabs--navbar');
    const updateStickyOffset = () => {
      if (navbar) {
        setStickyOffset(navbar.offsetTop);
      }
    };


    updateStickyOffset();

    const handleScroll = () => {
      if (window.pageYOffset >= stickyOffset) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', updateStickyOffset);

   
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', updateStickyOffset);
    };
  }, [stickyOffset]);

    return (
        <ul id="tabs--navbar" className={isSticky ? 'sticky' : ''}>
          <li><a href="#">NEWS</a></li>
          <li><a href="#">ENTERTAINMENT</a></li>
          <li><a href="#">TECHNOLOGY</a></li>
          <li><a href="#">TRAVEL</a></li>
          <li><a href="#">FOOD</a></li>
          <li><a href="#">SPORTS</a></li>
          <li><a href="#">FLIPBOARD TV</a></li>
        </ul>
    )
}