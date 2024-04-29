import React from 'react';
import Header from './Header';
import Footer from "./footer/Footer";
import HomeCover from './HomeCover';
import Slider from './Slider';

const Home = () => {
  return (
    <div>
      <Header />
      <HomeCover/>
      <Slider/>
      <Footer/>
      
    </div>
  );
}

export default Home;
