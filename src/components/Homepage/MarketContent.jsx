import React, {useState} from 'react'

// MUI Tooltip
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

//Chart Js
import { Bar, Line, Doughnut } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const LightTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.white,
      color: 'rgba(0, 0, 0, 0.87)',
      boxShadow: theme.shadows[1],
      fontSize: 11,
    },
  }));


export default function MarketContent(props) {
    // Theme Color Setter
    const background_1 = props.isCheckedTheme ? "darkBG1" : "lightBG1"
    const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"


    //Chart settings
    const weatherData_array = [
        {
         infoTitle: "Min Temp.",
        },
        {
         infoTitle: "Max Temp.",
        },
        {
         infoTitle: "Feels Like",
        },
        {
         infoTitle: "Humidity",
        },
    ]
    const myArray = ['1.51','2','0.4','3.5','1.2','4','2.21'];
    
    const [weatherData,setweatherData] = useState({
        labels: myArray,
        datasets:[{
            label: "",
            backgroundColor: [
                "#58bd7d"
            ],
            data:myArray
        }]
    })
    


  return (
    <div className={`marketMainContent ${background_1}`}>

<div style={{width:"200px", height:"200px"}}>
<Line data={weatherData}/>
</div>
    

        <div className='marketContent everyContainerWidth'>

            <div className='headerContainer'>
                <p className={`title ${textColor_1}`}>Market Update</p>
                <p className={`seeAll ${textColor_1}`}>See All Coins</p>
            </div>

            {/* Table Header */}
            <div className='tableHeader'>
                <div className='col col1'></div>
                <div className='col col2'><span>#</span></div>
                <div className='col col3'><span>Name</span></div>
                <div className='col col4'><span>Last Price</span></div>
                <div className='col col5'><span>24h %</span></div>
                <div className='col col6'><span>Market Cap</span></div>
                <div className='col col7'><span>Last 7 Days</span></div>
            </div>
            {/* Table Body */}
            <div className='tableBody'>
                <div className='row'>
                    <div className='col col1'>
                        <input type="checkbox" id="star"/>
                        <LightTooltip title="Add to favorite">
                            <label htmlFor="star">
                              <svg viewBox="0 0 24 24">
                                <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                              </svg>
                            </label>
                        </LightTooltip>
                    </div>
                    <div className='col col2'>
                        <span className={textColor_1}>1</span>
                    </div>
                    <div className='col col3'>
                        <div className='nameDetails'>
                            <img src='https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579' alt='Coin Image'/>
                            <p className={textColor_1}>Bitcoin <span>BTC</span></p>
                        </div>
                    </div>
                    <div className='col col4'>
                        <span className={textColor_1}>₱ 1,356,796</span>
                    </div>
                    <div className='col col5'>
                        <span className=''>-0.76%</span>
                    </div>
                    <div className='col col6'>
                        <span className={textColor_1}>₱ 26,217,754,747</span>
                    </div>
                    <div className='col col7'></div>
                </div>
            </div>     

        </div>
    </div>
  )
}
