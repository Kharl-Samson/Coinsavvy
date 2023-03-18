import React, { useEffect } from 'react';
import slider1 from "../../assets/images/slider1.png"
import slider2 from "../../assets/images/slider2.png"
import slider3 from "../../assets/images/slider3.png"
import slider4 from "../../assets/images/slider4.png"
import checkIcon from "../../assets/images/checkIcon.svg"

// AOS Library
import AOS from "aos"
import "aos/dist/aos.css"

// React Swiper
import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper'

export default function WhatIsCoinsavvyContent(props) {
  // Theme Color Setter
  const background_1 = props.isCheckedTheme ? "darkBG1" : "lightBG1"
  const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"

  //To run the AOS library
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);


  return (
    <div className={`whatIsCoinsavvyContainer ${background_1}`}>
        <div className='whatIsCoinsavvyContent everyContainerWidth'>

            {/* Slider Container */}
            <div className='sliderContainer'>
                <Swiper
                  spaceBetween={30}
                  centeredSlides={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  pagination={{
                    clickable: true,
                  }}
                  navigation={true}
                  modules={[Autoplay, Pagination, Navigation]}
                  className="mySwiper"
                >
                  <SwiperSlide>
                    <img alt='Swiper Image' src={slider1}/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img alt='Swiper Image' src={slider2}/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img alt='Swiper Image' src={slider3}/>
                  </SwiperSlide>
                  <SwiperSlide>
                    <img alt='Swiper Image' src={slider4}/>
                  </SwiperSlide>
                </Swiper>
            </div>

            {/* Description Part */}
            <div className='descriptionContainer' data-aos="fade-up" data-aos-duration="800">
              <p className={`title ${textColor_1}`}>What is Coinsavvy</p>
              <p className='description'>Coinsavvy provides detailed information on every cryptocurrency in the market, including market capitalization, price history, trading volume, and expert analysis. Stay informed and make informed decisions with us!</p>

              <div className='subTitle'>
                <img alt='Check Icon' src={checkIcon}/>
                <p className={textColor_1}>View real-time cryptocurrency prices</p>
              </div>
              <p className='subTitleDescription'>We provide real-time cryptocurrency prices and market data to help you stay up-to-date with the latest developments in the world of digital assets.</p>

              <div className='subTitle'>
                <img alt='Check Icon' src={checkIcon}/>
                <p className={textColor_1}>Provides latest update on the market</p>
              </div>
              <p className='subTitleDescription'>Our team of experts brings you up-to-the-minute news on breaking developments in the cryptocurrency world, along with insightful analysis of market trends and investment opportunities.</p>


              <div className='btnContainer'>
                <button>
                  <span className="transition"></span>
                  <span className="gradient"></span>
                  <span className="label">Explore More</span>
                </button>
              </div>

            </div>
        </div>
    </div>
  )
}
