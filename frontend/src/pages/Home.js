import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import CardCollage from "../components/CardCollage";
import CardsDeck from "../components/CardsDeck";
import Footer from      '../components/Footer';

function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <CardsDeck />
        {/*<Footer />*/}
    </>
  );
}

export default Home;
