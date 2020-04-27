import React, { useState, useEffect } from 'react';
import './App.css';

import { AiOutlineArrowUp } from 'react-icons/ai';
import FadeIn from 'react-fade-in';

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {

  const [isTop, setIsTop] = useState(0)

  useEffect(() => {
    window.addEventListener('scroll', (eve) => {
      setIsTop(window.scrollY)
    });
    return () => {
      window.removeEventListener('scroll', (eve) => {
        setIsTop(window.scrollY)
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
      <About />
      {
        isTop ?
          <FadeIn delay={100} transitionDuration={600}>
            <div onClick={() => { scrollToTop() }} className="floating-button"><AiOutlineArrowUp size="20" color="white" /></div>
          </FadeIn> :
          null
      }
    </div>
  );
}

export default App;
