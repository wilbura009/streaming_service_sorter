import React from 'react';
//import '../../App.css'; // <- Is this for fallback? Do we need it?
import Cards from       '../components/CardsHolder';
import HeroSection from '../components/HeroSection';
//import CardsDeck from   '../components/CardsDeck';
import Footer from      '../components/Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      {/*<Footer />*/}
    </>
  );
}

export default Home;
