import React, { useEffect, useRef, useState } from 'react'
import Particle from './components/particle'
import Navbar from './components/Navbar'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Home from './Pages/Home'
import About from './Pages/About'
import Education from './Pages/Education'
import Skills from './Pages/Skills'
import Projects from './Pages/Projects'
import Contact from './Pages/Contact'
import Footer from './components/Footer'
import DarkMode from './components/DarkMode'
import ScrollButton from './components/ScrollButton'

export default function App() {
  const [isDark, setIsDark] = useState(false)

  const topRef = useRef(null);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsAtTop(false);
      } else {
        setIsAtTop(true);
      }
    };


    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);


  const scrollToTop = () => {
    topRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <Particle isDark={isDark} />
      <div className='relative'>
        <Navbar />
        <DarkMode isDark={isDark} setIsDark={setIsDark} topRef={topRef} />
        <Home isDark={isDark} />
        <About isDark={isDark} />
        <Education isDark={isDark} />
        <Skills isDark={isDark} />
        <Projects isDark={isDark} />
        <Contact isDark={isDark} />
        <Footer />
        <ScrollButton topRef={topRef} isAtTop={isAtTop} scrollToTop={scrollToTop} />
      </div>
    </>


  )
}
