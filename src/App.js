// import logo from './logo.svg';
import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';


function App() {
  const [mode,setMode] = useState("light");

  let toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = 'grey'
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'White'
    }
  }
  return (
/*    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
*/
      <>
      <Navbar title = "Text Utility" mode = {mode} toggleMode = {toggleMode}/>
      <div className='container'>
      <TextForm  title = 'Text to be changed' mode = {mode} /> 
      {/*<About /> */}
      </div>

      </>  
  );
}

export default App;
