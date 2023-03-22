
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import Navbar from './pages/Navbar';
import { useState } from 'react';
function App() {
  const [mode,setMode]=useState('light')

  const toggle_mode=()=>{
    if (mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='#181D27';
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


    </ChakraProvider>
    
    </>
  );
}

export default App;
