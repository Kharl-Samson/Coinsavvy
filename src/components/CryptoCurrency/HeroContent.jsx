import React, {useState, useEffect} from 'react'
import heroImage from "../../assets/images/heroImage_2.png"

// Axios
import axios from 'axios';

export default function HeroContent(props) {
    // Theme Color Setter
  const background_2 = props.isCheckedTheme ? "darkBG2" : "lightBG2"
  const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"

  // Hook for getting global market cap
  const [marketCap, setMarketCap] = useState(null); 
  const loadMarketCap = async () => {
      try {
          const result = await axios.get('https://api.coingecko.com/api/v3/global');
          setMarketCap(result.data.data.total_market_cap.usd);
      } 
      catch (error) {
        setMarketCap("$1.86T")
      }
  };

  useEffect(() => {
    loadMarketCap();
  }, [])

  return (
    <div className={`CryptoCurrencyPageContainer ${background_2}`}>
        <div className='container everyContainerWidth'>
          <div className='heroDetails'>
            <p className={`title ${textColor_1}`}>Today’s Cryptocurrency prices</p>
            <p className='description'>The global crypto market cap is &nbsp; 
                <span className={textColor_1}>
                {marketCap ? marketCap.toLocaleString('en-US', { style: 'currency', currency: 'USD' }).slice(0, -3) : "$1.86T"}   
                </span>
            </p>
          </div>

          <img src={heroImage} alt='Hero Image'/>
        </div>
    </div>
  )
}
