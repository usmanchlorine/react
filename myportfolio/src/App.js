
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import Navbar from './pages/Navbar';
import { useState } from 'react';
import Hero from './pages/Hero';
import About from './pages/About';
import Card from './pages/Card';
import Projects from './pages/Projects';

function App() {
  const [mode,setMode]=useState('light')

  const toggle_mode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#020202';
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white';
    }
  }


  return (
    <>
    
    <ChakraProvider>
     <Navbar mode={mode} toggleMode={toggle_mode} />
     
      <Hero mode={mode}/>
      <About mode={mode}></About>
      <Projects mode={mode}/>
    </ChakraProvider>
    
    </>
  );
}

export default App;
