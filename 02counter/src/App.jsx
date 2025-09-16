import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


//in react we can't change the value of variable directly like this because react do not track the changes of variable directly like this
//if we change the value of variable directly like this it will not re-render the component
//to make react track the changes of variable we have to use useState hook
//useState hook returns an array of two elements first is the current value of the state and second is the function to update the state
//when we call the function to update the state react will re-render the component

//in react ui can be updated by himself with the help of hooks
//hooks are special functions that can be used to manage state and lifecycle methods in functional components

//hooks always start with use word
//there are many hooks in react like useState, useEffect, useContext, useReducer etc
function App() {
  // usestate is hook which return the arr of two size in which first is
  //variable and second is function

  let [counter,setCounter]=useState(15) // in bracket u can give default values

  // let counter=5; // by this we can't update the ui we can do it by usestate hook
  const addvalue=()=>{
    if(counter>=20){
      alert("counter can't be greater than 20")
      return;
    }
    counter=counter+1
    setCounter(counter) // by this we can update the ui
  }
  const reducevalue=()=>{
    if(counter<=0){
      alert("counter can't be less than 0");
      return;
    }
    counter=counter-1
    setCounter(counter)
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value : {counter}</h2>

      <button onClick={addvalue}>Add Count</button>
      <br />
      <button onClick={reducevalue}>Reduce Count</button>
    </>
  )
}

export default App
