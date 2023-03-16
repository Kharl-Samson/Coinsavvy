import React, {useState, useEffect} from 'react'

// MUI Skeleton
import Skeleton from '@mui/material/Skeleton'

// Axios
import axios from 'axios'

// MUI Tooltip
import { styled } from '@mui/material/styles'
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip'

// MUI Snackbar
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';

// Test Data
import test_cardData from './_TestData_/cardData'

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
  

const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  

export default function CardContent(props) {
    // Theme Color Setter
    const background_1 = props.isCheckedTheme ? "darkBG1" : "lightBG1"
    const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"

    // Snackbar
    const [openSnackbar, setOpenSnackbar] = React.useState(false);
    const showSnackbar = () => {
      setOpenSnackbar(true);
    };
    const closeSnackbar = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
    };
  
    // Loading data variable
    const [isLoadingCardData, setisLoadingCardData] = useState(true);
    // Select Category in Card
    const [activeCategory, setActiveCategory] = useState('Crypto');
    function selectCategory(category) {
      setisLoadingCardData(true)
      setActiveCategory(category)
    } 

    const [cardData, setCardData] = useState(null);  
    const loadCardData = async () => {
      try {
        closeSnackbar()
        const result = await axios.get(`https://api.coingecko.com/api/v3/search?query=${activeCategory}`)
        setCardData(result.data.coins)
        setisLoadingCardData(false)
      } 
      catch (error) {
        showSnackbar()
        const result = test_cardData
        setCardData(result.coins)
        setisLoadingCardData(false)
      }
    };
    useEffect(() => {
        loadCardData();
    }, [activeCategory, isLoadingCardData])
    
    const cardDataMapping = isLoadingCardData
      ? Array.from({ length: 4 }, (_, index) => (
          <div className='box' key={index}>
            <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px'}}>
              <Skeleton variant="circular" animation="wave" width={30} height={30} />
              <Skeleton animation="wave" height={30} width={150} />
            </div>
            <Skeleton animation="wave" height={60}/>
            <Skeleton animation="wave" height={20}/>
          </div>
        ))
      : cardData && cardData.length > 0
      ? cardData.slice(0, 4).map((res, index) => {
          return (
          <div className='box' key={index}>
            <div className='label'>
              <img src={res.thumb} alt='Coin Image'/>
              <LightTooltip title={res.name}>
                <p className={textColor_1}>{res.name} <span>USD</span></p>
              </LightTooltip>
            </div>
            <p className={`totalPrice ${textColor_1}`}>{res.symbol}</p>
            <div className='subDetails'>
              <span>{res.api_symbol}</span>
              <LightTooltip title={`Rank no.${res.market_cap_rank}`}>
              <div className='percentage'>{res.market_cap_rank}</div>
              </LightTooltip>
            </div>
          </div>
          );
        })
    : null;
  
  return (
    <div className={`cardMainContainer ${background_1}`}>
      <div className={`cardContainer everyContainerWidth ${background_1}`}>
          <div className='contentBox'>

            <div className='top'>
              <div className={`category ${textColor_1} ${activeCategory === 'Crypto' ? 'categoryActive' : ''}`} onClick={() => selectCategory('Crypto')}><span>Crypto</span></div>
              <div className={`category ${textColor_1} ${activeCategory === 'DeFi' ? 'categoryActive' : ''}`} onClick={() => selectCategory('DeFi')}><span>DeFi</span></div>
              <div className={`category ${textColor_1} ${activeCategory === 'BSC' ? 'categoryActive' : ''}`} onClick={() => selectCategory('BSC')}><span>BSC</span></div>
              <div className={`category ${textColor_1} ${activeCategory === 'NFT' ? 'categoryActive' : ''}`} onClick={() => selectCategory('NFT')}><span>NFT</span></div>
              <div className={`category ${textColor_1} ${activeCategory === 'Metaverse' ? 'categoryActive' : ''}`} onClick={() => selectCategory('Metaverse')}><span>Metaverse</span></div>
              <div className={`category ${textColor_1} ${activeCategory === 'Polkadot' ? 'categoryActive' : ''}`} onClick={() => selectCategory('Polkadot')}><span>Polkadot</span></div>
              <div className={`category ${textColor_1} ${activeCategory === 'Solana' ? 'categoryActive' : ''}`} onClick={() => selectCategory('Solana')}><span>Solana</span></div>
              <div className={`category ${textColor_1} ${activeCategory === 'Marketplace' ? 'categoryActive' : ''}`} onClick={() => selectCategory('Marketplace')}><span>Marketplace</span></div>
            </div>

            <div className='bottom'>
                {cardDataMapping}
            </div>

          </div>
      </div>

      {/* Snackbar */}
      <Snackbar open={openSnackbar} autoHideDuration={5000} onClose={closeSnackbar}>
        <Alert onClose={closeSnackbar} severity="warning">API can't handle too many request, Try again later!</Alert>
      </Snackbar>
      
    </div>
  )
}
