import React, {useEffect} from 'react';
import checkIcon from "../../assets/images/checkIcon.svg"
import phonePromotion from "../../assets/images/phonePromotion.png"

// AOS Library
import AOS from "aos"
import "aos/dist/aos.css"

export default function PromotionContent(props) {
  // Theme Color Setter
  const background_2 = props.isCheckedTheme ? "darkBG2" : "lightBG2"
  const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"

  //To run the AOS library
  useEffect(() => {
      AOS.init();
      AOS.refresh();
  }, []);
    
  return (
    <div className={`promotionContainer ${background_2}`}>
        <div className='promotionContent everyContainerWidth'>


            {/* Description Part */}
            <div className='descriptionContainer' data-aos="fade-up" data-aos-duration="800">
              <p className={`title ${textColor_1}`}>Want to free Your Money & Invest With Confident?</p>
              <p className='description'>What sets our website apart is our unique perspective on the market</p>

              <div className='subTitle'>
                <img alt='Check Icon' src={checkIcon}/>
                <p className={textColor_1}>Transparency And Accountability</p>
              </div>
              <p className='subTitleDescription'>With our expert insights and comprehensive coverage, our website is your go-to source for all things cryptocurrency.</p>

              <div className='subTitle'>
                <img alt='Check Icon' src={checkIcon}/>
                <p className={textColor_1}>Up To The Minute News</p>
              </div>
              <p className='subTitleDescription'>Whether you're a seasoned investor or just starting to explore the world of crypto, our website offers valuable insights and information to help you stay ahead of the curve.</p>
            </div>

            {/* Promotion Image Container */}
            <div className='sliderContainer'>
               <img alt='Promotion Image' src={phonePromotion}/>
            </div>
        </div>
    </div>
  )
}
