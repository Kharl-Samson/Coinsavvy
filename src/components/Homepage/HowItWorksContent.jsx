import React from 'react'
import howItworks1 from "../../assets/images/howItworks1.png"
import howItworks2 from "../../assets/images/howItworks2.png"
import howItworks3 from "../../assets/images/howItworks3.png"
import howItworks4 from "../../assets/images/howItworks4.png"

export default function HowItWorksContent(props) {
   // Theme Color Setter
  const background_2 = props.isCheckedTheme ? "darkBG2" : "lightBG2"
  const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"

  return (
    <div className={`howItWorksMainContainer ${background_2}`}>
        <div className='howItWorksContent everyContainerWidth'>
            <p className={`title ${textColor_1}`}>How It Work</p>
            <p className='description'>Cryptocurrency is a digital payment system that doesn't rely on banks to verify transactions.</p>

            {/* Steps Container */}
            <div className='stepsContainer'>
                <div className='box'>
                    <img src={howItworks1} alt='How It Works Image'/>
                    <span>STEP 1</span>
                    <p className={`stepTitle ${textColor_1}`}>Creation</p>
                    <p className='details'>Cryptocurrencies are created through a process called mining, which involves solving complex mathematical equations using powerful computers.</p>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <p className='divider'><span style={{color:'#3772FF'}}>o</span> - - - <span style={{color:'#3772FF'}}>o</span></p>
                </div>
                <div className='box'>
                    <img src={howItworks2} alt='How It Works Image'/>
                    <span>STEP 2</span>
                    <p className={`stepTitle ${textColor_1}`}>Transactions</p>
                    <p className='details'>Cryptocurrencies are transferred between users through a decentralized ledger called a blockchain.</p>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <p className='divider'><span style={{color:'#3772FF'}}>o</span> - - - <span style={{color:'#3772FF'}}>o</span></p>
                </div>
                <div className='box'>
                    <img src={howItworks3} alt='How It Works Image'/>
                    <span>STEP 3</span>
                    <p className={`stepTitle ${textColor_1}`}>Security</p>
                    <p className='details'>Cryptocurrencies are secured by advanced cryptography, which makes them resistant to counterfeiting and hacking attempts.</p>
                </div>
                <div style={{display:'flex',alignItems:'center'}}>
                    <p className='divider'><span style={{color:'#3772FF'}}>o</span> - - - <span style={{color:'#3772FF'}}>o</span></p>
                </div>
                <div className='box'>
                    <img src={howItworks4} alt='How It Works Image'/>
                    <span>STEP 4</span>
                    <p className={`stepTitle ${textColor_1}`}>Value</p>
                    <p className='details'>Cryptocurrencies derive their value from a variety of factors, including supply and demand, investor sentiment, and overall market conditions.</p>
                </div>
            </div>
        </div>
    </div>
  )
}
