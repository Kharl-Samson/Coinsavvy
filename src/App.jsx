import React, {useState, useEffect} from 'react'
import CryptoCurrency from './components/CryptoCurrency/CryptoCurrencyPage';
import Homepage from './components/Homepage/Homepage';
import "./css/Global.css"

// React Router
import { Routes, Route } from "react-router-dom"

function App() {
  const [isCheckedTheme, setisCheckedTheme] = useState(false);

  // Theme Toggle Function
  function theme_toggle(){
     const newValue = !isCheckedTheme;
     setisCheckedTheme(newValue);
     localStorage.setItem("theme", newValue);
  }
  
  useEffect(() => {
     const isDarkModeEnabled = localStorage.getItem("theme");
     setisCheckedTheme(isDarkModeEnabled === "true");
   }, []);
  

  return (
    <div className="App">
        <Routes>
            <Route 
              path="/" 
              element={
                <Homepage
                  theme_toggle = {theme_toggle}
                  isCheckedTheme = {isCheckedTheme}
                />
              }
            />

            <Route 
              path="/CryptoCurrencyPage" 
              element={
                <CryptoCurrency
                  theme_toggle = {theme_toggle}
                  isCheckedTheme = {isCheckedTheme}
                />
              }
            />
        </Routes>
    </div>
  )
}

export default App
