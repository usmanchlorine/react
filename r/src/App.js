
import './App.css';
import About from './components/About';
import './components/Navbar.js';
import Navbar from './components/Navbar.js';
import './components/TextForm.mjs';
import TextForm from './components/TextForm.mjs';
import { useState } from 'react';
import {
  BrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";






function App() {
  const[mode,setMode] =useState('light'); // weather darkmode is variable or not 
  
  function toggleMode() {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor='#2d2d30';
      document.getElementById('root').style.backgroundColor='	#2d2d30';
      document.getElementById('root').style.color='white';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';
      document.getElementById('root').style.backgroundColor='white';
      document.getElementById('root').style.color='black';
    }
  
  }

  return (
    <>
    
    <Navbar title="textutils2" mode={mode} toggleMode={toggleMode}/>
    
    
    
    <Routes >
    <Route path='/' element={<TextForm label="Enter your text" id="hello"/>}/>
    <Route path='/about' element={<About/>}/>
    </Routes>
   
 
    

  

    </>
  )
}




export default App;
