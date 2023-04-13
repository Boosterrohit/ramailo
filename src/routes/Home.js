import React from 'react'
import Navbar from '../components/Navbar';
import HeroImg from '../components/HeroImg';
import Footer from '../components/Footer';
import Home123 from '../components/Home123';

const Home = () => {
  return (
    <div>
      <Navbar/>
      <HeroImg/>
      <Home123/>
      <Footer />
    </div>
  )
}

export default Home