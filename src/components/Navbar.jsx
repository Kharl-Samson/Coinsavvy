import React, {useState} from 'react'
import logoImg from "../assets/images/mainLogo.svg"
import searchIcon from "../assets/images/searchIcon.svg"
import avatar from "../assets/images/avatar.svg"

// MUI Tooltip
import { styled } from '@mui/material/styles';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

// Mui Menu Bar
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';


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

export default function Navbar(props) {
  const themeTitleTip = props.isCheckedTheme ? "Enable Light Mode" : "Enable Dark Mode"

  // Theme Color Setter
  const menuBarColor = props.isCheckedTheme ? "menuBarDark" : "menuBarLight"
  const background_1 = props.isCheckedTheme ? "darkBG1" : "lightBG1"
  const textColor_1 = props.isCheckedTheme ? "darkText1" : "lightText1"

  const MenuBarColor = props.isCheckedTheme ? "#000000" : "#ffff"

  // Menu bar
  const [isMenuBar, setMenuBar] = useState(false);

  function toggleMenuBar(){
     const newValue = !isMenuBar;
     setMenuBar(newValue);
  }

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    const newValue = !isMenuBar;
    setMenuBar(newValue);
    setAnchorEl(null);
  };

  return (
    <nav className={background_1}> 
        {/* Nav Content Left Part */}
        <div className='content'>
            {/* Logo Container */}
            <div className='logoContainer'>
                <img src={logoImg} alt="Website Logo"/>
                <p>Coin<span className={textColor_1}>savvy</span></p>
            </div>

            {/* Link Container */}
            <div className='linkContainer'>
              <div className='link linkActive'>
                <span>Homepage</span>
              </div>
              <div className={`link ${textColor_1}`}>
                <span>About</span>
              </div>
              <div className={`link ${textColor_1}`}>
                <span>Crypto Currency</span>
              </div>
            </div>
        </div>
        
        {/* Nav Content Right Part */}
        <div className='content contentRight'>
          {/* Search Container */}
          <div className='searchContainer'>
            <div className='searchBox'>
              <div className='searchIcon'>
                <img src={searchIcon} alt="Search Icon"/>
              </div>
              <input type="text"/>
            </div>
            <button>Search</button>
          </div>

          {/* Theme Toggle Container */}
          <div className='themeToggle'>
            <LightTooltip title={themeTitleTip}>
            <div>
              <input 
                type="checkbox" 
                className="dn" 
                id="dn" 
                checked={props.isCheckedTheme}
                onChange={props.theme_toggle}
              />
              <label htmlFor="dn" className="toggle">
                  <span className="toggle__handler">
                      <span className="crater crater--1"></span>
                      <span className="crater crater--2"></span>
                      <span className="crater crater--3"></span>
                  </span>
                  <span className="star star--1"></span>
                  <span className="star star--2"></span>
                  <span className="star star--3"></span>
                  <span className="star star--4"></span>
                  <span className="star star--5"></span>
                  <span className="star star--6"></span>
              </label>
            </div>
            </LightTooltip>
          </div>

          {/*  Avatar Container */}
          <div className='avatarContainer'>
            <img src={avatar} alt="My Avatar"/>
          </div>

          {/* Menu Bar on Small Devices  */}
          <LightTooltip title="Open menu bar">
          <div className='menuBar' onClick={handleClick}>
            <label className="container">
              <input 
                type="checkbox"
                checked={isMenuBar}
                onChange={toggleMenuBar}
              />
              <div className="checkmark">
                <span className={menuBarColor}></span>
                <span className={menuBarColor}></span>
                <span className={menuBarColor}></span>
              </div>
            </label>
          </div>
          </LightTooltip>

          {/* Menu Container on small devices */}
          <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            // onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                background: MenuBarColor,
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: MenuBarColor,
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={handleClose} className={textColor_1}>
               Home
            </MenuItem>
            <MenuItem onClick={handleClose} className={textColor_1}>
               About
            </MenuItem>
            <MenuItem onClick={handleClose} className={textColor_1}>
               Crypto Currency
            </MenuItem>
            <MenuItem> 
              {/* Theme Toggle Container */}
              <div className='themeToggleSmallDevice'>  
                <label className="switch">
                  <span className="sun"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g fill="#ffd43b"><circle r="5" cy="12" cx="12"></circle><path d="m21 13h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm-17 0h-1a1 1 0 0 1 0-2h1a1 1 0 0 1 0 2zm13.66-5.66a1 1 0 0 1 -.66-.29 1 1 0 0 1 0-1.41l.71-.71a1 1 0 1 1 1.41 1.41l-.71.71a1 1 0 0 1 -.75.29zm-12.02 12.02a1 1 0 0 1 -.71-.29 1 1 0 0 1 0-1.41l.71-.66a1 1 0 0 1 1.41 1.41l-.71.71a1 1 0 0 1 -.7.24zm6.36-14.36a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm0 17a1 1 0 0 1 -1-1v-1a1 1 0 0 1 2 0v1a1 1 0 0 1 -1 1zm-5.66-14.66a1 1 0 0 1 -.7-.29l-.71-.71a1 1 0 0 1 1.41-1.41l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.29zm12.02 12.02a1 1 0 0 1 -.7-.29l-.66-.71a1 1 0 0 1 1.36-1.36l.71.71a1 1 0 0 1 0 1.41 1 1 0 0 1 -.71.24z"></path></g></svg></span>
                  <span className="moon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="m223.5 32c-123.5 0-223.5 100.3-223.5 224s100 224 223.5 224c60.6 0 115.5-24.2 155.8-63.4 5-4.9 6.3-12.5 3.1-18.7s-10.1-9.7-17-8.5c-9.8 1.7-19.8 2.6-30.1 2.6-96.9 0-175.5-78.8-175.5-176 0-65.8 36-123.1 89.3-153.3 6.1-3.5 9.2-10.5 7.7-17.3s-7.3-11.9-14.3-12.5c-6.3-.5-12.6-.8-19-.8z"></path></svg></span>   
                  <input 
                    type="checkbox" 
                    className="input"
                    checked={props.isCheckedTheme}
                    onChange={props.theme_toggle}
                  />
                  <span className="slider"></span>
                </label>
              </div>   
            </MenuItem>
          </Menu>

        </div>
    </nav>
  )
}
