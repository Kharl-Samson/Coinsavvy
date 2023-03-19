import React from 'react'
import logoImg from "../assets/images/mainLogo.png"

// Navigate 
import { useNavigate } from "react-router-dom";

export default function Footer(props) {
  // Navigate Function
  let navigate = useNavigate();
  function goToHome(){
    navigate(`/`);
  }
  function CryptoCurrency(){
    navigate(`/CryptoCurrency`);
  }


  // Theme Color Setter
  const background_1 = props.isCheckedTheme ? "darkBG1" : "lightBG1"
  const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"

  return (
    <div className={`footer_container ${background_1}`} id="footer_container">
       <div className="top">
        <div className="logo">
          <img alt='Logo' src={logoImg} loading="lazy"/>
          <p>Coin<span className={textColor_1}>savvy</span></p>
        </div>

        <div className="info">
            <div className="info_content">
                <p>This site was developed by Kharl. It cannot and should not be reproduced in any forms or by any means without the consent from him.</p>
            </div>
        </div>

        <div className="footer">
            <div className="footer_nav">
                <a href="#" className={textColor_1} onClick={goToHome}>Home</a>
                <a href="#" className={textColor_1} onClick={CryptoCurrency}>Crypto Currency</a>
            </div>
            <p>Coinsavvy by Kharl © {(new Date().getFullYear())}</p>
        </div>
       </div>
    </div>
  )
}
