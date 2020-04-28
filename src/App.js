import React, { useState, useEffect } from 'react';
import './App.css';

import { AiOutlineArrowUp } from 'react-icons/ai';
import FadeIn from 'react-fade-in';

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Work from "./components/Work";

function App() {

  const [positionY, setPositionY] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', (eve) => {
      setPositionY(window.scrollY)
    });
    return () => {
      window.removeEventListener('scroll', (eve) => {
        setPositionY(window.scrollY)
      });
    }
  }, [])

  function scrollToTop() {
    window.scrollTo(500, 0);
  }

  return (
    <div className="App">
      <NavBar />
      <Home />
      <Work />
      <About />

      <div onClick={() => { scrollToTop() }} className={ positionY === 0 ? 'floating-button-none' : 'floating-button-top'} ><AiOutlineArrowUp size="20" color="white" /></div> :

    </div>
  );
}

export default App;
