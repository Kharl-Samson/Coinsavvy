import React from 'react'

export default function MarketContent(props) {
    // Theme Color Setter
    const background_1 = props.isCheckedTheme ? "darkBG1" : "lightBG1"
    const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"

  return (
    <div className={`marketMainContent ${background_1}`}>
        <div className='marketContent everyContainerWidth'>

            <div className='headerContainer'>
                <p className={`title ${textColor_1}`}>Market Update</p>
                <p className={`seeAll ${textColor_1}`}>See All Coins</p>
            </div>

            <div className='tableHeader'>
                <div className='col col1'></div>
                <div className='col col2'><span>#</span></div>
                <div className='col col3'><span>Name</span></div>
                <div className='col col4'><span>Last Price</span></div>
                <div className='col col5'><span>24h %</span></div>
                <div className='col col6'><span>Market Cap</span></div>
                <div className='col col7'><span>Last 7 Days</span></div>
            </div>
        </div>
    </div>
  )
}
