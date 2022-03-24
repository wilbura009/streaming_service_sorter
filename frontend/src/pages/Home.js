import React from 'react';
import Navbar from "../components/Navbar";
import HeroSection from '../components/HeroSection';
import CardCollage from "../components/CardCollage";
import Footer from      '../components/Footer';

function Home() {
  return (
    <>
        <Navbar />
        <HeroSection />
        <CardCollage />
        {/*<Footer />*/}
    </>
  );
}

export default Home;
