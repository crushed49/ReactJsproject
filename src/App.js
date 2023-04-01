// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react';
import Alerts from './components/Alerts';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";


function App() {
  const [mode,setMode] = useState("light");

  let toggleMode = () => {
    if(mode === "light"){
      setMode("dark")
      document.body.style.backgroundColor = 'grey'
      showAlert("Dark mode enabled", "success")
    }
    else{
      setMode("light")
      document.body.style.backgroundColor = 'White'
      showAlert("Light mode enabled", "success")
    }
  }

  const [alert,setAlert] = useState(null);

  let showAlert = (message,type) => {
      setAlert({msg:message,
      type:type})
      setTimeout(() =>{ setAlert(null);}, 1500)
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
      <Router>
      <Navbar title = "Text Utility" mode = {mode} toggleMode = {toggleMode}/>
      <Alerts alert = {alert}/>
      <div className='container'>
      <Routes>

          <Route path="/" element={<TextForm  title = 'Text to be changed' mode = {mode} showAlert = {showAlert} />}/>
          <Route path="/about" element={<About />}/>
      </Routes>
      </div>
      </Router> 
      </>  
  );
}

export default App;
