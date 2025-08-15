import React from 'react'
import { useContext } from 'react'
import { ThemeContext } from '../App.jsx'


function ChildC() {
  const {theme , setTheme} = useContext(ThemeContext);

  const HandleClick = () => {
    if(theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }
  // const user = useContext(UserContext);
  return (
    <div>
      <button onClick={HandleClick}> 
        Change Theme
      </button>
    </div>
  )
}

export default ChildC
