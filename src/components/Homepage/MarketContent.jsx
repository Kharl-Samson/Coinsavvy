import React, {useState, useEffect} from 'react'

// MUI Tooltip
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

//Chart Js
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

// Axios
import axios from 'axios';

// MUI Skeleton
import Skeleton from '@mui/material/Skeleton';

// Test Data
import test_marketData from './_TestData_/marketData';

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
    const options = {
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                display: false,
                grid: {
                    display: false,
                },
            },
            y: {
                display: false,
                grid: {
                    display: false,
                },
            },
        },
    };


    // Loading data variable
    const [isLoadingMarketData, setisLoadingMarketData] = useState(true); 

    const [marketData, setMarketData] = useState(null);  
    const loadMarketData = async () =>{
      const result = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=price_change_percentage_7d_desc&per_page=10&page=1&sparkline=true&price_change_percentage=7d')
      setMarketData(result.data)
      console.log(result)
      setisLoadingMarketData(false)

    //   const result = test_marketData
    //   setMarketData(result)
    //   setisLoadingMarketData(false)
    };
    useEffect(() => {
      // Remove mo to pag real data na
    //   setTimeout(()=>{
        loadMarketData();
    //   },1000)

    }, [isLoadingMarketData])


    const marketDataMapping = isLoadingMarketData
    ? Array.from({ length: 10 }, (_, index) => (
        <div className='row' style={{display: 'flex',alignItems:'center'}} key={index}>
          <Skeleton animation="wave" height={60} width={'100%'}/>
        </div>
      ))
    : marketData && marketData.length > 0
    ? marketData.map((res, index) => {

        const currentPrice = res.current_price.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
        const percentage24 = res.price_change_percentage_24h.toFixed(2)
        const marketCap = res.market_cap.toLocaleString('en-US', { style: 'currency', currency: 'USD' });

        const changes7days = res.sparkline_in_7d.price
        const coinGraph = []

        changes7days.map((changes,count) => {
            if(count < 7){
                let percentageChange = ((res.current_price - changes) / changes) * 100
                coinGraph.push(percentageChange.toFixed(2))
            }
        })
     
        return (
            <div className='row' key={index}>
                <div className='col col1'>
                    <input type="checkbox" id={`star${index}`} className='favoriteIcon'/>
                    <LightTooltip title="Add to favorite">
                        <label htmlFor={`star${index}`}>
                          <svg viewBox="0 0 24 24">
                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path>
                          </svg>
                        </label>
                    </LightTooltip>
                </div>
                <div className='col col2'>
                    <span className={textColor_1}>{res.market_cap_rank}</span>
                </div>
                <div className='col col3'>
                    <div className='nameDetails'>
                        <img src={res.image} alt='Coin Image'/>
                        <p className={textColor_1}>{res.name} <span>{res.symbol}</span></p>
                    </div>
                </div>
                <div className='col col4'>
                    <span className={textColor_1}>{currentPrice}</span>
                </div>
                <div className='col col5'>
                    <span className={percentage24 < 0 ? "low24" : "high24"}>{percentage24 < 0 ? "" : "+"}{percentage24}%</span>
                </div>
                <div className='col col6'>
                    <span className={textColor_1}>{marketCap.slice(0, -3)}</span>
                </div>
                <div className='col col7'>
                    <div style={{width:"70%", height:"100%"}}>
                        <Line 
                            data={
                                {
                                    labels: coinGraph,
                                    datasets:[{
                                        fill: true,
                                        tension: 0.5,
                                        borderWidth: 0,
                                        backgroundColor: [
                                            percentage24 < 0 ? "#d3353586" : "#58bd7d8a"
                                        ],
                                        data:coinGraph
                                    },]
                                }
                            } 
                            options={options}
                        />
                    </div>
                </div>
            </div>
        );
      })
  : null;


  return (
    <div className={`marketMainContent ${background_1}`}>
    

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
                    {marketDataMapping}
            </div>     

        </div>
    </div>
  )
}
