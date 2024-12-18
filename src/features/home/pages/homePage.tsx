import './../css/homePage.css';
import React from "react";
import HomeTop from '../components/homeTop';
import HomeBanner from "../components/homeBanner";

const HomePage: React.FC = () => {
  return (
    <div className='home_page_container'>
      <HomeTop />
      <HomeBanner />
    </div>
  );
};

export default HomePage;
