import { useState } from 'react'
import './App.css'

function App() {  

  let [counter,setCounter]  = useState(0);

  const buttonsStyle = {
    padding:10,backgroundColor: 'black',color:'white'
  }
  // increment function
  function incrementHandler() {
    setCounter(counter++);
  }

  // decrement function
  function decrementHandler() {
    setCounter(counter--);
  }
  // reset function
  function resetHandler() {
    setCounter(0);
  }




  return (
    <>
    <h1>{counter}</h1>
    <button style={{buttonsStyle}} onClick={incrementHandler}>increment</button>
    <button style={{buttonsStyle}} onClick={decrementHandler}>decrement</button>
    <button style={{buttonsStyle}} onClick={resetHandler}>reset</button>
    {/* <App></App> */}
    </>
  )
}








export default App
