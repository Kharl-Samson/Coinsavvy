import React from 'react'
import "../../css/CryptoCurrencyPage.css"
import Footer from '../Footer'
import HeroContent from './HeroContent'
import Navbar from '../Navbar'
import MarketContent from './MarketContent'

export default function CryptoCurrency(props) {
  return (
    <>
      {/* Navbar Content */}
      <Navbar 
        theme_toggle = {props.theme_toggle}
        isCheckedTheme = {props.isCheckedTheme}
        activePage = {'CryptoCurrencyPage'}
      />

      {/* Hero Content */}
      <HeroContent
        isCheckedTheme = {props.isCheckedTheme}
      />

      {/* Market Content */}
      <MarketContent
          isCheckedTheme = {props.isCheckedTheme}
      />

      {/* Footer */}
      <Footer
        isCheckedTheme = {props.isCheckedTheme}
      />
    </>
  )
}
