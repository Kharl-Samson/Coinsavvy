import React from 'react'
import "../../css/HomePage.css"
import HeroContent from './HeroContent';
import CardContent from './CardContent';
import Navbar from '../Navbar'
import MarketContent from './MarketContent';


export default function Homepage(props) {
  return (
    <>
      <Navbar
        theme_toggle = {props.theme_toggle}
        isCheckedTheme = {props.isCheckedTheme}
      />

      {/* Hero Content */}
      <HeroContent
        isCheckedTheme = {props.isCheckedTheme}
      />

      {/* Card Content */}
      <CardContent
        isCheckedTheme = {props.isCheckedTheme}
      />

      {/* Market Content */}
      <MarketContent
        isCheckedTheme = {props.isCheckedTheme}
      />

    </>
  )
}
