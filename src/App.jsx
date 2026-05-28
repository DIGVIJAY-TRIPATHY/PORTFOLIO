import './App.css'
import Header from './components/Header/header.jsx'
import Hero from './components/Hero/hero.jsx'
import About from './components/About/about.jsx'
import Experience from './components/Experience/experience.jsx'
import Projects from './components/Projects/projects.jsx'
import Contact from './components/Contact/contact.jsx'
import Footer from './components/Footer/Footer.jsx'
import Skills from './components/Skills/Skills.jsx'
import { useState, useEffect } from 'react'

function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (!showScroll && window.pageYOffset > 300) {
        setShowScroll(true);
      } else if (showScroll && window.pageYOffset <= 300) {
        setShowScroll(false);
      }
    };

    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  return (
    <div className="App">
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects />
      {/* <Experience/> */}
      <Contact/>
      <Footer/>
      
      {showScroll && (
        <div className="scroll-top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <i className="fas fa-arrow-up"></i>
        </div>
      )}
    </div>
  )
}

export default App