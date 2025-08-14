import './App.css'
import { useEffect } from 'react'
import { useState } from 'react'
import LoggerComponenets from './components/LoggerComponenets'
import TimmerComponent from './components/TimmerComponent.jsx'
import DataFetcher from './components/DataFetcher.jsx'
import ResizeComponent from './components/ResizeComponent.jsx'
import MultiEffectComponent from './components/MultiEffectComponent.jsx'

function App() {
  // first -> The first Effect or the side Effect
  // second -> Cleanup Function Unmounting
  // thrid -> Dependency Array
  // The first effect runs after the component mounts
  // The cleanup function runs before the component unmounts or before the effect runs again

  function handleClick() {
    setCount(prevCount => prevCount + 1);
  }

  const [count, setCount] = useState(0);
  const [total, setTotal] = useState(0);

  // Variatnt 1 //
  // useEffect(() => {
  //   // console.log('Effect: Component mounted or updated')
  //   alert('I will run bro every time the component mounts or update')
  // })

  // Variatnt 2 //
  // runs only once when the component mounts
  // useEffect(() => {
  //   alert('I will run on only first render')
  // }, []) // Empty dependency array ensures it runs only on mount

  // variant 3 //
  // runs when count changes, and also on mount
  // useEffect(() => {
  //   console.log('Effect: Count changed to', count)
  //   return () => {
  //     console.log('Cleanup: Component unmounted or before next effect')
  //   }
  // }, [count]) // Runs when count changes


// Variant 4 //
  // useEffect(() => {
  //   console.log('Effect: Count changed to', count)
  //   setTotal(prevTotal => prevTotal + count);
  //   return () => {
  //     console.log('Cleanup: Component unmounted or before next effect')
  //   }
  // }, [count , total]) // Runs when count changes
  


  // variant 5 //
  // useEffect(() => {
  //   alert('Count Updated');
  //   setTotal(prevTotal => prevTotal + count);
  //   return () => {
  //     alert('Count is Unmounted from the UI');
  //   }
  // }, [count]) // Runs when count changes  

  return (
    <>

    {/* <LoggerComponenets />
    {/* <TimmerComponent /> */}
{/* 
    <DataFetcher /> */}
    {/* <ResizeComponent /> */} 
    <MultiEffectComponent />

      {/* <h1>Count: {count}</h1>
      {/* <h1>useEffect Example</h1>
      <button onClick={handleClick}>Click Me</button>
      count is : {count} */}
    </>
  )
}

export default App