import React from 'react';
import '../../App.css';
import Cards from '../CardsHolder';
import HeroSection from '../HeroSection';
import CardsDeck from '../CardsDeck';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <HeroSection />
      <CardsDeck />
      <Cards />
      {/*<Footer />*/}
    </>
  );
}

export default Home;