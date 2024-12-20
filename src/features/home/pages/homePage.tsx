import './../css/home/homePage.css';
import React from "react";
import HomeTop from '../components/home/homeTop';
import HomeBanner from "../components/home/homeBanner";
import HomeItem from '../components/home/homeItem';
import HomeTopPicks from '../components/home/homeTopPicks';
import HomeJustDropped from '../components/home/homeJustDropped';
import HomeTopBrand from '../components/home/homeTopBrand';
import HomeAdvertisement from '../components/home/homeAdvertisement';
import HomeMostPopular from '../components/home/homeMostPopular';
import HomeNewIn from '../components/home/homeNewIn';
import HomeMuffler from '../components/home/homeMuffler';
import HomeOutdoor from '../components/home/homeOutdoor';
import HomePeaches from '../components/home/homePeaches';
import HomeBlrLeebok from '../components/home/homeBlrLeebok';
import HomeWinter from '../components/home/homeWinter';
import HomeRecommend from '../components/home/homeRecommend';

const HomePage: React.FC = () => {
  return (
    <div className='home_page_container'>
      <HomeTop />
      <HomeBanner />
      <HomeItem />
      <HomeTopPicks />
      <HomeJustDropped />
      <HomeTopBrand />
      <HomeAdvertisement num={1}/>
      <HomeMostPopular />
      <HomeAdvertisement num={2}/>
      <HomeNewIn />
      <HomeAdvertisement num={3}/>
      <HomeMuffler />
      <HomeAdvertisement num={4}/>
      <HomeOutdoor />
      <HomeAdvertisement num={5}/>
      <HomePeaches />
      <HomeAdvertisement num={6}/>
      <HomeBlrLeebok />
      <HomeAdvertisement num={7}/>
      <HomeWinter />
      <HomeRecommend />
    </div>
  );
};

export default HomePage;
