import React, {useState, useEffect} from 'react'
import "./css/Global.css"
import Homepage from "./components/homepage"

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
       <Homepage
        theme_toggle = {theme_toggle}
        isCheckedTheme = {isCheckedTheme}
       />
    </div>
  )
}

export default App
