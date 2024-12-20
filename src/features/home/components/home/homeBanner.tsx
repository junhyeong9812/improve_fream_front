import './../../css/home/homeBanner.css';
import React, { useEffect, useState } from "react";
import { BannerItems } from '../../types/homeTypes';

const HomeBanner: React.FC = () => {

  const bannerItemList: BannerItems[] = [
    {img: `${process.env.PUBLIC_URL}/banner/banner1.webp`, backgroundColor: "#ADACB3"},
    {img: `${process.env.PUBLIC_URL}/banner/banner2.webp`, backgroundColor: "#818C8F"},
    {img: `${process.env.PUBLIC_URL}/banner/banner3.webp`, backgroundColor: "#9C9B99"},
  ]

  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    // console.log("banner index : ", currentIndex);
  }, [currentIndex])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerItemList.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, [bannerItemList.length]);

  return (
    <div className='home_banner_container' style={{ backgroundColor: bannerItemList[currentIndex].backgroundColor }}>
        <img
          src={bannerItemList[currentIndex].img}
          className='home_banner_content'
        />
    </div>
  );
};

export default HomeBanner;