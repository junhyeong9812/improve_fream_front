import './../css/home/homePage.css';
import React from "react";
import HomeTop from '../components/home/homeTop';
import HomeBanner from "../components/home/homeBanner";
import HomeItem from '../components/home/homeItem';
import HomeTopPicks from '../components/home/homeTopPicks';
import HomeJustDropped from '../components/home/homeJustDropped';
import HomeTopBrand from '../components/home/homeTopBrand';
import Advertisement from '../components/advertisement';

const HomePage: React.FC = () => {
  return (
    <div className='home_page_container'>
      <HomeTop />
      <HomeBanner />
      <HomeItem />
      <HomeTopPicks />
      <HomeJustDropped />
      <HomeTopBrand />

      <Advertisement />
      
    </div>
  );
};

export default HomePage;
