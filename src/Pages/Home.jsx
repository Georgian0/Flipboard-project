import React from 'react';
import Navbar from "../Components/Navbar.jsx";
import Hero from "../Components/Hero.jsx";
import Tabbers from "../Components/Tabs.jsx"
import Footer from "../Components/Footer.jsx"
import Cards from "../Components/Cards.jsx"

export default function Home() {
    return (
        <div>
        <Navbar />
          <Hero />
          <Tabbers />
          <Cards />
          <Footer />
        </div>
    )
}