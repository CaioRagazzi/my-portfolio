import React, { useState, useEffect } from 'react';
import './App.css';

import { AiOutlineArrowUp } from 'react-icons/ai';

import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import About from "./pages/About";
import Work from "./pages/Work";
import Projects from "./pages/Projects";

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
      <Projects />
      <Work />
      <About />

      <div onClick={() => { scrollToTop() }} className={ positionY === 0 ? 'floating-button-none' : 'floating-button-top'} ><AiOutlineArrowUp size="20" color="white" /></div> :

    </div>
  );
}

export default App;
