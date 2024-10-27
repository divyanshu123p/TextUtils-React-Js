import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './MyComponents/Navbar';
import Home from './MyComponents/Home';
import News from './MyComponents/News';
import TextUtils from './MyComponents/TextUtils';

function App() {
  const [switchTab, setSwTab] = useState("Home");
  const [toggleDark, setToggleDark] = useState("light");

  return (
    <div className="App">
      <header>
        <Navbar currentTab = {setSwTab} toggleDark={toggleDark} setToggleDark={setToggleDark}/>
      </header>

      {/* {prompt("What is your name")} */}
      
      <div className='backg'>
        {switchTab==="Home" && <Home color={toggleDark}/>}  
        {switchTab==="TextUtils" && <TextUtils color={toggleDark}/>}  
        {switchTab==="News" && <News color={toggleDark}/>}
      </div>
      
    </div>
  );
}


export default App;
