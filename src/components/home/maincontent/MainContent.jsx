import React from 'react';
import "./MainContent.css";
import {isMobile} from 'react-device-detect';
import Favourites from "../../../assets/Favourites.png"
import FrontPose from "../../../assets/FrontPose.png"
import Sidepose from "../../../assets/Sidepose.png"
import Backpose from "../../../assets/Backpose.png"
import ClothTexture from "../../../assets/ClothTexture.png"
import FullCostume from "../../../assets/FullCostume.png"
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const MainContent = () => {

  return (
    <div className="main-container">
        <div className='fav-icon'>
        <img src={Favourites} />
        </div>
        {isMobile ? (
            <>
            <Carousel 
            showIndicators={true}
            swipeable={true}
            showThumbs={false}
            showArrows={false}
            >
              <img src={FrontPose} />
              <img src={Sidepose} />
              <img src={Backpose} />
              <img src={ClothTexture} />
              <img src={FullCostume} />
            </Carousel>
            </>
        ): (
            <div className="main-container">
            <img src={FrontPose} />
            <div className='image-display'>
            <img src={Sidepose} />
            <img src={Backpose} />
            </div>
            <h6>view more like this product</h6>
            <img src={ClothTexture} />
            <img src={FullCostume} />
            </div>
        )}


  </div>

  )
}

export default MainContent;