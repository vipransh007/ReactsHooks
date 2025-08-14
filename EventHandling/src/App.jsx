import { useState } from 'react'
import './App.css'

function App() {
const [Text, SetText] = useState("click Me")
  // function handleClick(){
  //   SetText("You Clicked Me MotherFucker")
  // }

  function handleInputChage(event){
    console.log(event.target.value)
  }

  function handleOnSubmit(event){
    event.preventDefault() // Prevents the default form submission behavior
    // You can handle the form submission logic here
    // For example, you can access the input value like this:
    // const inputValue = event.target.elements[0].value;
    // console.log(inputValue);
    // Or if you want to log the value of the input field:
    alert("Form submitted");
    console.log(event.target.value)
  }
  return (
    <div>
      {/* <p style={{height:"2rem", border:'2px solid black'}}>  Vo bolegi acha ji and apko bolna hai hanji</p> */}

    <form onSubmit={handleOnSubmit}> 
      <input type="text" onChange={handleInputChage} />
      <button type='submit'> Submit</button>
    </form>

      <button onClick={() => {
        SetText("You Clicked Me")
      }}> 
        {Text}
      </button> 
    </div>
  )
}

export default App
