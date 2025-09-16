import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [theme,settheme]=useState(()=>{
    return localStorage.getItem("theme")||"light";
  });
  const changecolour=()=>{
    const newtheme=theme==="light"?"dark":"light"
    settheme(newtheme)
    localStorage.setItem("theme",newtheme)
  }

  const appstyle={
    backgroundColor:theme==="light"?"white":"black",
    color:theme==="light"?"black":"white",
    height:"100vh",
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    
  }
  return (
    <>
      <div style={appstyle}>
        <h1>Current Theme :{theme==="light"?"🌞 Light" : "🌙 Dark"}</h1>
        <button onClick={changecolour}>Switch to {theme==="light"?"🌙 Dark" : "🌞 Light"}</button>
      </div>
    </>
  )
}

export default App
