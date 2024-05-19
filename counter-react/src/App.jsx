import { useState } from 'react'
import './App.css'

function App() {  

  let [counter,setCounter]  = useState(0);

  // Styles applied to buttons
  const buttonsStyle = {
    padding:10,margin:5}

  const incrementStyle = {
    backgroundColor:"blue"}

  const decrementStyle = {
    backgroundColor:"purple"}

  const resetStyle = {
   backgroundColor:"red"}

  // increment function
  function incrementHandler() {
    setCounter(++counter);
  }

  // decrement function
  function decrementHandler() {
    setCounter(--counter);
  }
  // reset function
  function resetHandler() {
    setCounter(0);
  }




  return (
    <>
    <h1>{counter}</h1>
    <button style={{...buttonsStyle, ...incrementStyle}} onClick={incrementHandler}>increment</button>
    <button style={{...buttonsStyle,...decrementStyle}} onClick={decrementHandler}>decrement</button>
    <button style={{...buttonsStyle,...resetStyle}} onClick={resetHandler}>reset</button>
    </>
  )
}








export default App
